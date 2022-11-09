/*
Operadores:

>; <; <=; >=; ==; ===;

&&; ||; switch


*/

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log("Olá, Jesus");
        break;
    case 'Amarelo':
        console.log("Olhe para o Sol");
        break;
    case "Verde":
        console.log("Olhe para a floresta");
        break;
    default:
        console.log("Feche os olhos.");
}


console.log(" ")
console.log("Exercicio")
console.log(" ")


var idade = 24;
var idadeMae = 41;

if (idade >= idadeMae) {
    console.log("Algo de errado não está certo.");
} else {
    console.log(`A diferença de idade é de: ${idadeMae - idade} anos.`)
}


console.log(" ")

var expressao = (5 -2) && (5 - " ") && (5 -2);
console.log(expressao);