var $ = document;

const menuBurger = $.querySelector('.menu-burger');
const list = $.querySelector('.list');
var bool = true;

menuBurger.addEventListener('click' , () => {
    if (bool == true) {
        menuBurger.classList.add('open');
        menuBurger.classList.toggle('active');
        nav.classList.toggle('active');
        logo.classList.toggle('desactive');
        list.style.top = 0;
        bool = false;
    } else {
        menuBurger.classList.remove('open');
        logo.classList.remove('desactive');
        list.style.top = '-25%';
        bool = true;
    }
});

const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

  

var radio = document.getElementsByTagName("input");
var e = 0;
function nex(){
    if(e == radio.length -1){
        e = -1;
    }
    e++;
    radio[e].checked = true;
}
function nex(){
    if(e == 0){
        e = radio.length;
    }
    e--;
    radio[e].checked = true;
}