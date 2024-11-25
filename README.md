# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Strange behaviour](#strange-behaviour)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![Screen Shot 2567-11-24 at 19 51 01](https://github.com/user-attachments/assets/9c7f6a58-d03a-4061-9d81-5505a710300c)

- Modal (intercepting route)
![Screen Shot 2567-11-24 at 19 48 18](https://github.com/user-attachments/assets/6c60a52b-7ef3-472d-b66d-96ecb3b08b75)

![Screen Shot 2567-11-24 at 19 47 26](https://github.com/user-attachments/assets/180b213f-7d62-4629-ac8c-b74f0d341196)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [REST Countries API](https://restcountries.com)

### What I learned

I started this project because I just wanted to try NextJS intercepting route (I think this is a perfect project for that). But while building this, I've faced so many problems that I had to research many other NextJS features as well.

Overall, it made me feel even more confused about NextJS, and I realize there's still so much more that I need to learn.

### Strange behaviour

I've come across a very strange behaviour. I try to use [Plaiceholder](https://plaiceholder.co/docs/upgrading-to-3) to generate base64 data url. I understand that `getPlaiceholder` function run on the server and can't be used in client component. But I did use it in a server component and got an error: `referenceerror: require is not defined`

After some experimentation, I tried remove `<Navbar />`, which is a client component from `layout.tsx` (in `/feed`), AND IT SOMEHOW WORKED, I no longer got an error and blur placeholder worked fine. 

I am totally confused how can having a client component in `layout.tsx` affects this, because the `layout.tsx` itself is NOT a client component. (And the component that use `getPlaiceholder` function is not the descendant of `<Navbar />`)

I tried moving `<Navbar />` from `layout.tsx` into `page.tsx`, placing it alongside the component that use `getPlaiceholder` function, and it still didn't work.

I also tried creating another server component and nest `<Navbar />` inside it, and uses that container component in `layout.tsx` (instaed of `<Navbar />`), it still didn't work.

For now, I gave up.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=zDZBKEvU8b0&t=334s) - Very good explanation of intercepting route.
- [Example resource 2](https://www.youtube.com/watch?v=WIASshZpyCc&t=626s) - Infinite scroll. 
- [Example resource 3](https://www.youtube.com/watch?v=bAJlYgeovlg) - Custom select component.
- [Example resource 4](https://www.youtube.com/watch?v=NFQwi5AnG_s&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm) - This playlist helped me a lot when I built the gallery. And it helped me A LOT again in this project.

## Author

- Frontend Mentor - [@Wannika123](https://www.frontendmentor.io/profile/Wannika123)