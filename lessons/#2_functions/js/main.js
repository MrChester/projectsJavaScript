// суммирование элементов
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] instanceof Array) {
            let arr = arguments[i];
            for (var j = 0; j < arr.length; j++) {
                result += arr[j];
            }

        } else {
            result += parseInt(arguments[i]);
        }


    }
    return result;
}

// фильтрация массива
function filter(source, fn){
	let result = [];
	for(let i = 0; i<source.length; i++){
		if(fn(source[i])){
			result.push(source[i]);
		}
	}
	return result;
}

function greaterThan4(value){
	return value > 8;
}


let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = filter(filterArray, greaterThan4);
let array1 = [1, 2, 3];
let array2 = [2, 4, 6];

console.log(`Сумма элементов: ${sum(array1, 5, 5, 8, '5string', array2)}`);
console.log(res);