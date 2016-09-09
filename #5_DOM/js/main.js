/**
 * Created by fallenSoulDev on 10.09.2016.
 */
let prepend = require('../homework1/prependFunction.js');
let noRecursionDeleteTextNodes = require('../homework2/noRecursionDeleteTextNodes.js');
let recursionDeleteTextNodes = require('../homework3/recursionDeleteTextNodes.js');

//prepend function
var container = document.getElementById('d1');
var newElement = document.createElement('div');
newElement.style = 'width: 500px;height: 50px;background-color: antiquewhite;margin-bottom: 10px;';
newElement.innerHTML = 'Привет мир!!!';
prepend(container, newElement);

//    сделать кнопку по нажатию которой будет происходить удаление текстовых узлов
let Node = document.getElementById('d1');
// noRecursionDeleteTextNodes(Node);

recursionDeleteTextNodes(Node);