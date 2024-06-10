---
title: How I Quickly Catch Accessibility Mistakes
description: Here’s a quick way to catch your biggest accessibility problems sooner.
publishDate: 'Sept 10 2016'
---

![smashed computer keyboard](https://cdn-images-1.medium.com/max/1600/1*uM7VCLq_Lx1JSYLUG04jSg.png)

If you’re a developer, designer, or stakeholder involved in building a web application, you have to make sure your application is accessible to all users. Not only is it the right thing to do (and a legal requirement in most places), but it’s also one of the distinguishing factors of a high quality product.

We all get annoyed when a website uses unnecessary flash animations, breaks the “back” button, or hijacks our page scrolling. When a website breaks our expectations, it’s easy to interpret it as a lack of empathy for the user— even if it’s not on purpose. If your website doesn’t follow accessibility best practices, you’re making the exact same type of mistake: breaking your users’ expectations. It only takes a few minutes during your regular development cycle to avoid making accessibility mistakes.

#### Here’s a quick and easy way to catch the biggest problems sooner:

1.  **Use one of the many accessibility auditing tools to check the source code of your website for errors.** Open up chrome devtools and go to the audit tab. Run the Lighthouse accessibility audit on each page of your site. If you’re a developer, you can run [the command line tool](https://addyosmani.com/a11y/) to check for errors as you go. This is a great way to catch obvious mistakes like insufficient contrast but _does not catch all the problems that arise from different interactions_.
2.  **Check the interactions on your page for accessibility issues.** If you’re on a Mac, turn on Voiceover by pressing `CMD`+ F5 (or go to system preferences > accessibility > voiceover). This will give you a **much** better idea of what a user with a screen reader will perceive in your app.
3.  **Run through your app by only using your keyboard.** Use the tab key to run through each input of your app and test every piece of functionality. With voiceover on, press control+option+arrow keys to navigate the content on the page.

**_Here are some questions to ask yourself while you do this exercise:_**

- **Can you access every part of the page?** Do you ever get stuck in a loop or have to use your mouse to access part of the page?
- **Can you always see where the keyboard is focused**? Can you both hear and see where the keyboard focus is? A common mistake is removing the focus border around buttons.

![button with a blue outline](https://cdn-images-1.medium.com/max/1600/1*3k4e01nNbm7eGpSDZIKJXw.png)

Don’t make that blue outline invisible! See [http://www.outlinenone.com/](http://www.outlinenone.com/)

- **Are there a large number of links that I have to cycle through before I get to the main content**? If so, you may need to implement [skip links](http://a11yproject.com/posts/skip-nav-links/).

![Skip link example from getbootstrap.com](https://cdn-images-1.medium.com/max/1600/1*zR5G4vK6nSO003j0f0SPDw.png)

- **When you focus on an input element, is the label of the element spoken to you**? Do you always understand what the input is for, without relying on visual cues? If not, make sure you are [using labels (not placeholders)](https://html.spec.whatwg.org/multipage/forms.html#attr-input-placeholder) or additional [ARIA attributes](https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html) to describe your fields. Don’t forget to use `aria-describedby` to associate any inline validation errors with your input.
- **Does voiceover announce the different regions of the page when it loads (main content vs navigation, etc.)**? If not, you may need to change from just using DIVs to using more [semantic HTML5 tags](http://html5doctor.com/nav-element/) to structure your page.
- **When a form is submitted, or an inline message pops up during an interaction, does voiceover give any feedback?** Your little popup might be delightful to some users, but is the information available to a screen reader? If not, you may need to implement [ARIA Live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to properly announce the important information (some front-end frameworks like AngularJS have modules that make this part dead simple).
- **Does the app manage focus in a reasonable way?** For example, if I open a modal window, does the keyboard focus get put in the modal? Can my keyboard focus get lost outside of the modal window while it’s still open? [Managing keyboard focus](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets) is a crucial interaction that says a lot about the quality of your web app (and impacts mobile usability as well).
- **Can you understand the content of significant images?** Using alt text to describe images is accessibility 101!
- **Can you press buttons with spacebar, and links with the return/enter key?** This surprises a lot of people, but there is a [big difference between links and buttons](http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/), and using them interchangeably annoys keyboard users.

> _Disclaimer:_ Using these heuristics is a great way to catch glaring errors, but they are also no replacement for doing actual accessibility usability tests with real people. These tips are also not nearly as comprehensive as the [WCAG guidelines](https://www.w3.org/TR/WCAG20/), but I hope they are a lot more understandable and actionable!

Accessibility is an important factor in quality of your web application, and it is crucial to usability for people with disabilities, keyboard users, and older users. You wouldn’t ship an application that didn’t work well with a mouse — why should a keyboard or a screenreader be any different?

**More helpful resources for practical accessibility testing:**

- The A11Y Project - [http://a11yproject.com/](http://a11yproject.com/)
- A more extensive checklist - [http://a11yproject.com/checklist.html](http://a11yproject.com/checklist.html)
- Using Voiceover in the Browser -[https://www.apple.com/voiceover/info/guide/\_1134.html](https://www.apple.com/voiceover/info/guide/_1134.html)
- Web Content Accessibility Guidelines -[https://www.w3.org/TR/WCAG20/](https://www.w3.org/TR/WCAG20/)
