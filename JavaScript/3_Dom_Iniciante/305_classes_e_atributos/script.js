// Ex. 1: Add a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});


// Remover a classe ativo de todos os itens do menu e manter apenas no primeiro 

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');


// Verificar se as imagens possuem Alt


const imgs = document.querySelectorAll('img');
 imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
 });


 // Verificar o href do link externo no mnenu

 const link = document.querySelector('a[href^="http"]');
 link.setAttribute('href', 'https://www.google.com/');
 console.log(link);