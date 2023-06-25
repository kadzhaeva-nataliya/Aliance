<section class="cta"> <!-- cta-скоращенное от call to action -->
      <div class="bg-gray section-cta"> <!-- серый дальний план -->
        <img src="img/cta.png" alt="call to action" class="cta-image">
        <div class="cta-form-wrapper container">
          <!-- В классе container были заланы отступы ранее -->
          <form action="handler.php" method="POST" class="cta-form">
            <!-- тег form используется для создания форм, с помощью которых человека можно перенаправлять на другие ресурсы. Куда пеенаправляют - пишут в разделе action-->
            <h2 class="section-title cta-form-title">Хотите сотрудничать?</h2> 
            <!-- Класс section-title уже создан, для него есть настройки, а cta-form-title для возможных доп.настроек сta/  -->
            <p class="cta-form-text">Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
            <div class="input-group-wrapper">
              <!-- Обертка для поля имя и телефон usera. Это родительская форма, в кот.задаются флексовые настройки для того, чтобы элементы располагались рядом -->
              <div class="input-group">
                <input 
                id="user-name" 
                type="text" 
                name="username"
                class="input" 
                placeholder=" "
                maxlenght = "50"
                required/> 
                <!-- Параметр required означает, что без заполненных этих полей форма не отправится-->
                <label class="input-group-label" for="user-name">Имя</label>
                <!-- label-подсказка, что имнно писать в текстовом поле -->
              </div>
              <!-- /.input-group -->
              <div class="input-group">
                <input 
                id="user-phone"
                type="tel" 
                class="input phone-mask"
                name="userphone"
                placeholder=" "
                maxlenght = "30"
                required/>
                <label class="input-group-label" for="user-phone">Номер телефона</label>
              </div>
              <!-- /.input-group -->
            </div>
            <!-- /.input-group-wrapper -->
            <div class="cta-form-footer">
              <button type="submit" class="button cta-form-button">Отправить заявку</button> 
              <div class="notify">
                <svg class="notify-icon" width="14" height="14">
                  <use href="img/sprite.svg#shield"></use>
                </svg>
                <p class="notify-text">Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!
                </p>
                
              </div>
              <!-- type submit отзначает, что эта кнопка отправляет информацию -->
            </div>
            <!-- /.cta-form-footer -->
          </form>
        </div>
        <!-- /.cta-form-wrapper -->
      </div>
    </section>
    <footer class="footer">
      <div class="footer-mobile-menu">
        <a href="tel:+74996861014" class="mobile-phone">+7 (499) 686-10-14</a>
        <div class="mobile-info">
        <svg class="phone-icon" width="12" height="16">
          <use href="img/sprite.svg#geo"></use>
        </svg>
        <address class="mobile-info-address">г. Москва, Холодильный пер. 4к1с8</address>
        </div>
        
        <div class="mobile-info">
          <svg class="phone-icon" width="12" height="17" >
            <use href="img/sprite.svg#mail"></use>
          </svg>
          <a href="mailto:a.dragunov@tdaliance.ru" class="mobile-info-email">a.dragunov@tdaliance.ru</a>
        </div>
        <div class="mobile-info">
          <svg class="phone-icon" width="12" height="16" >
            <use href="img/sprite.svg#vk"></use>
          </svg>
          <a href="#" class="mobile-info"></a>
       
          <svg class="phone-icon" width="16" height="16" >
            <use href="img/sprite.svg#inst"></use>
          </svg>
          <a href="#" class="mobile-info"></a>
        </div>  
        <ul class="footer-mobile-menu-nav">
        
          <li class="mobile-menu-nav-item"><a href="#" class="mobile-menu-link">Контрактное производство</a>
          <ul class="mobile-submenu">
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Автомобильная химия</a>
            </li> 
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Бытовая химия</a>
            </li> 
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Дезинфицирующие средства</a>
            </li> 
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Пищевые аэрозоли</a>
            </li> 
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Косметическая продукция</a>
            </li> 
            <li class="mobile-submenu-item">
              <a class="mobile-submenu-link" href="#">Краски аэрозольные</a>
            </li> 
          </ul>
          </li>
          <li class="mobile-menu-nav-item"><a href="#" class="mobile-menu-link">Собственные торговые марки</a>
            <ul class="mobile-submenu">
              <li class="mobile-submenu-item">
                <a class="mobile-submenu-link" href="#">Автохимия AG-Tech</a>
              </li> 
              <li class="mobile-submenu-item">
                <a class="mobile-submenu-link" href="#">Автохимия AP</a>
              </li> 
            </ul>  
          </li>
          <li class="mobile-menu-nav-item"><a href="#" class="mobile-menu-link">О компании</a></li>
          <li class="mobile-menu-nav-item"><a href="#" class="mobile-menu-link">Новости</a></li>
          <li class="mobile-menu-nav-item"><a href="#" class="mobile-menu-link">Контакты</a></li>
        </ul>
        <div class="footer-mobile-wrapper footer-wrapper">
          <div class="footer-legal">
            <p class="footer-copyright">
              &copy; 2022 «Aliance Production». Все права защищены.
            </p>
            <a href="#" class="footer-policy">Политики конфиденциальности</a>
          </div>
          <!-- /.footer-legal -->
          <div class="footer-author">
            <span class="made-in">Сделано в</span>
            <svg class="footer-social-icon" width="52" height="11" >
              <use href="img/sprite.svg#ruso"></use>
            </svg>
          </div>
        </div>
        <!-- /.footer-wrapper -->
                      
               
      </div>
      <!-- /.mobile-menu -->
      <div class="container">
        <div class="footer-top">
          <svg class="logo-svg footer-logo" width="140" height="44">
            <use href="img/sprite.svg#logo-svg"></use>
          </svg>
          <a href="tel:+749968610-14" class="footer-phone">+7 (499) 686-10-14</a>
          <div class="footer-info">
            <svg class="phone-icon" width="12" height="16">
            <use href="img/sprite.svg#geo"></use>
            </svg>
            <address class="footer-info-address">г. Москва, Холодильный пер. 4к1с8</address>
          </div>
          <!-- /.footer-info -->
          <div class="footer-info">
            <svg class="phone-icon" width="12" height="17" >
              <use href="img/sprite.svg#mail"></use>
            </svg>
            <a href="mailto:a.dragunov@tdaliance.ru" class="footer-info-email">a.dragunov@tdaliance.ru</a>
          </div>
          <!-- /.footer-info -->
          <div class="footer-social">
            <a href="#" class="footer-social-link">
              <svg class="footer-social-icon" width="20" height="12" >
                <use href="img/sprite.svg#vk"></use>
              </svg>
            </a>
            <a href="#" class="footer-social-link">
              <svg class="footer-social-icon" width="16" height="16" >
                <use href="img/sprite.svg#inst1"></use>
              </svg>
            </a>
          </div>
          <!-- /.footer-social -->
        </div>
        <!-- /.footer-top -->    
      </div>
      <!-- /.container -->
      <hr color="#EBEBF0" class="footer-seporator">
      <div class="container">
        <div class="footer-bottom">
          <div class="footer-menu-wrapper">
            <h2 class="footer-menu-title">Контрактное производство</h2>
            <ul class="footer-menu-list footer-menu-column-2">
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Автомобильная химия</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Бытовая химия</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Дезинфицирующие средства</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Пищевые аэрозоли</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Косметическая продукция</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Краски аэрозольные</a></li>
            </ul>
          </div>
          <!-- /.footer-menu-wrapper -->
          <div class="footer-menu-wrapper">
            <h2 class="footer-menu-title">Собственные марки</h2>
            <ul class="footer-menu-list">
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Автохимия AG-Tech</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Автохимия AP</a></li>
            </ul>
          </div>
          <div class="footer-menu-wrapper">
            <ul class="footer-menu-list">
              <li class="footer-menu-item"><a href="#" class="footer-menu-link footer-menu-link-bold">О компании</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link footer-menu-link-bold">Новости</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link footer-menu-link-bold">Контакты</a></li>
            </ul>
          </div>
        </div>
        <!-- /.footer-bottom -->
      </div>
      <!-- /.container -->
      <hr color="#EBEBF0" class="footer-seporator">
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-legal">
            <p class="footer-copyright">
              &copy; <?php echo date('Y')?> «Aliance Production». Все права защищены.
            </p>
            <a href="#" class="footer-policy">Политики конфиденциальности</a>
          </div>
          <!-- /.footer-legal -->
          <div class="footer-author">
            <span class="made-in">Сделано в</span>
            <svg class="footer-social-icon" width="52" height="11" >
              <use href="img/sprite.svg#ruso"></use>
            </svg>
          </div>
        </div>
        <!-- /.footer-wrapper -->
      </div>
      <!-- /.container -->
    </footer>
    <div class="modal">
      <div class="modal-dialog">
        <h2 class="modal-title">ЕСТЬ ВОПРОСЫ?</h2>       
        <a href="#" class="modal-close" data-toggle="modal">
          <svg class="close-icon" width="24" height="24" >
            <use href="img/sprite.svg#close"></use>
          </svg>
        </a>
        <!-- /.modal-close -->
        <p class="modal-text">Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!
        </p>
        <form action="handler.php" method="POST" class="modal-form">
          <div class="input-group-wrapper input-group-vertical">
            <!-- Обертка для поля имя и телефон usera. Это родительская форма, в кот.задаются флексовые настройки для того, чтобы элементы располагались рядом -->
            <div class="input-group modal-input-group">
              <input 
              id="modal-user-name" 
              type="text" 
              class="input modal-input" 
              name="username"
              placeholder=" "/>
              <label class="input-group-label modal-input-label" for="user-name">Имя</label>
              <!-- label-подсказка, что имнно писать в текстовом поле -->
            </div>
            <!-- /.input-group -->
            <div class="input-group modal-input-group">
              <input 
              id="modal-user-phone"
              type="tel" 
              class="input modal-input phone-mask"
              name="userphone"
              placeholder=" "/>
              <label class="input-group-label modal-input-label" for="modal-user-phone">Номер телефона</label>
            </div>
            <!-- /.input-group -->
          </div>
          <!-- /.input-group-wrapper -->
          <div class="modal-form-footer">
            <button type="submit" class="button modal-form-button">Отправить заявку</button> 
            <div class="notify">
              <svg class="notify-icon" width="14" height="14">
                <use href="img/sprite.svg#shield"></use>
              </svg>
              <p class="notify-text">Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!
              </p>
              
            </div>
            <!-- type submit отзначает, что эта кнопка отправляет информацию -->
          </div>
          <!-- /.modal-form-footer -->
        </form>
        <!-- /.modal-form -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <script src="js/swiper-bundle.min.js"></script>
    
    <script src="js/just-validate.production.min.js"></script>
    <script src="js/main.js"></script>