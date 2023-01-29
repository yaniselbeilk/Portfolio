const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("nav-links");

particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
})
menuButton.addEventListener('click',()=>{
    menu.classList.toggle('mobile-menu');
    menu.style.transition = "all 0.5s ease";
})
addEventListener('resize', ()=>{
    if (window.screen.width > 900) {
        menu.classList.toggle('mobile-menu', false);
        menu.style.removeProperty('transition');
    }
})
