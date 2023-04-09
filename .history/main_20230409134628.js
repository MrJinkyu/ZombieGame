'use strict';
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__btn');

let stared = false;

const Zombie = {
    width:48,
    height:63,
    className:'zombie',
    man:'🧟‍♂️',
    boy:'🧟',
    girl:'🧟‍♀️',
}

gameBtn.addEventListener('click',()=>{
    if(!stared){
        start();
    }else{
        stop();
    }
});

function start(){
    stared = true;
    init();
}

function stop(){
    stared = false;
}

function init(){
    field.innerHTML='';
    addZombie(Zombie.className,Zombie.man,1);
    addZombie(Zombie.className,Zombie.boy,1);
    addZombie(Zombie.className,Zombie.girl,1);
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
        field.appendChild(zombie);
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