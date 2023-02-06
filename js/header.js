particlesJS.load('particles', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("nav-links");
const navbar = document.querySelector('nav');

menuButton.addEventListener('click',()=>{
    menu.classList.toggle('mobile-menu');
    menu.style.transition = "all 0.5s ease";
});

window.addEventListener('resize', ()=>{
    if (window.screen.width > 900) {
        menu.classList.toggle('mobile-menu', false);
        menu.style.removeProperty('transition');
    }
});
let lastScrollY = window.scrollY;
window.addEventListener('scroll', ()=>{
    //navbar.classList.toggle('sticky', window.scrollY>0);
    if (window.scrollY == 0) {
        navbar.classList.toggle('sticky', false);
    } else if (lastScrollY < window.scrollY) {
        navbar.classList.add('nav-hidden');
    } else if (lastScrollY > window.scrollY) {
        navbar.classList.remove('nav-hidden');
        navbar.classList.toggle('sticky', true);
    }
    lastScrollY = window.scrollY;
});

});
