// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);


// ###
// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//     console.log(event.currentTarget);
// }

// animaisLista.addEventListener('click', callbackLista);


// ###
// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//     event.preventDefault();
//     console.log(event);
// }

// linkExterno.addEventListener('click', handleLinkExterno);


// ###
// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);


// ###
// function handleKeyboard(event) {
//     if(event.key === 'f') {
//         document.body.classList.toggle('fullscreen');
//     }
//     console.log(event.key);
// }
// // window.addEventListener('keydown', handleKeyboard);


// ###
const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
})