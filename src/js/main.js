import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Mousewheel]);

var swiper1 = new Swiper('.primary-screen__swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.about-company__swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper3 = new Swiper('.case-study__swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


//mobil button
let menuToggle = document.getElementById('menu-toggle');
let menu = document.querySelector('.main-header__menu');
let body = document.querySelector('.body');
let menuLink = document.getElementsByClassName('main-header__link');

menuToggle.addEventListener('click', () => {
    toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
    toggleClass(menu, 'main-header__menu--active-menu-toggle');
    toggleClass(body, 'body--stop-scrolling');
    toggleClass(menuLink, 'menu-header__link--active-menu-toggle');
});

    Array.from(menuLink).forEach(i => {
        i.addEventListener('click', () => {
            toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
            toggleClass(menu, 'main-header__menu--active-menu-toggle');
            toggleClass(body, 'body--stop-scrolling');
            toggleClass(menuLink, 'menu-header__link--active-menu-toggle');
        });
    });

    function toggleClass(el, className) {
        el.classList.toggle(className);
    }






