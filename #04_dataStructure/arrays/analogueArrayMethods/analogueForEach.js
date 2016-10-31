/**
 * Created by fallenSoulDev on 01.08.2016.
 */
function myForEach(array, callbackFn) {
    for (var i = 0; i < array.length; i++) {
        callbackFn(array[i], i, array);
    }
}


module.exports = myForEach;