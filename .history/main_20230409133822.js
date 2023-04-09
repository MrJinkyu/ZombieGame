'use strict';
const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();

const Zombie = {
    width:48,
    height:63,
    className:'zombie',
    first:'🧟‍♂️',
    second:'🧟',
    third:'🧟‍♀️',
}

init();

function init(){
    addZombie(Zombie.className,,3);
    addZombie(Zombie.className,,3);
    addZombie(Zombie.className,,3);
}

function addZombie(className,zombieType,count){
    for(let i=0; i<count; i++){
        const zombie = document.createElement('span');
        zombie.setAttribute('class',className);
        zombie.innerHTML = zombieType;
        const x = randomNumber(fieldRect.width-Zombie.width);
        const y = randomNumber(fieldRect.height-Zombie.height);
        zombie.style.left = `${x}px`;
        zombie.style.top = `${y}px`;
        gameField.appendChild(zombie);
    }
}

function randomNumber(max){
    return Math.floor(Math.random()*max);
}

























const target = document.querySelector('.game__target');

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
    });
});