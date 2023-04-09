'use strict';

const target = document.querySelector('.game__target');
const game = document.querySelector('.game');

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    game.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2}px)`;
        console.log(e.clientX-targetRect.width);
    });
});

