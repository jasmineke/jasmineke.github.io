// @ts-check
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');

// --url <base> switches to remote-crawl mode (no local server)
const urlArgIdx = process.argv.indexOf('--url');
const REMOTE_BASE = urlArgIdx !== -1 ? process.argv[urlArgIdx + 1].replace(/\/$/, '') : null;

const ROOT = path.resolve(__dirname, '..', '..', '..');
const TODAY = new Date().toISOString().slice(0, 10);
const OUTPUT = path.join(ROOT, 'previous-versions', TODAY);
const PORT = 8787;

const SKIP_DIRS = new Set(['node_modules', '.git', 'previous-versions', '.agents', 'playwright-report']);

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.otf': 'font/otf',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const VIEWPORTS = [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

// ── Local mode helpers ────────────────────────────────────────────────────────

function findHtmlFiles(dir, base = dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(full, base, results);
    } else if (entry.name.endsWith('.html')) {
      results.push(path.relative(base, full).replace(/\\/g, '/'));
    }
  }
  return results;
}

function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0].split('#')[0];
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(ROOT, urlPath);
    const ext = path.extname(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';
    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  server.listen(PORT);
  return server;
}

// ── Shared helpers ────────────────────────────────────────────────────────────

function toSlug(input) {
  // Works for both a file path ('articles/foo.html') and a URL path ('/articles/foo')
  return input
    .replace(/^https?:\/\/[^/]+/, '')  // strip origin
    .replace(/\.html$/, '')
    .replace(/^\/+|\/+$/g, '')         // trim slashes
    .replace(/[/\\]/g, '-') || 'index';
}

async function captureInteractiveStates(page, slug, vpLabel) {
  const SELECTORS = [
    '.navbar-toggler',
    '[data-bs-toggle="dropdown"]',
    '[data-bs-toggle="collapse"]',
    '[data-bs-toggle="modal"]',
    '[data-bs-toggle="tab"]',
    '[data-bs-toggle="pill"]',
    'details summary',
    '.accordion-button',
  ].join(', ');

  const els = await page.$$(SELECTORS);
  let count = 0;

  for (const el of els) {
    try {
      if (!(await el.isVisible())) continue;
      await el.scrollIntoViewIfNeeded();
      await el.click({ timeout: 2000 });
      await page.waitForTimeout(350);
      await page.screenshot({
        path: path.join(OUTPUT, `${slug}-${vpLabel}-interact-${count}.png`),
        fullPage: true,
      });
      count++;
      try { await el.click({ timeout: 1000 }); await page.waitForTimeout(200); } catch {}
    } catch {}
  }

  return count;
}

async function snapshotPage(browser, pageUrl, slug) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(OUTPUT, `${slug}-${vp.label}.png`), fullPage: true });
      const states = await captureInteractiveStates(page, slug, vp.label);
      const note = states > 0 ? ` + ${states} interactive state(s)` : '';
      console.log(`  [${vp.label}] ${pageUrl}${note}`);
    } catch (err) {
      console.error(`  [${vp.label}] ERROR ${pageUrl}: ${err.message}`);
    }
    await ctx.close();
  }
}

// ── Remote crawl mode ─────────────────────────────────────────────────────────

async function runRemote(browser) {
  const visited = new Set();
  const queue = [REMOTE_BASE + '/'];

  while (queue.length > 0) {
    const currentUrl = queue.shift();
    const normalized = currentUrl.split('#')[0].split('?')[0].replace(/\/$/, '') || REMOTE_BASE;
    if (visited.has(normalized)) continue;
    visited.add(normalized);

    const slug = toSlug(normalized) || 'index';

    // Crawl links using a temporary page (desktop only to avoid double-crawl)
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    try {
      await page.goto(currentUrl, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(300);

      // Collect internal links for the queue
      const links = await page.$$eval(
        'a[href]',
        (anchors, base) =>
          anchors
            .map(a => a.href)
            .filter(href => href.startsWith(base))
            .map(href => href.split('#')[0].split('?')[0]),
        REMOTE_BASE
      );
      for (const link of links) {
        const norm = link.replace(/\/$/, '') || REMOTE_BASE;
        if (!visited.has(norm) && !queue.includes(link)) queue.push(link);
      }
    } catch {}
    await ctx.close();

    // Now take proper screenshots across viewports
    await snapshotPage(browser, currentUrl, slug);
  }

  return visited.size;
}

// ── Local serve mode ──────────────────────────────────────────────────────────

async function runLocal(browser) {
  const htmlFiles = findHtmlFiles(ROOT);
  if (htmlFiles.length === 0) {
    console.error('No HTML files found.');
    process.exit(1);
  }

  console.log(`Pages found: ${htmlFiles.join(', ')}\n`);
  const server = startServer();

  try {
    for (const file of htmlFiles) {
      const pageUrl = `http://localhost:${PORT}/${file}`;
      const slug = toSlug(file);
      await snapshotPage(browser, pageUrl, slug);
    }
  } finally {
    server.close();
  }

  return htmlFiles.length;
}

// ── Entry point ───────────────────────────────────────────────────────────────

async function run() {
  fs.mkdirSync(OUTPUT, { recursive: true });

  const mode = REMOTE_BASE ? `remote → ${REMOTE_BASE}` : 'local';
  console.log(`\nSnapshot — ${TODAY}  (${mode})`);
  console.log(`Output: previous-versions/${TODAY}/\n`);

  const browser = await chromium.launch();
  let pageCount = 0;

  try {
    pageCount = REMOTE_BASE
      ? await runRemote(browser)
      : await runLocal(browser);
  } finally {
    await browser.close();
  }

  console.log(`\nDone. ${pageCount} page(s) × ${VIEWPORTS.length} viewports captured.`);
  console.log(`Folder: ${OUTPUT}`);
}

run().catch(err => {
  console.error('\nSnapshot failed:', err.message);
  process.exit(1);
});
