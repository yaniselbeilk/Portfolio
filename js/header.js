particlesJS.load('particles', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("nav-links");

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
});
