---
title: "Food Baby"
date: 2021-09-24T00:00:00-00:00
tags: ["development"]
draft: false
---

![Food Baby app mockup](/images/food-title.png#banner)
{{<h1 class="right-justify color-dark-accent" text="Food Baby">}}
{{<span class="right-justify color-dark-accent" text="1st Place Google Cloud Award @ cmd-f">}}

{{<br>}}
{{<br>}}

> # Why did we make this app?
>
> For the to-be-moms around the world, sometimes knowing what is healthy for their baby isn't always clear. Although some foods and drinks like alcohol are easier to identify as harmful, there are also more obscure foods like cheese and chips that are less obvious and sometimes harmful in certain amounts.
>
> We thought of the pregnant women that go to get groceries, sometimes unsure about which foods to get. Would this be harmful? Can I eat this much?
>
> We wanted to create an app that could be a helping hand **for future moms braving the grocery aisles**.
>
> **Duration**: {{<span class="color-dark-accent" text="24 hours">}}\
> **Tools**: {{<span class="color-dark-accent" text="Figma, Procreate, (lots of) Discord">}}\
> **Team**: {{<span class="color-dark-accent" text="Sheena Cheng, Michelle Du, Tiantian Li">}}\
> **Role**: {{<span class="color-dark-accent" text="UI/UX Designer and Front End Developer">}}

![Food Baby app mockup](/images/aether.png#half-banner)

{{<br>}}
{{<br>}}

# The Lives of To-Be-Moms

Being a mom, and caring for a child for the first time can be difficult and sometimes full of the unknown. With physical changes and fluctuations in hormones affecting mood and sometimes mental well-being, it can be really difficult to balance all of these with other life duties.

Around **358 thousand** women gave birth in 2020, according to [Statistics Canada](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310041501). For a woman who chooses to give birth, there are many things to balance that it can be easy to overlook diet. Eating harmful foods is not the only thing to-be-moms are worried about in terms of diet. Moms are also concerned about **weight gain**, **body-image** and being **too restricted in diet** according to the [NY Times](https://www.nytimes.com/2020/04/16/parenting/postpartum-body-image.html).

{{<br>}}
{{<br>}}

# Our Road Blocks

We didn't have live feedback from moms because of the time constraints of the hackathon. As a consequence, we had to implement quickly and skipped the opportunity to delve deeper. From this, I learned that sometimes, to meet deadlines, extensive research is not always possible. So learning to identify key misconceptions or knowledge gaps is vital to finding pain points more efficiently.

To brainstorm possible pain points and features to the best of our ability, we asked:

{{<br>}}
>
> 1. What do expecting mothers need to know in order to make informed decisions about food?
>
> 2. What are similar applications out there already doing?
>
> 3. Which features should be included or can be cut down?

{{<br>}}



{{<br>}}
{{<br>}}

# Low-Fidelity Prototype

After organizing our ideas and refining our features, we set out to create the main user flows for this app: **search** and **upload**.

![Food Baby opp](/images/foodbaby_searchdemo.gif#float-left)

{{<br>}}
{{<br>}}
{{<h2 class="normal-weight" text="Searching for food">}}
We wanted to incorporate a basic search function, since it was recognizable and a reliable feature in the case that people could not conveniently use the camera. Also, having a list made it easy to keep track of and "pre-plan" groceries

{{<h2 class="normal-weight" text="Feedback">}}
The main piece of feedback from my team was that the "check my food" menu that expands to "search", "upload" and "camera" felt like an extra interaction that wasn't really needed. This was also cluttering the menu, so getting rid of it led to more clarity for the user.

{{<br>}}
{{<br>}}
{{<br>}}
{{<br>}}
{{<br>}}

![Food Baby opp](/images/foodbaby_uploaddemo.gif#float-left)
{{<br>}}

{{<h2 class="medium-weight" text="Uploading photos">}}
 Our next piece of the puzzle was identifying foods based on a photo, making it clear to use and an enjoyable experience (hopefully). We decided to bypass the list step for photo uploads since users usually take a photo per item to decide, rather than collect photos and assess them at the end.

{{<h2 class="medium-weight" text="Feedback">}}
One of my teammates, [Sheena](https://scheng.ca/), pointed out that the "upload" and "camera" option together felt redundant.

We also noted that it was sometimes hard to find the home button -- so we decided for the final version to anchor the menu to the same locations. 

{{<br>}}
{{<br>}}
{{<br>}}
{{<br>}}
{{<br>}}


A closer look at the frames and prototyping:
{{<br>}}
{{<br>}}

![Food Baby opp](/images/foodbaby_flow.png#banner)

{{<br>}}
{{<br>}}

# High-Fidelity Prototype

Heading into the final stages of the app experience, we wanted to make sure we addressed the pain points we had gathered. So we revisited these questions:


{{<br>}}
>
> 1. What do expecting mothers need to know to make informed decisions about food?
>
> 2. What are similar applications out there already doing?
>
> 3. Which features should be included or can be cut down?

{{<br>}}

{{<br>}}
![Food Baby app proto1](/images/Frame_1.png#banner)
{{<br>}}
{{<br>}}
### 1. What do expecting mothers need to know to make informed decisions about food?

To try to tackle this problem, we focused on displaying information that was quick and easy to interpret. We also focused on the types of information a mom might want to know, and further places and resources they could use to get more info. 

One example of "easy interpretation" was the **colour coded** lists. 

>More specifically, the questions that were the focus of the information (after expanding one of the items on the list) can be summarized by these questions:
>
>* overall, is this good or bad for me?
>* in what amounts should I consume this food?
>* what are the specific health benefits/detriments?
>* what have other moms experienced cooking/consuming this food? (are there other side effects)
>

Although we couldn't implement and fully prototype every feature, we prioritized the important features by seeing which bits of data answered the most information, while taking up the smallest amount of screen real estate. This part was never realized in the 24 hours we had, however, the prototype shows a clear map we could possibly take in the future.
{{<br>}}
{{<br>}}

![Food Baby app proto2](/images/Frame_2.png#banner)

{{<br>}}

### 2. What are similar applications out there already doing?

For this question, we answered it by looking into the existing pregnancy apps out there. We noticed a few things:
>
>* most apps prioritized tracking and monitoring of the baby (responsive vs. proactive)
>* many combined several functions (size of baby, pregnancy facts, kick counters, etc.)
>
First off, we recognized that pregnancy is a lot more nuanced than an app can completely encapsulate. Knowing this, we didn't seek to emulate other apps, and instead tackled more diet specific problems. Even then, there were still things we didn't completely address, such as trimester-specific diets, certain myths around diets and food, as well as how diet can vary depending on fitness, body metabolism and more. These are definitely areas that would be interesting to explore.

Then, we looked at another field of apps: grocery apps. Here we noticed that simplifying into abstract tags was a very quick and easy way of categorizing foods that could also improve the efficiency of finding foods. Due to time constraints, we decided that having a basic search should be prioritized over tags, so we don't have much work on this, but this is definitely another area to work on.

{{<br>}}
{{<br>}}
### 3. Which features should be included or can be cut down?
Finally, we looked at if there was anything we could exclude, so we can reach our goal of pushing out an app. Some of these features were:
>
>* tags, in favour of getting a basic search done
>* a page for each food item, in favour of a drop down with more simplified info
>* a profile page (time constraints)
>* user survey, for current diet, trimester, etc. information (time constraints)
>


{{<br>}}
{{<br>}}
# My Team
I was so lucky to be able to work with such a talented group of developers, and beyond that, just good friends. Because this was our first time ever doing a fully online hackathon, adjusting to being completely online was an interesting challenge!

To combat the lack of human contact, we used **Discord** and stayed on call throughout the hackathon. And so, that gave us a lot more of an environment where we could easily find each other and join each other's voice channels (shout out to Discord for making such a nice place to just convene and organize teams). 

From experience, we also knew that there would be two different teams: front end and back end. And so we separated separate text and voice channels for these two teams. 
>
>Front-end was Tian Tian and me.
>
>Back-end was Sheena and Michelle!
>
We would also have a group sync everytime there was a major feature that needed to be updated, and did this often, to do a reality check between features and link up our designs and front-facing features to the Google Cloud API we were using.

Overall, for our first online hackathon, we worked really hard. But the things we learned and the idea we created was well worth it.



{{<br>}}
{{<br>}}
# What is the impact of Food Baby?

Because this was a 24 hour hackathon, many people felt like there was little impact to be made from a semi-working mobile webapp. However, I wanted to point out that, although there wasn't any testing done with pregnant moms, our team was able to learn lots from this experience. We had to consider multiple aspects because we were making this from the ground up, for example: on how we handle design hand-off and make personal workflows faster for future mobile designs.

### 1. Asking more pointed questions about implementation to devs.
>**Problem:** I realized that often, when diving into a design we weren't asking the most productive questions. Often, the real points of contention were when developers could not execute on a certain feature, not on their opinions on the aesthetics/usability of certain design elements.
>
>**Solution:** For future designs, asking the questions of "what limitations does this design have for developers vs. designers?" and balancing that tradeoff is more important than having a consensus on the colour and placement of aesthetics.

### 2. Prioritizing key features over details.
>**Problem:** When we handed off, there wasn't a clear structure to which key wire-frames we needed first to get a minimum viable product. Because of that, we just defaulted to organizing everything chronologically. 
>
>**Solution:** In the future, before diving in, I hope to approach our workflows at a higher level, and look at the frames that are essential to the user-flow story. Then, diving in to hammer out the details, rather than working on prototypes in a strictly linear timeline. Handling things in order of the key important frames, then 

In the end, I took away many key design lessons from this high-pressure but also high-reward experience. And, as a team, we also earned an unexpected [**1st place for Best Use of Google Cloud**](https://devpost.com/software/food-baby)!



**Still curious? Here's more:**

[home](/)
{{<br>}}
[blog](/posts)
{{<br>}}
[about](/about)
{{<br>}}
<!-- I wanted to create a safe space for to-be-moms, that felt easy to use but also warm and welcoming. I first started by creating a stylescape and gathering reference material from Dribbble, Behance and my own stash of references. 

![Food Baby opp](/images/food-style.png#banner)

What kind of experience is Food Baby?

To provide a little context, this project was a hackathon project my team and I did for cmd-f 2021. For this hackathon, we were not allowed to bring in prepared ideas, so we ideated, designed and created this app within 24 hours. After the hackathon, I decided to work on this project more and flesh out the design for my own practice and understanding.

If you're curious about the work we've accomplished within the 24 hours, [check this out](https://devpost.com/software/food-baby)!  -->
