let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
};