/*
function logCurso (){
    const nome = 'JavaScript';
    console.log(nome);
}


function logCurso(nome) {
    console.log(nome);
}
logCurso("Jesus");



function logCurso(nome, horas) {
    console.log(nome, horas);
    return nome;
}

logCurso("Jesus Cristo ", "A todo o tempo");


const retorno = logCurso("victor", "123");
console.log(retorno);


function logCurso() {
    console.log(nome);
}
*/


/*
function livro(nome, ano, autor) {
    const nomeMaior = nome.toUpperCase();
    const totalAnos = 2022 - ano;
    const frase = nome + " por " + autor;
    const objeto = {
        nome: nomeMaior,
        totalAnos,
        frase,
    };
    return objeto;
}
*/



function livro(nome, ano, autor) {
    const objeto = {
        nome: nome.toUpperCase(),
        totalAnos: 2022 - ano,
        frase: nome + " por " + autor,
    };
    return objeto;
}


 const livroRetorno = livro('O senhor dos anéis', 1954, 'J. R. R. Tolkien');
 console.log(livroRetorno.frase);