'use strict';

const gameField = document.querySelector('.game__field');
const zombie = document.querySelector('.zombie');
const zombieRect = zombie.getBoundingClientRect();
console.log(zombieRect.width,zombieRect.height);

function init(){
    addZombie('zombie','🧟‍♂️',3);
}

function addZombie(className,zombieType,count){
    for(let i=0; i<count; i++){
        const zombie = document.createElement('span');
        zombie.setAttribute('class',className);
        zombie.innerHTML = zombieType;
        const x = randomNumber();
        const y = randomNumber();
        zombie.style.left = `${x}px`;
        zombie.style.top = `${y}px`;
        gameField.appendChild(zombie);
    }
    
}

























const target = document.querySelector('.game__target');
const field = document.querySelector('.game__field');

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
    });
});