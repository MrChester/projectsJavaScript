function arraysModule(){

var array = ['Раз,', 'два,', 'три,', 'четыре,', 'пять'];
// Альтернативный способ добавлять элементы в конец массива
console.groupCollapsed('Альтернативный способ добавлять элементы в конец массива');

array[array.length] = 'Вышел';
array[array.length] = 'зайчик';
array[array.length] = 'погулять';

console.log(array);
console.groupEnd('Альтернативный способ добавлять элементы в конец массива');

// Добавление элементов в конец массива с помощью метода push()
console.groupCollapsed('Добавление элементов в конец массива с помощью метода push()');
array.push('Пиф!');
array.push('Паф!');
array.push('Не попал - ');
array.push('Серый');
array.push('зайчик');
array.push('убежал!');
console.log(array);
console.groupEnd('Добавление элементов в конец массива с помощью метода push()');










// end of module
}

// module export
module.exports = arraysModule;

