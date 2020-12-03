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
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) return;
    navbarMenu.classList.remove('open');
    const element = document.querySelector(link);
    element.scrollIntoView({ behavior: "smooth" });

    // navbar 선택한 것 border 표시
    /*
    const active = document.querySelector('.navbar__menu__item.active');
    active.classList.remove('active');
    target.classList.add('active');
    */
    // navbarMenuItems.forEach((menu) => {
    //     menu.classList.remove('active');
    // });
    // target.classList.add('active');
});

// navbar toggle button to small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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
const categotyButton = document.querySelectorAll('.category__btn');
const projectContainer = document.querySelector('.work__projects'); //animation effect 넣어주기 위해사용
const projects = document.querySelectorAll('.project');
workContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === null) return;

    // 프로젝트 카테고리 선택 시 뒷배경 효과
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('active');

    // categotyButton.forEach((btn) => {
    //     console.log(btn.classList.remove('active'));
    // });
    // e.target.classList.add('active');

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
