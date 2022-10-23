/*
const lista = ["Jesus Cristo", "Salvador", "Pai", "Yeshua"];
const body = document.querySelector('body');


  for (let index = 0; index < lista.length; index++) {
        console.log(lista[index]);
        body.innerHTML += "<p>"+ lista[index] +"</p>";
    }


function addBody(item) {
    body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(addBody);
*/


const links = Array.from(document.querySelectorAll('nav a'));

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);



const lista = ["Html", "Css", "Js"];

lista.pop();  // remove o ultimo elemento da lista
lista.shift();  //remoce o primeiro elemento

lista.push('Jesus'); //add ao final
console.log(lista);

