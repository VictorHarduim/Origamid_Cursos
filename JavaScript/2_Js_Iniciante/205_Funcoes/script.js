function areaQuadrado(lado) {
    return lado*lado;
}
console.log(areaQuadrado(4));


console.log(" ");


function imc(peso, altura) {
    const imc = peso/(altura**2);
    return imc;
}
console.log(imc(66, 1.74));


console.log(" ");


function corFavorita(cor) {
    if (cor === "azul") {
        return "Eu gosto do céu";
    } else if (cor === "verde") {
        return 'Eu gosto de roça';
    } else {
        return 'Eu não gosto de cores';
    }
}
console.log(corFavorita('azul'));
console.log(corFavorita('verde'));
console.log(corFavorita());


console.log(" ");


addEventListener("click", function(){
    console.log("oi");
});


console.log(" ");


function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return "Irnforme a sua idade!";
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade('oi'));
console.log(terceiraIdade(60));
console.log(terceiraIdade("60"));  //considera string


console.log(" ");


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(23));


console.log(" ");


var profissao = 'Designer';
function dados() {
    var nome = 'Victor';
    var diade = 24;
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 25;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());


console.log(" ");
console.log("Exercício");
console.log(" ");

function isThruthy(valor) {
    return !!valor;
}
console.log(isThruthy(23));

console.log(" ");

function perimetroQuadrado(lado) {
    var perimetro = 4*lado;
    return perimetro;
}
console.log(perimetroQuadrado(5));

console.log(" ");

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Jesus", "de Nazaré"));

console.log(" ");

function paridade(numero) {
    if (numero%2 === 0) {
        return `${numero} é par.`
    } else {
        return `${numero} é ímpar.`
    }
}
console.log(paridade(2));
console.log(paridade(3));

console.log(" ");

addEventListener("click", function(){
    console.log("Victor Harduim")
});

console.log(" ");

