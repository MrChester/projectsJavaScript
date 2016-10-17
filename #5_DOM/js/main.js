/**
 * Created by fallenSoulDev on 10.09.2016.
 */
let prepend = require('../homework1/prependFunction.js');
let viewNodes = require('../_myTask/viewNodesFunction.js');
let noRecursionDeleteTextNodes = require('../homework2/noRecursionDeleteTextNodes.js');
let recursionDeleteTextNodes = require('../homework3/recursionDeleteTextNodes.js');
let scanDom = require('../homework4/scanDom.js');
// let scanDom2 = require('../homework4/scanDom2.js');


//prepend function
let container = document.getElementById('wrapper');
let newElement = document.createElement('div');
newElement.style = 'width: 500px;height: 50px;background-color: antiquewhite;margin-bottom: 10px;';
newElement.innerHTML = 'Привет мир!!!';
prepend(container, newElement);

//node manipulation
//my task, viewNodes and textNodesCounter
// viewNodes(document.getElementById('wrapper'));

// сделать кнопку по нажатию которой будет происходить удаление текстовых узлов
// noRecursionDeleteTextNodes

// noRecursionDeleteTextNodes(document.getElementById('wrapper'));

// recursionDeleteTextNodes

// recursionDeleteTextNodes(document.getElementById('wrapper'));

//сканирование дом дерева и подсчет узлов

scanDom(document.documentElement);

// scanDom2(document.body);

