'use strict';



// window.addEventListener('load',()=>{
//     const targetRect = target.getBoundingClientRect();
//     field.addEventListener('mousemove',(e)=>{
//         target.style.transform = `translate(${e.clientX-targetRect.width/2}px,${e.clientY-targetRect.height/2-100}px)`;
//     });
// });

const target = document.querySelector('.game__target');
const field = document.querySelector('.game__field');

let mouseX = 0;
let mouseY = 0;

function moveImage() {
    const newX = mouseX - (target.getBoundingClientRect().width / 2);
    const newY = mouseY - (target.getBoundingClientRect().height / 2);
    target.style.transform = `translate(${newX}px, ${newY}px)`;
  
    requestAnimationFrame(moveImage);
  }

  
  field.addEventListener("mousemove", function(event) {
    mouseX = event.clientX - container.offsetLeft;
    mouseY = event.clientY - container.offsetTop;
  });
  
  moveImage();