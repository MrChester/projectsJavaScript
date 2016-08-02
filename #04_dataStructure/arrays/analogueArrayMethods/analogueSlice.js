/**
 * Created by fallenSoulDev on 02.08.2016.
 */
// var arr = [1, 2, 'hello25', "Груша", 10, 20, 'hello'];
function mySlice(array, begin, end) {
    var otherArray = [],
        i = 0,
        j = 0;
    if ((begin > array.length) || (end > array.length)) {
        throw new Error('Превышена длина массива')
    }
    if (!begin && !end) {
        for (i; i < array.length; i++) {
            otherArray[j] = array[i];
            j++;
        }
    }

    if (!end && begin) {
        end = array.length - 1;
    }
    if (!begin && end) {
        begin = 0;
    }
    if (end < 0) {
        end = array.length + to;
    }
    if (begin < 0) {
        begin = array.length + from;
    }

    for (var i = begin; i < end; i++) {
        otherArray[j] = array[i];
        j++;
    }
    return otherArray;
}

module.exports = mySlice;