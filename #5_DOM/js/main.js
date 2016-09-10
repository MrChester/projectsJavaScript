/**
 * Created by fallenSoulDev on 10.09.2016.
 */
let prepend = require('../homework1/prependFunction.js');
let viewNodes = require('../_myTask/viewNodesFunction.js');
let noRecursionDeleteTextNodes = require('../homework2/noRecursionDeleteTextNodes.js');
let recursionDeleteTextNodes = require('../homework3/recursionDeleteTextNodes.js');

//prepend function
let container = document.getElementById('d1');
let newElement = document.createElement('div');
newElement.style = 'width: 500px;height: 50px;background-color: antiquewhite;margin-bottom: 10px;';
newElement.innerHTML = 'Привет мир!!!';
prepend(container, newElement);

//node manipulation
//my task, viewNodes and textNodesCounter
viewNodes(document.getElementById('d1'));

// сделать кнопку по нажатию которой будет происходить удаление текстовых узлов
// noRecursionDeleteTextNodes

noRecursionDeleteTextNodes(document.getElementById('d1'));

// recursionDeleteTextNodes

recursionDeleteTextNodes(document.getElementById('d1'));

