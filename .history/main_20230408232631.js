'use strict';

// const target = document.querySelector('.game__target');
// window.addEventListener('load',()=>{
//     const targetRect = target.getBoundingClientRect();
//     document.addEventListener('mousemove',(e)=>{
//         target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2}px)`;
//         console.log(e.clientX-targetRect.width);
//     });
// });

const target = document.querySelector('.target');
        // const colum = document.querySelector('.colum');
        // const row = document.querySelector('.row');
        // const tag = document.querySelector('.tag');
        
        window.addEventListener('load',()=>{
            const targetRect = target.getBoundingClientRect();
            const targetH = targetRect.height/2;
            const targetW = targetRect.width/2;

            document.addEventListener('mousemove',(e)=>{
                let x = e.clientX;
                let y = e.clientY;
                
                target.style.transform = `translate(${x-targetW}px,${y-targetH}px)`;
    
                // colum.style.transform = `translateX(${x}px)`;
                // row.style.transform = `translateY(${y}px)`;
    
                // tag.style.transform = `translate(${x}px,${y}px)`;
                // tag.innerHTML=`${e.clientX}px,${e.clientY}px`;
            });
        })