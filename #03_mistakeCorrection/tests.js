/**
 * Created by fallenSoulDev on 29.07.2016.
 */
// var allNumbers = 1321;

let isSomeTrue = require('./homeWork2/isSomeTrueFunction.js');

let isAllTrue = require('./homeWork1/isAllTrueFunction.js');

let isNumber = require('./isNumberFunction.js');


// test for isAllTrue
console.log(isAllTrue([1, 'hello'], isNumber));
console.log(isAllTrue([], isNumber));
console.log(isAllTrue('hello', isNumber));

// test for isSomeTrue
console.log(isSomeTrue([1,2,'hello',4,5], isNumber));
