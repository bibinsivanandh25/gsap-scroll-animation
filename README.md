# GSAP Scroll Animation with Clip-Path (Chart-Style Reveal)

This project implements **scroll-based animations using GSAP and ScrollTrigger**, where images and text are revealed progressively using CSS `clip-path`.

The goal is not decorative animation, but **structured, chart-like disclosure of content** as the user scrolls.

---

## Features

- Scroll-controlled animations (no autoplay)
- Clip-path based image and text reveals
- Word/character-level text animations
- Chart-style directional reveals (top → bottom / left → right)
- Smooth scrolling support (Lenis-ready)
- High performance (no layout thrashing)

---

## Tech Stack

- HTML / CSS
- JavaScript (ES6)
- GSAP 3
  - ScrollTrigger
  - SplitText (for word/char animations)

---

## How It Works

### 1. Clip-Path Based Reveal

Instead of animating opacity or transforms, elements are hidden using `clip-path`:

```css
.image {
  clip-path: inset(0 0 100% 0);
}
