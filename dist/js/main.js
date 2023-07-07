const menu = document.querySelector('.menu');
const harmburger = document.querySelector('.menu__hamburger');
const navWrapper = document.querySelector('.nav__wrapper');
const navList = document.querySelectorAll('.nav__list');
const body = document.querySelector('body');
const zoomEffect = document.querySelectorAll('.zoom-effect');
const header = document.querySelector('header');

// add event listener to menu toggler
menu.addEventListener('click', toggleNav);

// state of menu
let menuOpen = false;

//function to toggle menu
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

// close menu when clicked outside
document.addEventListener('click', function (event) {
    if (!navWrapper.contains(event.target) && menuOpen && !harmburger.contains(event.target)) {
        toggleNav();
    }
});

// function to check if element is in view
const elementInView = (el, dividend = 1) => {
    // Get the top position of the element relative to the viewport
    const elementTop = el.getBoundingClientRect().top;

    // Calculate the threshold for considering the element in view
    const threshold =
        (window.innerHeight || document.documentElement.clientHeight) / dividend;

    // Check if the element's top position is less than or equal to the threshold
    return elementTop <= threshold;
};

// function to check if element is out of view
const elementOutofView = (el) => {
    // Get the top position of the element relative to the viewport
    const elementTop = el.getBoundingClientRect().top;

    // Check if the element's top position is greater than the height of the viewport
    return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

// function to display element when scrolled into view
const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

// function to hide element when scrolled out of view
const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

// function to handle animation of elements 
const handleAnimation = () => {
    zoomEffect.forEach((element) => {
        if (elementInView(element, 1.25)) {
            displayScrollElement(element);
        } else if (elementOutofView(element)) {
            hideScrollElement(element);
        }
    }
    );
}

// event listener to handle animation of elements on scroll
window.addEventListener('scroll', () => {
    handleAnimation();
}
);

// event listener to handle animation of elements on load
window.addEventListener('load', () => {
    handleAnimation();
}
);

// function to check scroll position and add shadow to header
function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollPos > 30) {
        header.classList.add('header-shadow');
        console.log('add shadow');
    } else {
        header.classList.remove('header-shadow');
        console.log('remove shadow');
    }
}
window.addEventListener('scroll', checkScroll);