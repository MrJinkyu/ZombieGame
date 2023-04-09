'use strict';

const GAME_DURATION_SEC = 4;

const target = document.querySelector('.game__target');
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up__message');
const popUpRefreshBtn = document.querySelector('.pop-up__refresh');

let stared = false;
let timer = undefined;
let moveTimer = undefined;
let kill = 0;

const Zombie = {
    width:48,
    height:63,
    className:'zombie',
    man:'🧟‍♂️',
    boy:'🧟',
    girl:'🧟‍♀️',
    count: 3,
}

popUpRefreshBtn.addEventListener('click',()=>{
    HidePopUp();
    showGameBtn();
    start();
});

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
    showGameBtn();
}

function stop(){
    stared = false;
    hideGameBtn();
    showPopUpWithText('Replay❓');
    stopGameTimer();
    stopMoveTimer();
}

function finish(win){
    stared = false;
    stopGameTimer();
    stopMoveTimer();
    hideGameBtn();
    if(win){
        showPopUpWithText('Mission accomplished!! ✅');
    }else{
        showPopUpWithText('Mission failed..🩸');
    }
}

function HidePopUp(){
    popUp.classList.remove('visible');
}

function showPopUpWithText(text){
    popUpMessage.innerHTML = text;
    popUp.classList.add('visible');
}

function showGameBtn(){
    gameBtn.style.visibility = 'visible';
}

function hideGameBtn(){
    gameBtn.style.visibility = 'hidden';
}

function showUrgentTimer(){
    gameTimer.style.borderColor='red';
    gameTimer.style.color='red';
}

function initTimerStyle(){
    gameTimer.style.borderColor='white';
    gameTimer.style.color='white';
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    showUpdatedTime(remainingTimeSec);
    initTimerStyle();
    timer = setInterval(()=>{
        if(remainingTimeSec<=3){
            showUrgentTimer();
        }
        if(remainingTimeSec<=0){
            clearInterval(timer);
            finish(kill == Zombie.count);
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
    kill = 0;
    gameScore.innerHTML= `☠️<br>0/${Zombie.count*3}`;
    addZombie(Zombie.className,Zombie.man,Zombie.count);
    addZombie(Zombie.className,Zombie.boy,Zombie.count);
    addZombie(Zombie.className,Zombie.girl,Zombie.count);

    const zombies = document.querySelectorAll('.zombie');
    moveZombies(zombies);
}

function moveZombies(zombies){
    for (let i = 0; i < zombies.length; i++) {
        let x = 0;
        let y = 0;
        let remainingTimeSec = GAME_DURATION_SEC;
        moveTimer = setInterval((zombies) => {
            if(remainingTimeSec <= 0){
                clearInterval(moveTimer);
                return ;
            }
            remainingTimeSec = remainingTimeSec - 0.5;
            moveElement(zombies);
        }, 500, zombies[i]);
        
            function moveElement(element) {
    
                let newX = randomNumber(fieldRect.width - Zombie.width);
                let newY = randomNumber(fieldRect.height - Zombie.height);
    
                let deltaX = newX - x;
                let deltaY = newY - y; 
            
                x = newX;
                y = newY;
    
                element.style.transition = "transform 5s";
                element.style.transform = `translate(${deltaX}px,${deltaY}px)`;
            }
        }
}

function stopMoveTimer(){
    clearInterval(moveTimer);
    return ; 
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

function hunt(e){
    if(!stared){
        return;
    }

    if(e.target.className === Zombie.className){
        e.target.remove();
        kill++;
        updateScoreBoard();
        animScoreBoard();
        if(kill === Zombie.count*3){
            finish(true);
        }
    }else{
        return ;
    }
}

function animScoreBoard(){
    gameScore.style.fontSize = '2rem';
    setTimeout(()=>{
        gameScore.style.fontSize = '1.4rem';
    },200);
}

function updateScoreBoard(){
    gameScore.innerHTML = `☠️<br>${kill}/${Zombie.count*3}`;
}

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
    });
    document.addEventListener('click',hunt);
});