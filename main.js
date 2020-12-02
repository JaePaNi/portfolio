'use strict'

// navbar 스크롤링 했을 때 변화주기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else navbar.classList.remove('navbar--dark');
});

// navbar 메뉴선택시 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    const element = document.querySelector(link);
    element.scrollIntoView({ behavior: "smooth" });
});

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', () => {
    const element = document.querySelector('#contact');
    element.scrollIntoView({ behavior: "smooth" });
});