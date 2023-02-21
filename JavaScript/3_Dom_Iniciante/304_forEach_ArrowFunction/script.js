// Exercicios

// Mostrar cada paragrafo do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);
paragrafo.forEach((item) => console.log(item));
console.log(" ");


// Mostre o texto dos paragrafos no console
paragrafo.forEach((item) => console.log(item.innerText));
console.log(" ");


// Correção de codigo
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => console.log(item, index));
console.log(" ");

let i = 0;
imgs.forEach(() => {console.log(i++)});
console.log(" ");

imgs.forEach(() => i++);