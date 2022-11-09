var videoGames = ['Switch', 'Ps4', 'Xbox'];
//remove ultimo item: pop()
//add ao final da lista: push()
videoGames.push("3Ds")


//loop
for (var index = 0; index < videoGames.length; index++) {
    console.log(videoGames[index]);
}


console.log(" ");

var i = 0;
while (i < videoGames.length) {
    console.log(i);
    i++;
};


console.log(" ");

for (var i = 0; i <videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'Ps4') {
        break
    }
}


console.log(" ");


videoGames.forEach(function(item, index, array) {
    console.log(item, index, array)
});


console.log(" ");


//Exercicio

//1
var anosVitoria = [1959, 1962, 1970, 1994, 2002];

for (var i=0; i<anosVitoria.length; i++) {
    console.log(`O Brasil foi campeão em ${anosVitoria[i]}`);
}
console.log(" ");

anosVitoria.forEach(function(ano) {
    console.log(`O Brasil ganhou a copa de ${ano}.`)
});


//2

var frutas = ['banana', 'maçã', 'pera', 'uva', 'melância'];

for (var i=0; i<frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'pera') {
        break
    }
} 

console.log(" ");
var ultima = frutas[frutas.length-1];
console.log(ultima);