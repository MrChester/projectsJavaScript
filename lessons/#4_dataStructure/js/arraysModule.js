function arraysModule(){


// Альтернативный способ добавлять элементы в конец массива
console.groupCollapsed('Альтернативный способ добавлять элементы в конец массива');
	let array = ['Раз,', 'два,', 'три,', 'четыре,', 'пять'];
	array[array.length] = 'Вышел';
	array[array.length] = 'зайчик';
	array[array.length] = 'погулять';

	console.log(array);
	
console.groupEnd();

// Добавление элементов в конец массива с помощью метода push()
console.groupCollapsed('Добавление элементов в конец массива с помощью метода push()');
	array.push('Пиф!');
	array.push('Паф!');
	array.push('Не попал - ');
	array.push('Серый');
	array.push('зайчик');
	array.push('убежал!');
	console.log(array);
console.groupEnd();

// синтаксис splice() - array.splice(start, deleteCount[, item1[, item2[, ...]]])
// Удаление и/или добавление элементов из/в массив при помощим метода splice()
console.groupCollapsed('Удаление и/или добавление элементов из/в массив при помощим метода splice()');
	let secondArray = [100, 200, 300, 400, 500, 600, 700, 800];
	let removed = secondArray.splice(-1, 1);
	console.log(secondArray);
	console.log(removed);

	removed = secondArray.splice(1, 1, 1, 2, 3, 4, 5, 6);
	console.log(secondArray);
	console.log(removed);

// Если параметр start = -1, deleteCount = 1 - элементы указанные параметром item вставляются в конец.

	removed = secondArray.splice(-1, 1, 'последний элемент', 'и еще один', 'и еще');
	console.log(secondArray);
	console.log(removed);

// Если параметр start = -1, deleteCount = 0 - элементы указанные параметром item вставляются после предпоследнего элемента	
	removed = secondArray.splice(-1, 0, 'после предпоследнего');
	console.log(secondArray);
	console.log(removed);

console.groupEnd();







// end of module
}

// module export
module.exports = arraysModule;

