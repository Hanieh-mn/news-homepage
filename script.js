const mobilemenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');
const closemenu = document.querySelector('.closemenu');


mobilemenu.addEventListener('click', () => {
    navbar.style.display = 'flex';
    navbar.style.top = '0';
})


closemenu.addEventListener('click', () => {
    navbar.style.top = '-50vh';
})
