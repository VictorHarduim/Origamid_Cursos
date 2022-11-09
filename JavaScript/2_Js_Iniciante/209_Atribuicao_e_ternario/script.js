/* Operadores de atribuição
+= ->   x+=y : x = x+y
-=  ->  x-=y : x = x-y
*=
/=
%=
**=  ->  x**=y : x = x**y
*/


/*Operador Ternário

Abreviação de condicionais como if e else;

*/

var idade = 19;
var podeDirigir = (idade >= 18) ? 'Pode dirigir' : "Não pode dirigir";
console.log(podeDirigir);

console.log(" ");


// Exercicio

var scroll = 1000;
scroll += 500;
console.log(scroll);

console.log(" ");

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Crédito liberado' : "Crédito não liberado";
console.log(darCredito);