const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo-svg");
const mMenuToggle = document.querySelector(".mobile-menu-toggle"); /*Кнопка, которая вкл меню*/
const menu = document.querySelector(".mobile-menu"); /*сама кнопка*/
const isFront = document.body.classList.contains("front-page");

const lightModeOn = (event) => {  /*создание функции включения светлого режима*/
    navbar.classList.add ("navbar-light");
    // logo.href.baseVal = "img/sprite.svg#logo-svg"
}

const lightModeOff = (event) => {  /*создание функции выключения светлого режима*/
    navbar.classList.remove ("navbar-light");
    // logo.href.baseVal = "img/sprite.svg#logo-light" 
}

const changeNavHeight = (height) => {
  navbar.style.height = height;
};

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

// window.addEventListener ("scroll", () => {
//     this.scrollY > 1 ? lightModeOn(): lightModeOff(); /*?-условие if, :-условие else. Читается как: это прокручено более, чем на 1 пиксель? Если Да - то включи светлую тему, если нет - то выключи светлую тему*/
    /*Наведя на вызов функции + Ctrl можно перейти в описание функции*/
    
// });
window.addEventListener("scroll", () => {
  this.scrollY > 1 ? changeNavHeight("4.5rem") : changeNavHeight ("5.875rem");
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  }

});
mMenuToggle.addEventListener("click",(event) => {             /*вешаем на кнопку mMenu отслеживание события клик*/
    event.preventDefault();               /*не реагировать на стандартный клик*/
    menu.classList.contains("is-open")? closeMenu() : openMenu();       
});

const swiperSteps = new Swiper (".steps-slider", {
    speed: 400,
    slidesPerView: 1,
    navigation: {
        nextEl: ".steps-button-next",
        prevEl: ".steps-button-prev",
     },
    breakpoints: {
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,        
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,        
        },

      }
});

const swiper = new Swiper(".features-slider", {
    speed: 400,
    autoHeight: true,   
    slidesPerView: 1,
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
     },
     breakpoints: {
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,        
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,        
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,        
          },
      }
});
const swiperBlog = new Swiper (".blog-slider",{
  speed: 400,  
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
 }, 
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");/*отслеживание клика в любом месте не модального окна*/
document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
    modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  };
});

const forms = document.querySelectorAll("form"); /*Собираем вск формы*/
forms.forEach((form) => {
  const validation = new JustValidate(form, {
    errorFieldCssClass: "is-invalid",
  });
  validation
    .addField("[name=username]", [
      {
        rule: "required",
        errorMessage: "Укажите имя",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Максимально 30 символов",
      },
    ])
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите телефон",
      },
    ])
    .onSuccess((event) => {
      const thisForm = event.target; 
      /*наша форма*/
      const formData = new FormData(thisForm); /*данные из нашей формы*/
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"),{
          method: thisForm.getAttribute("method"),
          body: formData,
        }).then ((response) => {
          if (response.ok) {
            thisForm.reset();
            alert("Форма отправлена!");
          } else {
            alert("Ошибка. Текст ошибки: ".response.statusText);
          }         
        });
        
      }
      ajaxSend(FormData);  
      /*jaxSend - незаментный (без перезагрузки) запрос на сервер*/
      /* thisForm.getAttribute("action") - указание, где взять url для сборщика информации/ Тас будет handler*/
    });
}); 
