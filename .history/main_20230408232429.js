'use strict';

const target = document.querySelector('.game__target');
window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    document.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width}px,${e.clientY-targetRect.height}px)`;
        console.log(e.clientX-targetRect.width);
    });
});
