// todo: homework Moving ball part 1
// 1. create a ball element in HTML in the center of the screen in html
// 2. find ball element in DOM
// 3. create handler: Key up/down/left/right ball move
// register the handler in <body> (statically)
// hint for 3:
//
const eleBall = document.getElementById('ball');

const moveBall = function (evt){
    let eleBallPos = eleBall.getBoundingClientRect()
    // console.log(eleBallPos)

    console.log(evt.key)
    evt.key === 'ArrowLeft' &&
    (eleBall.style.left = eleBallPos.left - 100 + 'px')
    evt.key === 'ArrowUp' &&
    (eleBall.style.top = eleBallPos.top - 100 + 'px')
    evt.key === 'ArrowRight' &&
    (eleBall.style.left = eleBallPos.left + 100 + 'px')
    evt.key === 'ArrowDown' &&
    (eleBall.style.top = eleBallPos.top + 100 + 'px')
}

document.addEventListener('keydown', moveBall)
