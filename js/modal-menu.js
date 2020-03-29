hamburger = document.querySelector('.hamburger');
menu = document.querySelector(".menu__media");
hamburger.onclick = closeBlack;

function closeBlack(){
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__media__active');
}
links = document.querySelectorAll('.menu__links');
links.forEach(function(element){
    element.onclick = closeBlack;
})