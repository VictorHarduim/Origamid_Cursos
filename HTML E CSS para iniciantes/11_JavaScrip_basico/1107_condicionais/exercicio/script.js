const botao = document.querySelector('button');

function soma() {
    const div = document.querySelector('.numero');
    const total = Number(div.innerText) + 1;
    
    console.log(total);
    if (total < 10) {
        div.innerText = total;
    } else {
        console.log("Não posso add mais.")
    }
};

if (botao) {
    botao.addEventListener('click', soma);
};