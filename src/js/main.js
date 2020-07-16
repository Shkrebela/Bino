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






