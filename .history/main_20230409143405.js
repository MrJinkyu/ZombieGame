'use strict';

const GAME_DURATION_SEC = 3;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let stared = false;
let timer = undefined;

const Zombie = {
    width:48,
    height:63,
    className:'zombie',
    man:'🧟‍♂️',
    boy:'🧟',
    girl:'🧟‍♀️',
    count:1,
}

field.addEventListener('click',(e)=>{
    if(e.target.className=Zombie.className){
        // e.target.style.display = 'none';
        console.log('click!@');
    }else{
        return ;
    }
})

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
    stopGameBtn();
    startGameTimer();
}

function stop(){
    stared = false;
    startGameBtn();
    stopGameTimer();
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    showUpdatedTime(remainingTimeSec);
    timer = setInterval(()=>{
        if(remainingTimeSec<=0){
            clearInterval(timer);
            return ;
        }
        showUpdatedTime(--remainingTimeSec);
    },1000);
}

function showUpdatedTime(time){
    let minute = Math.floor(time/60);
    let seconds = time%60;

    gameTimer.innerHTML=`${minute}:${seconds}`;
}

function stopGameTimer(){
    clearInterval(timer);
}

function startGameBtn(){
    const icon = document.querySelector('.fas');
    icon.classList.add('fa-sharp');
    icon.classList.remove('fa-stop');
    icon.classList.add('fa-play');
}

function stopGameBtn(){
    const icon = document.querySelector('.fas');
    icon.classList.remove('fa-sharp');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function init(){
    field.innerHTML='';
    gameScore.innerHTML= Zombie.count*3;
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