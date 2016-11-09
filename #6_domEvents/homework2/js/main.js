let getRandomColor = require('js/getRandomColorModule.js');

let buttonWrap = document.querySelector('.buttonWrap');
let selectedButton;

document.body.addEventListener('click', function(e) {
    e.preventDefault();
    let target = e.target;
   
    while (target !== this) {
        if (target.tagName === 'A') {
            changeColor(target);
            return;
        } else {
            target = target.parentNode;
        }
    }
});

function changeColor(node) {

    if (selectedButton) {
        selectedButton.setAttribute("style", `background-color: ${getRandomColor()};`);
    }
    selectedButton = node;
    selectedButton.setAttribute("style", `background-color: ${getRandomColor()};`);
}
