const menu = document.querySelector('.menu');
const harmburger = document.querySelector('.menu__hamburger');
const navWrapper = document.querySelector('.nav__wrapper');
const navList = document.querySelectorAll('.nav__list');
const body = document.querySelector('body');

menu.addEventListener('click', toggleNav);
let menuOpen = false;

function toggleNav() {
    if (!menuOpen) {
        harmburger.classList.add('open');
        navWrapper.classList.add('open');
        body.style.overflow = 'hidden';
        navList.forEach(item => item.classList.add('open'));
        menuOpen = true;
    } else {
        harmburger.classList.remove('open');
        navWrapper.classList.remove('open');
        navList.forEach(item => item.classList.remove('open'));
        body.style.overflow = 'auto';
        menuOpen = false;
    }
}

document.addEventListener('click', function (event) {
    if (!navWrapper.contains(event.target) && menuOpen && !harmburger.contains(event.target)) {
        toggleNav();
    }
});
