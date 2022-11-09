// 'var' não respeita escopo local ou global, dar preferencia em 'let' e 'const'

for (let i = 0; i<10; i++) {
    console.log(`Número ${i}`);
};

console.log(' ');


const semana = 'Sexta'; //nõa muda o objeto


const data = {
    ano: 2022,
    mes: 'Dezembro',
    dia: 8,
};
console.log(data.dia);
data.mes = 'Julho';  //altera o porametro do onjeto
console.log(data.mes);


console.log(" ");

// Exercicio

const numero = 50;
for (let numero = 0; numero<10; numero++) {
    console.log(numero);
}

console.log(" ");

const total = 10*numero;
console.log(total);