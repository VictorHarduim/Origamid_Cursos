// Exercicios


// Transforme o objeto abaxio em uma Constructor Function

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou')
//     }
// }

function Pessoa (nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.andar = function() {
        console.log(this.nome + ' andou')
    }
}


// Cire 3 pessoas

const jesus = new Pessoa('Jesus', 33)
const victor = new Pessoa('victor',24)
const fox = new Pessoa('Fox', 7)


// Crie uma Constructor Function (Dom) para a manipulação de listas de elementos do dom. Deve conter os seguintes parametros: elements, retorna NodeList com os elementos selecionados(classe), add a aclasse a todos os elementos, removeClasse(classe), remove a classe de todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const listaItens = new Dom('li')
listaItens.addClass('ativar')