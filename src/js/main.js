// HEADER

// Выпадающее меню desktop
let menuLink = document.querySelector('.nav__link_select');
let dropdown = document.querySelector('.dropdown');

menuLink.addEventListener('click', function (e) {
   e.preventDefault();
   dropdown.classList.toggle('dropdown-active');
})

// Выпадающее меню mobile
let menuMobileLink = document.querySelector('.mobile-menu__btn');
let dropdownMobile = document.querySelector('.mobile-menu__dropdown');

menuMobileLink.addEventListener('click', function (e) {
   e.preventDefault();
   dropdownMobile.classList.toggle('mobile-menu__dropdown-active');
   menuMobileLink.classList.toggle('mobile-menu__btn-active');
})

// Кнопка смены языка
let languageBtn = document.querySelectorAll('.header__language');
let languageChange = document.querySelectorAll('.header__language-dropdown');

languageBtn.forEach(function (item, i) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      languageChange[i].classList.toggle('header__language-dropdown-active')
   })
})

languageChange.forEach(function (item, i) {
   item.addEventListener('click', function () {
      let a = languageBtn[i].innerText;
      languageBtn[i].innerText = languageChange[i].innerText
      languageChange[i].innerText = a;
      languageChange[i].classList.toggle('header__language-dropdown-active')
   })
})

document.addEventListener('click', function (e) {
   if (!e.target.classList.contains('header__language') && !e.target.classList.contains('header__language-dropdown')) {
      languageChange.forEach(function (item) {
         item.classList.remove('header__language-dropdown-active')
      })
   }
   if (!e.target.classList.contains('header__search-input')) {
      searchDropdown.forEach(function (item) {
         item.style.display = ''
      })
   }

})

// Кнопка поиска
let searchBtn = document.querySelectorAll('.header__search-desktop');
let searchDropdown = document.querySelectorAll('.header__search-dropdown');

searchBtn.forEach(function (item, i) {
   item.addEventListener('click', function (e) {
      e.stopPropagation();
      console.log(searchDropdown);
      
      searchDropdown[i].style.display = 'block';
   })
})

// WHY

let whyItem = document.querySelectorAll('.why__item');

whyItem.forEach(function (item, i) {
   item.addEventListener('click', function () {
      if (!this.classList.contains('why__item_active')) {
         document.querySelector('.why__item_active').classList.remove('why__item_active');
         this.classList.add('why__item_active');
      }
   })
   
})

// PRICE

let priceItem = document.querySelectorAll('.price__item');

priceItem.forEach(function (item) {
   item.addEventListener('click', function () {
      document.querySelector('.price__item_shadow').classList.remove('price__item_shadow');
      this.classList.add('price__item_shadow')
   })
})

// HELP

let helpLinks = document.querySelectorAll('.help__link-block');
let helpContents = document.querySelectorAll('.help__content');

helpLinks.forEach(function (item, i) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      let activeLink = document.querySelector('.help__link-block_active');
      activeLink.classList.remove('help__link-block_active');
      this.classList.add('help__link-block_active');

      let activeContent = document.querySelector('.help__content_active');
      activeContent.classList.remove('help__content_active');
      helpContents[i].classList.add('help__content_active');
   })
})