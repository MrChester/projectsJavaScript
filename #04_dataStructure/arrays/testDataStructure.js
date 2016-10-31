var array = [1, 2, 'hello25', "Груша", 10, 20, 'hello'];
var array2 = [1, 2, 3,5,85,4,5];

//modules require
let myForEach = require('./analogueArrayMethods/analogueForEach.js'),
    myMap = require('./analogueArrayMethods/analogueMap.js'),
    myFilter = require('./analogueArrayMethods/analogueFilter.js'),
    mySlice = require('./analogueArrayMethods/analogueSlice.js'),
    myReduce = require('./analogueArrayMethods/analogueReduce.js');


//myForEach call
myForEach(array, item => console.log(item));

//analogueFilter call
let greaterThan4 = myFilter(array, function (item) {
    return item > 4
});

//analogueMap call
let square = myMap(array, function (item) {
    return item * item
});

//analogueSlice call
let slice = mySlice(array, 2, 4);

//analogueMap call
let result = myReduce(array2, function (sum, current) {
    return sum + current;
}, 0);


//console log
console.log(square);
console.log(greaterThan4);
console.log(slice);
console.log(result);
