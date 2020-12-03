'use strict'

// navbar 스크롤링 했을 때 변화주기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else navbar.classList.remove('navbar--dark');
});

// navbar, button 선택시 이동
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

// scroll 할때 투명도 증가
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// scroll시 arrow visible
const arrow = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrow.classList.add('visiable');
    } else arrow.classList.remove('visiable');
});

// arrow버튼 클릭 시
arrow.addEventListener('click', () => {
    console.log('click')
    const element = document.querySelector('#home');
    element.scrollIntoView({ behavior: "smooth" });
});

// 개인프로젝트 부분 선택 카테고리
const workContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects'); //animation effect 넣어주기 위해사용
const projects = document.querySelectorAll('.project');
workContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === null) return 0;

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});