/**
 * Created by fallenSoulDev on 02.08.2016.
 */
var array = [1, 2, 3,5,85,4,5];

function myReduce(array, callbackFn, initialValue) {
    if (!initialValue) {
        initialValue = array[0];
    }
    var summ = initialValue;
        for (var i = initialValue; i < array.length; i++) {

            summ = callbackFn(summ, array[i]);

    }
    return summ;
}

var result = myReduce(array, function (sum, current) {
    return sum + current;
}, 0);
console.log(result);