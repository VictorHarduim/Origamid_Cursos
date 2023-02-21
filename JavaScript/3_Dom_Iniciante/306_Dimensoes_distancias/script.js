// Verificar distancia da primeira imagem ao topo da pagina

const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);
console.log(" ");


// Retornar a soma da largura de todas as imagens

function somaImagens () {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
        // console.log(imagem.offsetWidth);
    })
    console.log(soma);
};

window.onload = function() {
    somaImagens();
}



// Verificar se os links da pagina possuem o min recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google)

console.log(" ");

const links = document.querySelectorAll("a");
links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
})
console.log(" ");


//Se o browser for menor que 720px, add a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}