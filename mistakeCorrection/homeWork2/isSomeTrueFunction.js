/**
 * Created by fallenSoulDev on 29.07.2016.
 */
// var allNumbers = [1, 2, 4, 5, 6, 7, 8];
var someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];
var noNumbers = ['это', 'массив', 'без', 'чисел'];
var emptyArray = [];
var notArray = 'hello world!!!';

function isSomeTrue(source, filterFn) {
    if (source.length === 0) {
        throw new Error('Array is empty');
    }
    if (!(source instanceof Array)) {
        throw new Error('It is not Array');
    }
    else {
        for (var i = 0; i < source.length; i++) {
            if (filterFn(source[i]) === true) {
                return true;
            }
        }
        return false;
    }
}

function isNumber(val) {
    return typeof val === 'number';
}

console.log(isSomeTrue([1,2,3,4,5,6,7,8,9], isNumber)); //вернет true

console.groupCollapsed();
try {
    console.log(isSomeTrue(emptyArray, isNumber))
} catch (e) {
    console.error(e.message);
}

try {
    console.log(isSomeTrue(notArray, isNumber));
} catch (e) {
    console.error(e.message);
}
console.groupEnd();



console.log(isSomeTrue(someNumbers, isNumber)); //вернет false
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

