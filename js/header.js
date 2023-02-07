particlesJS.load('particles', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    
const menuButton = document.getElementById("menu-button");
const menuMobile = document.getElementById("navigation-bar-mobile");
const exitMenuButton = document.getElementById("exit-button");
const menuLinkMobile = menuMobile.getElementsByTagName('a');
const navbar = document.querySelector('nav');

navbar.classList.toggle('sticky', window.scrollY > 0);

menuButton.addEventListener('click',()=>{
    menuMobile.classList.toggle('mobile-menu', true);
});
exitMenuButton.addEventListener('click', ()=> {
    menuMobile.classList.toggle('mobile-menu', false);
});
for (let i = 0; i < menuLinkMobile.length; i++) {
    menuLinkMobile[i].addEventListener('click', () => {
        menuMobile.classList.toggle('mobile-menu', false);
    });
}
window.addEventListener('resize', () => {
    if (window.screen.width > 900) {
        menuMobile.classList.toggle('mobile-menu', false);
        menuMobile.style.removeProperty('transition');
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
