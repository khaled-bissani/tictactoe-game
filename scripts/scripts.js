// Declare all the blocks
const block1 = document.getElementById('block-1');
const block2 = document.getElementById('block-2');
const block3 = document.getElementById('block-3');
const block4 = document.getElementById('block-4');
const block5 = document.getElementById('block-5');
const block6 = document.getElementById('block-6');
const block7 = document.getElementById('block-7');
const block8 = document.getElementById('block-8');
const block9 = document.getElementById('block-9');
// Declare the start button
const startBtn = document.getElementById('start-btn');
const score = document.getElementById('score');

const startGame = () => {
    score.innerText='Game started';
}
function insertCoin () {
    
}

startBtn.addEventListener('click',startGame);