let circle = document.getElementById('circle');
let moving = 2;
let container = document.body


window.addEventListener('load',()=> {
    circle.style.position = 'absolute';
    circle.style.left = "50%";
    circle.style.top = "50%";
});

window.addEventListener("click", getClickPosition, false);

function getClickPosition(e2){
    let parentPosition = getPosition(container);

    let xPosition = e2.clientX -parentPosition.x - (circle.offsetWidth/2);
    let yPosition = e2.clientY - parentPosition.y - (circle.offsetHeight/2);
    let translate3dValue = "translate3d(" +xPosition +"px," + yPosition +"px, 0)";
    circle.style.transform = translate3dValue;
}

function getPosition(element){
    let xPosition = 0;
    let yPosition = 0;
    while (element){
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return{x: xPosition, y: yPosition};
}

window.addEventListener('keyup',(e)=>{
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moving + '%';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moving + '%';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moving + '%';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moving + '%';
            break;

    }
});
window.addEventListener('keydown', (evt)=>{
    if (evt.code === 'Space'){
        circle.style.backgroundColor = '#ccd8c5';
    }
});
window.addEventListener('keyup', (evt)=>{
    if (evt.code === 'Space'){
        circle.style.backgroundColor = '#b4a94a';
    }
});
// circle.addEventListener('keyup', Moving,false);
// function Moving(e){
//     switch (e.key) {
//         case 'ArrowLeft':
//             circle.style.left = parseInt(circle.style.left) - moving + '%';
//             break;
//         case 'ArrowUp':
//             circle.style.top = parseInt(circle.style.top) - moving + '%';
//             break;
//         case 'ArrowRight':
//             circle.style.left = parseInt(circle.style.left) + moving + '%';
//             break;
//         case 'ArrowDown':
//             circle.style.top = parseInt(circle.style.top) + moving + '%';
//             break;
//     }
// }








// window.onload = init;
// function init(){
//     let circle = document.getElementById('circle');
//     circle.style.position = ""
// }
// function init(){
//     let circle = document.getElementById("circle");
//     circle.style.position = "relative";
//     circle.style.left = "50%";
//     circle.style.top = "50%";
// }

// function getKeyMove(e){
//     switch (e.key){
//         case 37:
//             moveLeft();
//             break;
//         case 38:
//             moveUp();
//             break;
//         case 39:
//             moveRight();
//             break;
//         case 40:
//             moveDown();
//             break;
//     }
// }


// function moveLeft(){
//     circle.style.left = parseInt(circle.style.left) - moving +'px';
// }
// function moveUp(){
//     circle.style.top = parseInt(circle.style.top) - moving +'px';
// }
// function moveRight(){
//     circle.style.right = parseInt(circle.style.right) - moving +'px';
// }
// function moveDown(){
//     circle.style.bottom = parseInt(circle.style.bottom) - moving +'px';
// }