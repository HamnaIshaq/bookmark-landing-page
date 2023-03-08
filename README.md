# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

  #### Overall sections

  - [] Header navigation with dropdown for mobile devices
  - [x] Hero section
  - [] Features section with tabble panels
  - [x] Download product section
  - [] FAQ section
    - [] Functional accordian
  - [x] Join newsletter form section
    - [x] Receive error if email is not entered
    - [x] Receive error if email is not formatted correctly
  - [x] Footer section

  #### Specific features

  - [] See hover states for all interactive elements on the page
  - [] Create the rounded blue background shape with code
  - [] Change the `fill` and `stroke` color of the SVGs at specific points (the challenge can be completed using the single `logo-bookmark.svg` file provided)

## My process

### Built with

- HTML
- SCSS
- Parcel
- JS

### What I learned

- I learned more about how the @use and @forward rules in SCSS.
- I leaned that pseudo-elements cannot be used with image elements.
- I am trying to learn about 7-1 SCSS architecture and get more comfortable in dividing my styles

### Useful resources

- [Stop using @import with Sass | @use and @forward explained by Kevin Powell](https://www.youtube.com/watch?v=CR-a8upNjJ0) - This helped me learn exactly what @use and @forward are and how to use them in SCSS. I would highly recommend Kevin Powell youtube channel if you want to learn the hows of CSS.
- [Before and After pseudo elements explained - part one: how they work by Kevin Powell](https://www.youtube.com/watch?v=zGiirUiWslI) - This video helped me learn that pseudo-elements are elements that are inserted before (using ::before) and after (using ::after) the actual content. This is why they do not work on images as images do not fit into the normal CSS content model.
- [Four Card Feature Section - Design to HTML/CSS by Florin Pop](https://www.youtube.com/watch?v=PcSUEo0P0GU&t=2012s) - This helped me in giving top spacing to the cards very easily.
- [How To - Change Placeholder Color by w3schools](https://www.w3schools.com/howto/howto_css_placeholder.asp) - This helped me in learning how to change color for input placeholders.

## Author

- Frontend Mentor - [@HamnaIshaq](https://www.frontendmentor.io/profile/HamnaIshaq)
- Github - [@HamnaIshaq](https://github.com/HamnaIshaq)
