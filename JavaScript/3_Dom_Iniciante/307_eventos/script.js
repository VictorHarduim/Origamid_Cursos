// Quando o user clicar nos links internos do site, add a classe ativo ao item clicado e remova dos demais itens caso eles possuam o mesmo. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.

const allElements = document.querySelectorAll('body *');

function handleElement(event) {
    event.currentTarget.remove();
}

// allElements.forEach((element) => {
//     element.addEventListener('click', handleElement);
// })


// Utilizando o código anterior, ao invés de mostrar no console, remoca o elemento que está sendo clicado, o método que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na telca 't', aumnete todo o resto do site.

function handleClickT(event) {
    console.log(event);
    if(event === 't') {
        document.documentElement.classList.toggle('textoMaior');
    }
}

window.addEventListener('keydown', handleClickT);

