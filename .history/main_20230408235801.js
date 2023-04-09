'use strict';

const target = document.querySelector('.game__target');
const field = document.querySelector('.game__field');

window.addEventListener('load',()=>{
    const targetRect = target.getBoundingClientRect();
    field.addEventListener('mousemove',(e)=>{
        target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
    });
});

