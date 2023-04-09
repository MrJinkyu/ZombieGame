'use strict';

const target = document.querySelector('.game__target');

document.addEventListener('mousemove',(e)=>{
    console.log(e.clientX);
    target.style.transform = `translate(${e.clientX}px,${e.clientY}px})`;
});