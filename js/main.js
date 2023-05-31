const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle"); /*Кнопка, которая вкл меню*/
const menu = document.querySelector(".mobile-menu"); /*сама кнопка*/
window.addEventListener ("scroll", () => {
    if (this.scrollY > 1) {
    navbar.classList.add ("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-svg"
    } else {
    navbar.classList.remove ("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-light" 
    }
    
});
mMenuToggle.addEventListener("click",(event) => {             /*отслеживание события клик*/
    event.preventDefault();               /*не реагировать на стандартный клик*/
    menu.classList.toggle("is-open");         /*а найти меню и в его списке классов присвоить класс is-open*/
});