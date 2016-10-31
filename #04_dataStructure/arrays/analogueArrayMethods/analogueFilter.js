/**
 * Created by fallenSoulDev on 02.08.2016.
 */
function myFilter(array, callbackFn) {
    var otherArray = [],
        i = 0,
        j = 0;
    for (i; i < array.length; i++) {
        if (array[i] !== undefined) {
            if (callbackFn(array[i], i, array)) {
                otherArray[j] = array[i];
                j++;
            }
        }
    }
    return otherArray;
}

module.exports = myFilter;

