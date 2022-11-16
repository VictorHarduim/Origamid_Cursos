// Exercicios

// Retornar no console todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img);

//Retornar no console apenas as imagens que começarem com a palavra imagem

const imgAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imgAnimais);

// Selecione todos os links internos (onde href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o ultimo p do site

const lastP =  document.querySelectorAll('p');
console.log(lastP[--lastP.length]); // equivalente a lastP.length - 1

