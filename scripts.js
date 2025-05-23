
const images = document.querySelectorAll('.carousel-img');
let current = 0;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 4000);
