// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const yearEl = document.querySelector(".year");
const allLinks = document.querySelectorAll("a:link");
const sectionHero = document.querySelector(".section-hero");

///////////////////////////////////////////////////////////
// Set current year

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile navigation
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// Smooth Scrolling animation
// opt. smooth Scrolling on Safari=> https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    // turn default behavior off
    e.preventDefault();
    //implement eigene
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  })
);

///////////////////////////////////////////////////////////
// Sticky Navigation
const obs = new IntersectionObserver(
  function (entries) {
    //3.mi történjen ha a 2. kondiciók életbe lépnek?
    const ent = entries[0]; //1.element az entries array-ból
    // console.log(ent);
    //fals-nél jelenjen meg
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    //2.mikor jelenjen meg az element
    root: null, //a viewportban
    threshold: 0, //ha 0% a herosectionnak a viewportban van
    //mikor jelenjen meg, margin
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero); //1.ezt akarjuk figyelni

///////////////////////////////////////////////////////////
// Fixing flexbox gap property in Safari
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/* => css queries
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */
