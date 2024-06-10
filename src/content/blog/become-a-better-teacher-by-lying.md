---
title: Becoming a better teacher by lying
description: How telling white lies can make you a better teacher
publishDate: 'Aug 30 2023'
---

How I made our absurdly complex modern software development stack sound reasonable

![Screenshot of code snippet that says “let true = false”](https://cdn-images-1.medium.com/max/1600/1*lZhzHRahNuc8Y0KDusE3Vg.png)

_Example simplified for better understanding_

I was recently teaching some non-technical clients about web development and I really had to rack my brain to figure out how to explain the different pieces of our modern tech stack. For an extra challenge, I was doing my best to explain it to my francophone clients in my grade school french, so I _really_ had to boil it down for myself.

My goal was to give an intuitive understanding of the big picture, so that they had the mental model required to manage the project. Here’s some of what I taught:

- A browser is just an app that opens HTML files that we’ve requested from other computers (called servers).
- HTML, CSS, and JS combine to make up a web site’s structure, appearance, and functionality.
- The limits of plain static HTML files and why we use programs on our server to create HTML files that are dynamically customized for a particular user.
- Why React is a popular tool for making reusable pieces of websites.
- Why tailwind is a popular tool for reusable CSS styles.
- Why I chose remix to return dynamic content for specific users.
- Why we use github as a collaboration tool to put our code files.

So, that’s already a ton, but it’s everything the client needed to understand the big picture of how the project works for them to start getting their hands dirty.

Now, if you’re thinking “some of these statements aren’t quite true” you’re not wrong, but our brains can only hold so much, and my goal was to outline a mental model, not teach a long list of facts.

Yes, I confess, I lied to my client. In fact, any simple enough mental model for a beginner to understand inevitably doesn’t tell the truth, the whole truth, or nothing but the truth. I could pick any of the statements above and point out glaring omissions that software engineers might need to learn at some point.

For example, browsers are incredibly complicated engineering marvels with an intimidating depth of functionality. They aren’t just HTML file viewers, but for someone who uses the mental model is “I have files and apps that open them”, anything beyond that is unlikely to be retained. So it’s a more useful starting point to say “Hey look I can inspect element on our homepage and change the HTML because it’s just like a file I’ve downloaded to my computer!”.

Likewise, if I explain that a function in javascript is just a way to create a reusable piece of code, maybe that’s a simplification that makes math nerds angry with me. But honestly the concept of a function is totally unintuitive, so when we introduce it the first time we need to answer the underlying question “why should I care to learn this concept?” not “what is the platonic ideal of a function”.

With that understanding of a function in place, I can now explain why we use React by simply saying: “look this React component is just a kind of function. It’s a reusable piece of code for our HTML structure, CSS style, and JS functionality”. The history of JS frameworks, client side applications, or React as the [platonic ideal of UI libraries](https://rauchg.com/2015/pure-ui) doesn’t matter.

Finally, to introduce [Remix](https://remix.run/docs/en/main/pages/technical-explanation), we build on top of our mental model of servers plus React components to show how we wire up our data from end to end. We know enough that I can open up a real page of our app on github, and my clients have a rough understanding of what’s going on, without needing to wade through the decades of [advancements](https://en.wikipedia.org/wiki/ECMAScript_version_history), [cruft](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/), and [leaky abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/) that led to the modern web stack.

But do I regret lying? No, in fact I should simplified a lot more because teaching is about trying to make the information “useful, not true”. Good teaching actually requires a lot of lying. If this makes you uneasy, maybe just tell yourself that you’re “creating abstractions with an accessible affordance for your users to hold onto”.
