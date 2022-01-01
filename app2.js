// x = horizontal
// y = vertical

let browserWindowY = window.innerHeight;
let browserWindowX = window.innerWidth;

const fixedWidth = '800px'
const picture = document.querySelector('.pic1');


picture.style.width = browserWindowX + 'px';

// function findWindowSize() {
//     picture.style.width = browserWindowX + 'px';
// }

// window.onload(findWindowSize);


let newColor = '#4B0082';
let bodyElement = document.getElementsByTagName('body');

document.body.style.backgroundColor = newColor; 


// console.log(changeColor);