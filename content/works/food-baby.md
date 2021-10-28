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

> ## Why did we make this app?
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

## The Lives of To-Be-Moms

Being a mom, and caring for a child for the first time can be difficult and sometimes full of the unknown. With physical changes and fluctuations in hormones affecting mood and sometimes mental well-being, it can be really difficult to balance all of these with other life duties.

Around **358 thousand** women gave birth in 2020, according to [Statistics Canada](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310041501). For a woman who chooses to give birth, there are many things to balance that it can be easy to overlook diet. Eating harmful foods is not the only thing to-be-moms are worried about in terms of diet. Moms are also concerned about **weight gain**, **body-image** and being **too restricted in diet** according to the [NY Times](https://www.nytimes.com/2020/04/16/parenting/postpartum-body-image.html).

{{<br>}}
{{<br>}}

## Our Road Blocks

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

## Low-Fidelity Prototype

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

## High-Fidelity Prototype

Heading into the final stages of the app experience, we wanted to make sure we addressed the pain points we had gathered. So we revisited these questions:


{{<br>}}
>
> 1. What do expecting mothers need to know to make informed decisions about food?
>
> 2. What are similar applications out there already doing?
>
> 3. Which features should be included or can be cut down?

{{<br>}}




### 1. What do expecting mothers need to know to make informed decisions about food?

To try to tackle this problem, we focused on displaying information that was quick and accurate to interpret. 

For example, the colour coded lists gave a definitive decision for each food. Specifically for yellow-listed foods (which meant that the food could be consumed, but with restrictions) the restrictions are clearly displayed next to the option. 
{{<br>}}
{{<br>}}
![Food Baby app proto1](/images/Frame_1.png#banner)
{{<br>}}
{{<br>}}

>Specifically, the questions that were the focus of the information (after expanding into the foods) can be summarized by these questions:
>
>* overall, is this good or bad for me?
>* in what amounts should I consume this food?
>* what are the specific health benefits/detriments?
>* what have other moms experienced cooking/consuming this food? (are there other side effects)
>

Although we couldn't implement and fully prototype every feature, we prioritized the important features by seeing which bits of data answered the most information, while taking up the smallest amount of screen real estate. This part was never realized in the 24 hours we had, however, the prototype shows a clear map we could possibly take in the future.
{{<br>}}
{{<br>}}
{{<br>}}
![Food Baby app proto2](/images/Frame_2.png#banner)




{{<br>}}
{{<br>}}

## What is the impact of Food Baby?

Because this was a 24 hour hackathon, it might feel like there was little impact to be made from a semi-working mobile webapp. Although there wasn't any testing done with pregnant moms, our team was able to learn lots. We had to consider multiple aspects because we were making this from the ground up, for example: on how we handle design hand-off and also my personal workflow for future mobile designs.

First, my personal workflow. I realized that often, when diving into a design we weren't asking the right **questions**. 


<!-- I wanted to create a safe space for to-be-moms, that felt easy to use but also warm and welcoming. I first started by creating a stylescape and gathering reference material from Dribbble, Behance and my own stash of references. 

![Food Baby opp](/images/food-style.png#banner)

What kind of experience is Food Baby?

To provide a little context, this project was a hackathon project my team and I did for cmd-f 2021. For this hackathon, we were not allowed to bring in prepared ideas, so we ideated, designed and created this app within 24 hours. After the hackathon, I decided to work on this project more and flesh out the design for my own practice and understanding.

If you're curious about the work we've accomplished within the 24 hours, [check this out](https://devpost.com/software/food-baby)!  -->
