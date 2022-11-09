var pessoa = {
    nome: "Jesus",
    idade: 33,    
}
console.log(pessoa.nome);
console.log(" ");


var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado*lado;
    },
    perimetro(lado) {  //semelhante a escrever function, só que mais pratico
        return lado*this.lados;
    },
}
console.log(quadrado.area(5), quadrado.perimetro(5));
console.log(" ");


console.log(Math.random());  //Randon: sempre de 0 a 1
console.log(" ");


var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84e",
    metadeHeight() {
        return this.height/2;
    }
};
menu.backgroundColor = '#000';
menu.color = 'blue';
var bg = menu.backgroundColor;
console.log(menu.metadeHeight());
console.log(" ");


//Exercicio

var eu = {
    nome: "Victor",
    sobrenome: "Harduim",
    idade: 24,
    profissao: "Estudante",
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco);


var cachorro = {
    raca: 'labrador',
    idade: 10,
    cor: "preto",
    latir(pessoa) {
        if (pessoa === "homem") {
            return 'Latir';
        } else {
            return "Nada";
        }
    },
}
console.log(cachorro.latir('homem'));
