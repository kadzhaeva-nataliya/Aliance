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

let currentModal; /*текущее модальное окно*/
let modalDialog; /*белое диалоговое окно*/
let alertModal = document.querySelector("#alert-modal"); /*окно с благодарностью*/

const modalButton = document.querySelectorAll("[data-toggle=modal]"); /*переключатели модальных окон*/
modalButton.forEach((button) => {
  button.addEventListener("click", (event) => { /*определяем текущее открытое окно*/
  event.preventDefault();
    currentModal = document.querySelector(button.dataset.target);/*узнаем какое окно текущее*/
    currentModal.classList.toggle("is-open");
    modalDialog = currentModal.querySelector(".modal-dialog"); /*отслеживаем клик по окну и пустым областям*/
    currentModal.addEventListener("click", event => {
      /*если клик в пустую область*/
      if (!event.composedPath().includes(modalDialog)) { /*то закрываем окно*/
        currentModal.classList.remove("is-open");
      }
    });
  });
});

/*ловим событие нажатия на клопку esc и текущее окно открыто*/
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && currentModal.classList.contains("is-open")) {
    currentModal.classList.toggle("is-open");
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
            currentModal.classList.remove("is-open");
            alertModal.classList.add("is-open");
            currentModal = alertModal;
            modalDialog = currentModal.querySelector(".modal-dialog"); /*отслеживаем клик по окну и пустым областям*/
            currentModal.addEventListener("click", event => {
              /*если клик в пустую область*/
              if (!event.composedPath().includes(modalDialog)) { /*то закрываем окно*/
                currentModal.classList.remove("is-open");
              }
            });
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
 
/*Маска ввода телефона*/
/* Создаем префикс +7, даже если вводят 8 или 9 */
const prefixNumber = (str) => {
  /* если вводят семерку, добавляем ей скобку */
  if (str === "7") {
    return "7 (";
  }
  /* если вводят восьмерку, ставим вместо нее +7 ( */
  if (str === "8") {
    return "+7 (";
  }
  /* если пишут девятку, заменяем на +7 (9  */
  if (str === "9") {
    return "7 (9";
  }
  /* в других случаях просто 7 (  */
  return "7 (";
}; /* профикс в любом раскладе будет +7 () */

/* Ловим события ввода в любом поле */
document.addEventListener("input", (e) => {
  /* Проверяем, что это поле имеет класс phone-mask */
  if (e.target.classList.contains("phone-mask")) {
    /* поле с телефоном помещаем в переменную input */
    const input = e.target;
    /* вставляем плюс в начале номера */
    const value = input.value.replace(/\D+/g, "");
    /* длинна номера 11 символов */
    const numberLength = 11;

    /* Создаем переменную, куда будем записывать номер */
    let result;
    /* Если пользователь ввел 8... */
    if (input.value.includes("+8") || input.value[0] === "8") {
      /* Стираем восьмерку */
      result = "";
    } else {
      /* Оставляем плюсик в поле */
      result = "+";
    }

    /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          /* в самом начале ставим префикс +7 ( */
          result += prefixNumber(value[i]);
          continue;
        case 4:
          /* добавляем после "+7 (" круглую скобку ")" */
          result += ") ";
          break;
        case 7:
          /* дефис после 7 символа */
          result += "-";
          break;
        case 9:
          /* еще дефис  */
          result += "-";
          break;
        default:
          break;
      }
      /* на каждом шаге цикла добавляем новую цифру к номеру */
      result += value[i];
    }
    /* итог: номер в формате +7 (999) 123-45-67 */
    input.value = result;
  }
});
