# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Node js build script

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I started this challenge because my current project at work doesn't involve much in the way of modern frontend problem-solving; I just wanted to implement a bunch of coherent designs and make them responsive and whatnot, because that's my jam.

#### Stack

##### Vue?

This is a multi-page website that I wanted to scaffold out quickly so I could get to the layouts. As such my first thought was to reach for Nuxt.js so I didn't have to worry about routing and page templates and whatnot.

But I rapidly got bogged down in project config to avoid tooling errors, getting the Content API to read JSON, directory structure... there was too much between me and what I wanted to get done, so I ditched it.

##### Svelte?

It seems that Sapper, which I've enjoyed using in the past, is deprecated in favour of Svelte-kit, which is in some kind of Alpha release state, so I didn't fancy navgating any problems that might come out of that, either.

##### HTML/CSS/JS

I decided to go back to basics with the implementation and take the following approach:

Build out a single page with HTML and vanilla CSS and JS and once I was happy with it, convert it to a template and generate the other pages with Node.

#### Accessibility

The first hurdle with this challenge was how to structure the HTML to be accessible to screen readers. The page document _could_ have displayed each content section sequentially for a truly baseline experience -- and I'd be interested in investigating if that approach lends itself to progressive enhancement -- but it is, an accessible tab component seemed to be underlying structure.

I read up on MDN about the expected behaviour for components with tablist and tabpanel aria roles, and adapted their example code to the project's needs. I'm not 100% satisfied that the experience is adequate for assistive tech users, but I think I have a solid foundation.

Without adopting some sort of pattern for this from the outset, I don't see how the finished article could be in any way predictably navigable to screen readers.

#### Image scaling

Unexpectedly, the second-biggest roadblock I had with the challenge was getting the planet images to scale properly across screen sizes. It's easy to present an SVG at its intrinsic size on desktop, and at a proportion of screen-width on mobile, but getting, say, Mercury to be proportionally smaller than Jupiter on mobile had me stumped for a while.

Eventually I added some additional properties to the JSON data and a combination of CSS custom variables and CSS calc() functions to get the result I wanted. Respect to the Frontend Mentor designer who gave the assets a consistent ratio to scale by across mobile, tablet and desktop!

### Continued development

I have a job and a family and this was a mini-project I squeezed into odd hours in my week. There are a lot of aspects I consider unfinished, and I'll probably log them in a github project board to demonstrate awareness, even if I never get around to resolving them.

Off the top of my head, here's what's outstanding:

- validate a11y
  -- image alts
  -- aria labels all good?
  -- mobile menu button labelled properly
  -- panel content as sections with ~~sr-only~~ noscript section headings
- mobile menu
  -- expand tap target on items
  -- complete design
  -- menu transitions
- images
  -- better Geology tab transitions
  -- "flap" animation on Internal Structure
  -- prevent layout shift on load?
- hover states on desktop nav
- refactoring
  -- script.js and
  -- index.js are very duplicative
  -- that CSS... oy!
- test addition of planets
- PWA? all this stuff is eminently cacheable
- page titles
- favicons

### Conclusion

This was a nice-sized project to do in spare time over the course of a week. I liked constructing my own crappy build process.

There were all kinds of fiddly, annoying aspects to the developer experience, but it felt good to fully understand everything that was happening.

Manually handling component state and writing functions to apply classes was a bit of an eye-opener. I might take a look at MVC patterns if I do anything similar.

CSS management was, as always, a pain in the arse. If I could get the build process right I'd happily use Tailwind for a project like this; it would've made things much easier.

I kinda wish I'd spent more time planning and that I'd done the boring bits first, and got them really robust before going on to the content.

### Useful resources

- [Aria Tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role) - Tabbed information is the main event in this site; it needs to be built on some kind of accessible pattern.

- [Node](https://betterprogramming.pub/how-to-build-a-simple-static-site-generator-using-node-js-6425b71272e0) - I come back to this article regularly as a basis for using Node to generate a website.

- [CSS calc()](https://css-tricks.com/a-complete-guide-to-calc-in-css/) - It'd be easy to over-use `calc()` I reckon, but for this one I needed it.

## Author

- Frontend Mentor - [@markup-mitchell](https://www.frontendmentor.io/profile/markup-mitchell)
- Twitter - [@markup-mitchell](https://twitter.com/markup_mitchell)
