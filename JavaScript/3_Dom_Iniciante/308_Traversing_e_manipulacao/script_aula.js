// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);


// h1.innerHTML = '<p>Novo Titulo</p>'


// const lista = document.querySelector('.animais-lista');
// console.log(lista.parentElement);
// console.log(lista.nextElementSibling)  //Pega o proximo elemento
// console.log(lista.previousElementSibling)  //Pega o elemento anterior
// console.log(lista.children); // Html collection com os filhos
// console.log(lista.children[0]);  // primeiro filho
// console.log(--lista.children.length);  // ultimo filho

// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo);  //moveu o titulo apra o final de animais

// contato.removeChild(titulo);  //removeu o titulo de contatos

// contato.replaceChild(lista, titulo);  //trocou o titulo pela lista de animais

// contato.insertBefore(animais, mapa);   //move a section animais para antes do titulo de contato



// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Titulo';
// novoH1.classList.add('titulo');
// animais.appendChild(novoH1);
// console.log(novoH1);




const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
// cloneH1.classList.add('azul');
faq.appendChild(cloneH1);