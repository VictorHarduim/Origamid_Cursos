// Exercicios 


// Duplicar o menu e add em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);


//  Selecionar o primeiro DT da dl de faq

const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');


// Selecione o DD referente ao primero DT

const proximoDD = primeiroDT.nextElementSibling;
console.log(proximoDD.remove());


// Substituir o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML