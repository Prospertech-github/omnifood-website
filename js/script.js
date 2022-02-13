// SET UP YEAR FOR FOOTER
const yearEl = document.querySelector('.year');
const year = new Date().getFullYear();
yearEl.textContent = year;

// MAKING THE NAV WORK
const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// IMPLEMENT SMOOTH SCROK
const allLinks = document.querySelectorAll('.')