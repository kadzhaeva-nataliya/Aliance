const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle"); /*Кнопка, которая вкл меню*/
const menu = document.querySelector(".mobile-menu"); /*сама кнопка*/

const lightModeOn = (event) => {  /*создание функции включения светлого режима*/
    navbar.classList.add ("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-svg"
}

const lightModeOff = (event) => {  /*создание функции выключения светлого режима*/
    navbar.classList.remove ("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-light" 
}

const openMenu = (event) => { /*функция открывания меню*/
    menu.classList.add("is-open"); /*вешает класс is-open*/
    mMenuToggle.classList.add("close-menu"); /*вешаем класс, что кнопка закрытия меню - крест*/
    document.body.style.overflow = "hidden"; /*запрещаем прокрутку сайта под меню*/
    lightModeOn();
}
const closeMenu = (event) => { /*функция закрывания меню*/
    menu.classList.remove("is-open"); /*убирает класс is-open*/
    mMenuToggle.classList.remove("close-menu"); /*при закрытии меню убрать крест*/
    document.body.style.overflow = ""; /*возвращаем прокрутку сайта под меню*/
    lightModeOff();
}

window.addEventListener ("scroll", () => {
    this.scrollY > 1 ? lightModeOn(): lightModeOff(); /*?-условие if, :-условие else. Читается как: это прокручено более, чем на 1 пиксель? Если Да - то включи светлую тему, если нет - то выключи светлую тему*/
    /*Наведя на вызов функции + Ctrl можно перейти в описание функции*/
    
});
mMenuToggle.addEventListener("click",(event) => {             /*вешаем на кнопку mMenu отслеживание события клик*/
    event.preventDefault();               /*не реагировать на стандартный клик*/
    menu.classList.contains("is-open")? closeMenu() : openMenu();       
});