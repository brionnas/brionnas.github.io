// slideshow.js
const slideshow = document.getElementById("slideshow");
const images = [
  "images/margherita.jpg",
  "images/shrimp-tacos.jpg",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=200&fit=crop"
];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}, 3000);
