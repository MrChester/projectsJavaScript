/**
 * Created by fallenSoulDev on 02.08.2016.
 */
function myMap(array, callbackFn) {
    var otherArray = [],
        i = 0,
        j = 0;
    for (i; i < array.length; i++) {
        if (array[i] !== undefined) {
            otherArray[j] = callbackFn(array[i]);
            j++;
        }
    }
    return otherArray;

}

module.exports = myMap;
