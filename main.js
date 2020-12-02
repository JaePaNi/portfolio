'use strict'

// navbar 스크롤링 했을 때 변화주기
const navbar  = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else navbar.classList.remove('navbar--dark');
});