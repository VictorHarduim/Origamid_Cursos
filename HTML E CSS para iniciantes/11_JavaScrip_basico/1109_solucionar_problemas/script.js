const imgs = document.querySelectorAll('#galeria li img');

function galeriaTrocar (event) {
    const principal = document.querySelector("#imgPrincipal")
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt = clicada.alt;
    console.log(clicada.src);
}

function galeriaClick(imagem) {
    imagem.addEventListener('click', galeriaTrocar);
}

imgs.forEach(galeriaClick);