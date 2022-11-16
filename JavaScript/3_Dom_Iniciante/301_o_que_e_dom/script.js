//window.alert("isso mesmo");

// const href = window.location.href;
// console.log(href)
// if (href === 'http://127.0.0.1:5500/301_o_que_e_dom/index.html') { console.log('É igual!')};

// const h1Selection = document.querySelector('h1');
// const h1Classes = h1Selection.classList;

// h1Selection.addEventListener('click', function() {
//     console.log('Clicou em ', h1Selection.innerText)
// })


// Exercicio

// REtornar o url da pagina atual utilizando o objeto window:
const href = window.location.href;
console.log(href);

//seleciona o primeiro elemento da pagina que possua a classe ativo:

const elementoAtivo = document.querySelector('.ativo');

// retorne a linguagem do navegador:
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura:
const windowWidth = window.innerWidth;
console.log(windowWidth + ' px');