function sum() {
    let result = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] instanceof Array) {
            let arr = arguments[i];
            for (var j = 0; j < arr.length; j++) {
                result += arr[j];
            }

        } else {
            result += arguments[i];
        }


    }
    return result;
}
let array1 = [1, 2, 3];
let array2 = [2, 4, 6];


console.log(sum(array1, 5, 5, 8, 'string', array2));

// console.log(2+2);
