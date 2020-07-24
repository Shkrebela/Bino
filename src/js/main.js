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
let menuToggle = document.getElementById('js-menu-toggle');
let menu = document.querySelector('.main-header__menu');
let body = document.querySelector('body');
let menuLink = document.getElementsByClassName('main-header__link');

menuToggle.addEventListener('click', () => {
    toggleClass(menuToggle, 'js-menu-toggle_active');
    toggleClass(menu, 'js-menu-toggle_active');
    toggleClass(body, 'js-menu-toggle_active');
    toggleClass(menuLink, 'js-menu-toggle_active');
});

    Array.from(menuLink).forEach(i => {
        i.addEventListener('click', () => {
            toggleClass(menuToggle, 'js-menu-toggle_active');
            toggleClass(menu, 'js-menu-toggle_active');
            toggleClass(body, 'js-menu-toggle_active');
            toggleClass(menuLink, 'js-menu-toggle_active');
        });
    });

    function toggleClass(el, className) {
        el.classList.toggle(className);
    }






