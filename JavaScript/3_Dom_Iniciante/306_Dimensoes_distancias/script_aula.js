const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
console.log(height);

const animaisTopo = listaAnimais.offsetTop;
console.log(animaisTopo);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();
console.log(h2Left);
console.log(rect);  // Retorna um objeto

console.log(" ");


console.log(
    window.innerWidth,  // width da janela
    window.outerHeight, // soma dev tools tambem
    window.innerHeight, // height da janela
    window.outerWidth,   // soma a barra de endereço

    window.pageYOffset,
);

console.log(" ");


const small = window.matchMedia('(max-width: 600px)');

if (small) {
    console.log("Mobile User");
} else {
    console.log('PC User');
}

console.log(small);