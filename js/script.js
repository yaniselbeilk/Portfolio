const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("nav-links");
menuButton.addEventListener('click',()=>{
    menu.classList.toggle('mobile-menu');
})