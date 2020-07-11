const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-115px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e){
  nav.classList.toggle('active')
};