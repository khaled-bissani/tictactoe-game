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

const insertCoin = () => {
    // Game player Red=1 and yellow=0
    let playerTurn = 1;
    // block1
    if(playerTurn==1){
        block1.addEventListener('click',function(){
            block1.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block1.addEventListener('click',function(){
            block1.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block2
    if(playerTurn==1){
        block2.addEventListener('click',function(){
            block2.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block2.addEventListener('click',function(){
            block2.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block3
    if(playerTurn==1){
        block3.addEventListener('click',function(){
            block3.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block3.addEventListener('click',function(){
            block3.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block4
    if(playerTurn==1){
        block4.addEventListener('click',function(){
            block4.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block4.addEventListener('click',function(){
            block4.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block5
    if(playerTurn==1){
        block5.addEventListener('click',function(){
            block5.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block5.addEventListener('click',function(){
            block5.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block6
    if(playerTurn==1){
        block6.addEventListener('click',function(){
            block6.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block6.addEventListener('click',function(){
            block6.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block7
    if(playerTurn==1){
        block7.addEventListener('click',function(){
            block7.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block7.addEventListener('click',function(){
            block7.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block8
    if(playerTurn==1){
        block8.addEventListener('click',function(){
            block8.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block8.addEventListener('click',function(){
            block8.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
    // block9
    if(playerTurn==1){
        block9.addEventListener('click',function(){
            block9.innerHTML='<img src="images/red.png" />';
        });
        playerTurn=0;
    }
    else{
        block9.addEventListener('click',function(){
            block9.innerHTML='<img src="images/yellow.png" />';
        });
        playerTurn=1;
    }
        
}


const startGame = () => {
    score.innerText='Game Started';
    insertCoin();
}

startBtn.addEventListener('click',startGame);