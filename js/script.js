const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.header__list');
const navLogo = document.querySelector('#header__logo');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    document.body.classList.toggle('_lock')
}

menu.addEventListener('click', mobileMenu);