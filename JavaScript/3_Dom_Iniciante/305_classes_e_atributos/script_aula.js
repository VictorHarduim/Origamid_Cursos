const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao_possui_azul');
};

const animais = document.querySelector('.animais');
// console.log(animais.attributes[0]);


const img = document.querySelector('img');
img.setAttribute('alt', 'É uma raposa')

console.log(img.getAttribute('alt'));


const possuiAlt = img.hasAttribute('title');
console.log(possuiAlt);