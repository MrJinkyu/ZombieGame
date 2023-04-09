'use strict';

const target = document.querySelector('.game__target');
const targetRect = target.getBoundingClientRect();
window.addEventListener('load',()=>{
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width}px,${e.clientY-targetRect.height}px)`;
        console.log(targetRect.width);
    });
});
