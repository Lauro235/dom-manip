// x = horizontal
// y = vertical

let browserWindowY = window.innerHeight;
let browserWindowX = window.innerWidth;

// const fixedWidth = '800px'
const picture = document.querySelector('.pic1');

function findWindowSize() {
        picture.style.width = window.innerWidth + 'px';
        picture.style.height = window.innerHeight + 'px';
}

window.onresize = findWindowSize;


let newColor = '#4B0082';
let bodyElement = document.getElementsByTagName('body');

document.body.style.backgroundColor = newColor; 


// console.log(changeColor);