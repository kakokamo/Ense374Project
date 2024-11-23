
# SK Trails

A web hosted on MongoDB using JavaScript, HTML, CSS, PHP, EJS and Mongo.


## Authors

- Dmytro Stepaniuk (200426341) [@kapibaraa](https://www.github.com/kapibaraa)
- 


## Roadmap

- ✔️ 
- ✔️ 
- ✔️ 
- ⏳ Assignment 4


// title
let title = document.getElementById("post-title");
title.addEventListener("blur", postTitleHandler);

// content
let content = document.getElementById("post-text");
content.addEventListener("blur", postContentHandler);

// submit button
let form = document.getElementById("create-form");
form.addEventListener("submit", validatePost);

// dynamic counter
let blogPostTitle = document.getElementById("post-title");
blogPostTitle.addEventListener("input", (event) => charCounter(event, 100));

// dynamic counter for body text
let blogPostTextarea = document.getElementById("post-text");
blogPostTextarea.addEventListener("input", (event) => charCounter(event, 2000));


const searchInput = document.querySelector("[data-search]")

let trails = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  trails.forEach(trail => {
    const isVisible =
      trail.location.toLowerCase().includes(value)
    trail.element.classList.toggle("hide", !isVisible)
  })
})