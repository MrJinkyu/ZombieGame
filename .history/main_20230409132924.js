'use strict';

const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();
const zombie = document.querySelector('.zombie');
const zombieRect = zombie.getBoundingClientRect();

init();

function init(){
    addZombie('zombie','🧟‍♂️',3);
    addZombie('zombie','🧟',3);
    addZombie('zombie','🧟‍♀️',3);
}

function addZombie(className,zombieType,count){
    for(let i=0; i<count; i++){
        const zombie = document.createElement('span');
        zombie.setAttribute('class',className);
        zombie.innerHTML = zombieType;
        const x = randomNumber(fieldRect.width-zombieRect.width);
        const y = randomNumber(fieldRect.height-zombieRect.height);
        zombie.style.left = `${x}px`;
        zombie.style.top = `${y}px`;
        gameField.appendChild(zombie);
    }
}

function randomNumber(max){
    return Math.floor(Math.random()*max);
}

























const target = document.querySelector('.game__target');
const field = document.querySelector('.game__field');

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
    });
});