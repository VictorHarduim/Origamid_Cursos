
// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(links) {
    const url = location.href;
    const href = links.href;

    if (url.includes(href)) {
        links.classList.add("ativo");
    }

}

links.forEach(ativarLink);


// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);


function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
    console.log(parametro);
}

parametros.forEach(ativarProduto);



// Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);

}

function eventoPergunta(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPergunta);



// Galeria de Bicicletas

const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaContainer = document.querySelector('.bicicleta-img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function enventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(enventosGaleria);


// animação

if(window.SimpleAnime) {
    new SimpleAnime();
}