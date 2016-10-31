/**
 * Created by fallenSoulDev on 02.08.2016.
 */
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

module.exports = myReduce;