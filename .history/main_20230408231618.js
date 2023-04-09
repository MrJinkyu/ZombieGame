'use strict';

const target = document.querySelector('.game__target');

window.addEventListener('load',()=>{
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        console.log('move');
    });
});
