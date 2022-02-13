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

// IMPLEMENT SMOOTH SCROLLING
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav after clicking link
    if (link.classList.contains("main-nav-links")) {
      headerEl.classList.toggle('nav-open')
    }
  });
});