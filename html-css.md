# HTML5 & CSS3 Notes

---

## HTML Basics

###  Common Tags
- `<html>`, `<head>`, `<body>`
- `<h1>` to `<h6>`, `<p>`, `<a>`, `<img>`, `<div>`, `<span>`
- `<form>`, `<input>`, `<button>`, `<label>`, `<select>`, etc.

### Semantic Tags
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`


## Multimedia Tags
<img src="">
<audio controls>, <video controls>
<iframe> (used for embedding)

## Lists & Tables
<ul>, <ol>, <li>
<table>, <thead>, <tbody>, <tr>, <td>, <th>


---

## CSS Basics

### Selectors
```css
Element: p {}

Class: .box {}
ID: #header {}
Group: h1, h2 {}
Descendant: div p {}
Pseudo: a:hover, li:first-child


###Box Model
content → padding → border → margin


##Display
block, inline, inline-block
none (hide)
flex (for layout)
grid (advanced layout)


## Positioning
static (default)
relative
absolute
fixed
sticky


##Responsive Design with Media Queries

@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}

---
