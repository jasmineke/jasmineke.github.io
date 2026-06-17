/* Blocky "colored-in" blue gradient background.
 *
 * Renders a full-viewport grid of little cells onto a <canvas>. Each cell is
 * filled with the colour of an underlying, slowly drifting blue field sampled at
 * the cell's centre. On load the cells animate from a pale base to their target
 * colour with a staggered delay, so the gradient appears to get "painted in"
 * block by block. After the reveal the field keeps drifting, so the blocks keep
 * subtly recolouring. Inspired by paper.design. No dependencies.
 */
(function () {
  var CELL = 9;         // cell size in CSS px (small blocks)
  var GAP = 1;          // gridline thickness (base colour shows through)
  var LOOP = 14;        // seconds per seamless loop
  var REST = 0.25;      // min fraction of target colour during the sweep
  var WAVES = 1.3;      // number of reveal waves across the sweep axis

  // Palette: pale base -> light blue -> deeper blue
  var BASE = [238, 243, 251];
  var MID  = [150, 189, 235];
  var DEEP = [74, 128, 210];

  var canvas = document.createElement('canvas');
  canvas.id = 'gradient-canvas';
  document.body.insertBefore(canvas, document.body.firstChild);
  var ctx = canvas.getContext('2d');

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var dpr, cols, rows, jitter, W, H;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cols = Math.ceil(W / CELL);
    rows = Math.ceil(H / CELL);

    // Stable per-cell random jitter for an organic reveal order
    jitter = new Float32Array(cols * rows);
    for (var i = 0; i < jitter.length; i++) jitter[i] = Math.random();
  }

  // Underlying blue field: sum of a few drifting gaussian blobs. Driven by
  // `phase` (radians, 0..2π per loop) and integer harmonics of it, so the field
  // is exactly periodic over one LOOP — no seam when the animation wraps.
  // u, v in 0..1; returns intensity 0..1.
  function field(u, v, phase) {
    // Blobs anchored near the edges/corners so the centre stays off-white and
    // only a faint blue collects toward the edges. Low amplitudes keep it subtle.
    var s = 0;
    s += 0.48 * blob(u, v, 0.92 + 0.05 * Math.sin(phase),
                           0.88 + 0.05 * Math.cos(phase), 0.32);
    s += 0.38 * blob(u, v, 1.02 + 0.04 * Math.cos(phase * 2),
                           0.42 + 0.10 * Math.sin(phase), 0.28);
    s += 0.30 * blob(u, v, 0.05 + 0.05 * Math.sin(phase),
                           0.16 + 0.08 * Math.cos(phase * 2), 0.26);
    s += 0.24 * blob(u, v, 0.28 + 0.08 * Math.sin(phase * 2),
                           0.96 + 0.04 * Math.cos(phase), 0.24);
    return s > 1 ? 1 : s;
  }
  function blob(u, v, cx, cy, r) {
    var dx = u - cx, dy = v - cy;
    return Math.exp(-(dx * dx + dy * dy) / (r * r));
  }

  function colorFor(i) {
    // i in 0..1 -> BASE -> MID -> DEEP
    var a, b, f;
    if (i < 0.5) { a = BASE; b = MID; f = i / 0.5; }
    else { a = MID; b = DEEP; f = (i - 0.5) / 0.5; }
    var r = (a[0] + (b[0] - a[0]) * f) | 0;
    var g = (a[1] + (b[1] - a[1]) * f) | 0;
    var bl = (a[2] + (b[2] - a[2]) * f) | 0;
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  }

  var TWO_PI = Math.PI * 2;
  var start = null;

  function draw(now) {
    if (start === null) start = now;
    var elapsed = (now - start) / 1000;
    // phase wraps 0..2π every LOOP seconds -> everything below is periodic, so
    // the loop is seamless (the frame at phase 2π is identical to phase 0).
    var phase = reduceMotion ? 0 : (elapsed / LOOP) * TWO_PI % TWO_PI;

    // Base colour fills the gridline gaps
    ctx.fillStyle = 'rgb(' + BASE[0] + ',' + BASE[1] + ',' + BASE[2] + ')';
    ctx.fillRect(0, 0, W, H);

    for (var gy = 0; gy < rows; gy++) {
      for (var gx = 0; gx < cols; gx++) {
        var u = (gx + 0.5) / cols;
        var v = (gy + 0.5) / rows;
        var target = field(u, v, phase);

        // Traveling reveal wave sweeping along the diagonal. As phase advances
        // the bright band moves across, so blocks continuously "colour in".
        // Periodic in phase -> seamless. Per-cell jitter softens the wavefront.
        var idx = gy * cols + gx;
        var p = u * 0.55 + v * 0.45 + jitter[idx] * 0.05;
        var wave = 0.5 - 0.5 * Math.cos(phase - TWO_PI * WAVES * p);
        var factor = reduceMotion ? 1 : (REST + (1 - REST) * wave);

        var shown = target * factor;
        if (shown <= 0.002) continue; // leave base showing

        ctx.fillStyle = colorFor(shown);
        ctx.fillRect(gx * CELL + GAP, gy * CELL + GAP, CELL - GAP, CELL - GAP);
      }
    }

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', function () {
    resize();
    if (reduceMotion) requestAnimationFrame(draw); // redraw static frame
  });
  requestAnimationFrame(draw);
})();
