function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 2000);


function Carro2(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const mazda = new Carro2('Mazda', 5000)

// Aula 2
/*
const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor)
    },
    ativar() {
        this.element().classList.add('ativar')
    }
}
*/

/*
function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function() {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')
const ul = new Dom('ul')
*/
