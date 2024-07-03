---
title: 'OpenFund: Quadratic Funding for RadicalXChange'
publishDate: 2020-10-15 11:09:38
description: 'Demonstrates how Quadratic Funding (in fiat currencies) can be made as intuitive as legacy fundraising platforms.'
seo:
  image:
    src: openfund.png
    alt: screenshot of a fundraising platform project screen with an image, funding targets and description
---

## Background

[Quadratic funding](https://www.wtfisqf.com/) (also known as "Plural funding") is a an exciting new way of funding public goods using a mechanism that more optimally represents the actual needs of citizens. Rather than the frequently distorted process we typically use of electing representatives to fight over taxes and budget priorities, Quadratic funding is a decentralized grant matching process that incentivizes citizens to collectively fund shared projects.

RadicalXChange is the organization promoting and researching applications of these new approaches, and they ran a hackathon to experiment with Quadratic funding for fundraising. [OpenFund](https://github.com/moarsel/openfund) was my winning submission to the [GitxChange hackathon](https://gitcoin.co/issue/RadicalxChange/GitxChange/5/100023819). It demonstrates how Quadratic Funding (in fiat currency) can be made as intuitive and perhaps even more compelling than traditional fundraising platforms like Kickstarter or GoFundMe.

# OpenFund

My concept for OpenFund was to take the hackathon challenge and use a modern front end architecture to build a simple, compelling minimum viable product of a Quadratic funding platform. It shows how the financial features needed for better funding of public goods can be quickly built on the [Stripe](https://stripe.com/) platform).

<img src="/mood-board.png" alt="a scattered collection of screenshots on a zoomed out figma canvas" class="feature-image">

As part of the challenge of making the application approachable and intuitive, I wanted to build a simple design language that fit the RadicalExchange aesthetic but that also worked in less editorial, more interactive application. To accomplish this I put together a moodboard and then customized a Tailwind CSS Figma library and built a mini component library with React + Tailwind.

<img src="/qf-overview.png" alt="a project funding page showing the amount of matching funds being applied" class="feature-image">

## Next steps

The resulting code from the hackathon is open source, and any organization that wants a quadratic funding platform can take this and run with it. The next step is to put it in front of real people and battle test it before it goes live.
