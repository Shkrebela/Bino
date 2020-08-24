import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';

Swiper.use([Navigation, Pagination, Mousewheel]);

let swiperFirst;
swiperFirst = new Swiper('.primary-screen__swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiperSecond;
swiperSecond = new Swiper('.about-company__swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiperThird;
swiperThird = new Swiper('.case-study__swiper-container', {
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

function toggleClass(el, className) {
    el.classList.toggle(className);
}

menuToggle.addEventListener('click', () => {
    toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
    toggleClass(menu, 'main-header__menu--active-menu-toggle');
    toggleClass(body, 'body--stop-scrolling');
});


if (window.matchMedia("(max-width: 768px)").matches) {
    Array.from(menuLink).forEach(i => {
        i.addEventListener('click', () => {
            toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
            toggleClass(menu, 'main-header__menu--active-menu-toggle');
            toggleClass(body, 'body--stop-scrolling');
        });
    });
}

//tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.extra-menu__link'),
        tabContent = document.querySelectorAll('.portfolio__sub-box'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active-tab');
        });
        this.classList.add('active-tab');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active-tab') : item.classList.remove('active-tab');
        })
    }
};

tab();

let arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', function () {
    if (pageYOffset > 300) {
        arrowUp.classList.remove("arrow-up--none")
    } else {
        arrowUp.classList.add("arrow-up--none")
    }
});

