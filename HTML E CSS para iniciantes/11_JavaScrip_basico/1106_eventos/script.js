/*
const curso = {
    nome: 'Jesus',
    completar() {
        console.log("É o caminho...")
    },
};

console.log(curso.nome);
*/



// const ativar = document.querySelector('.ativar');

// /** @param {MouseEvent} event  */
// function ativarAoClick(event){
//     console.log(event )
// };

// ativar.addEventListener('click', ativarAoClick);

// console.log(ativar)


/*
const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');

}

botao.addEventListener('click', mostrar);
*/

console.log(window);

function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y,
    };
    console.log(coordenadas);
};

window.addEventListener('mousemove', coordenadaMouse);

function scroll() {
    console.log(window.scrollY);
    console.log('Usou o Scroll.');
};

window.addEventListener("scroll", scroll);