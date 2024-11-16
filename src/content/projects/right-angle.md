---
title: 'Right Angle: making internet arguments less bad'
publishDate: 2015-05-15 11:09:38
description: 'Designed and prototyped a solution to bad arguments on the internet.'
seo:
  image:
    src: right-angle/splash.png
    alt: splash screen for the Right Angle app with a welcome message and an overview of the code of conduct.
---

## Background

In 2015 I wanted to improve my design skills so I took a course in UX design at Bitmaker labs (taught by the talented [Nathan Garvie](https://twitter.com/n8garvie)). The course involved designing an app or website over 12 weeks, starting from research, to wireframing, product testing, visual design, and pitching.

# The Problem

Philosophy teaches us how important a good argument is for improving our own understanding of a topic, and the internet always _seemed_ like such a unique opportunity to learn from different perspectives and let the good ideas float to the top. However, as we all know, online conversations tend to devolve very quickly. This was a problem that had been on my mind, so I decided to prototype some solutions to the specific problems that come with arguing on the internet.

I ended up landing in what may be the biggest community of open minded discussion on the internet -- Reddit. Don't dismiss me just yet though, because tucked away in the subreddit "Change My View", there are almost 250,000 people reading earnest, substantial arguments, giving their opinion on different subjects, and looking for arguments that will change their mind. Participants get points for changing the submitter's mind on a topic, and the community promotes a norm of open-mindedness.

## The Process

Throughout the course, I interviewed users to understand their discussion habits on the internet. I tried to understand why they used the channels they did (reddit, facebook, twitter, etc.), what job the platform did for them, what they were trying to accomplish, and what drew them in or pushed them away from having arguments.

**Not too surprisingly, the perception that your interlocutor will not change their opinion was the single biggest thing that makes people avoid online argument entirely.** Writing down your opinion not only takes a lot of time, but it also creates a feeling of vulnerability. In real life, arguments where there is a good amount of "give and take" feel the most satisfying. Argument is a rich human phenomenon that could be studied for a lifetime, but the insights from these interviews were enough to drive the initial mockups of the application.

<img src="/right-angle/create-flow.png" style="display:inline" width="49%">
<img src="/right-angle/agree-disagree.png" style="display:inline" width="49%">

<img src="/right-angle/trending.png" width="50%">

The design followed a lot of the functionality of the "Change My View" subreddit, but aimed to remove the feeling of anonymity of the interlocutor, and set the tone as if to say "This forum is for respectful open minded discussion".

It also aimed to provide a minimalistic editor that would be fun and rewarding to write in. I explored a lot of different interaction models, especially around the comment threads and replies, and ended up settling on a more simplistic solution with 3 levels of comments: main argument, response, and comments on that response.

## Prototype One

The initial mockup for testing was done in invision to get quick feedback and get a better feel for the information architecture and interactions.

<iframe width="438" height="930" src="//invis.io/CH2VKW5FN" frameborder="0" allowfullscreen></iframe>

## Prototype Two

I initially prototyped some of the app interactions in framer.js, although even as a programmer I found framer.js difficult to pick up quickly. I also tried out Principle and even a keynote presentation (which is probably the fastest way to get crude interactions done quickly).

Here's some rough visuals of the micro-interactions:

<video width="50%" controls>
  <source src="/right-angle/agree-microinteraction.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

# Prototype Three

I later built an MVP of the app using a lightweight setup: a firebase backend with twitter authentication and an angular.js front end. I intend on hosting it here soon to get more feedback and see how it is being used.

<img src="/right-angle/splash.png" width="50%">

Despite this being a quick side project, I think it was a good proof of concept. I believe the app could help allieviate some of the cognitive biases that cause arguments on the internet to devolve into uselessness.
