(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

// Burger Bar
(function () {
    const burgerTab = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const closeButton = document.querySelector('.header__nav-close')
    burgerTab.addEventListener('click', () => {
        menu.classList.add('header__nav_active')
    });
    closeButton.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    });
}())