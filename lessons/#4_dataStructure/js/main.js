let obj1 = {
    name: 'Евгений',
    lastName: 'Романьков',
    old: 1000
};

// Перезаписывание значения ключа
// obj1.lastName = '!!!!!!!!!';

// Удаление ключа
// delete obj1.lastName;

// Простеший способ перебора key
console.groupCollapsed('Простеший способ перебора key');
for (let prop in obj1) {
    console.log(prop);
}
console.groupEnd('Простеший способ перебора key');

// Перебор value
console.groupCollapsed('Перебор value');
for (let prop in obj1) {
    console.log(obj1[prop]);
}
console.groupEnd('Перебор value');

// Проверка наличия key в объекте
console.groupCollapsed('Проверка наличия key в объекте');
if (obj1.hasOwnProperty('old')) {
    console.log('Свойство old ЕСТЬ в объекте');
} else {
    console.log('Свойства old НЕТ в объекте');
}
console.groupEnd('Проверка наличия key в объекте');

// Вывод имен свойств объекта в виде массива
console.groupCollapsed('Вывод имен свойств объекта в виде массива');
console.log(Object.keys(obj1));
console.groupEnd('Вывод имен свойств объекта в виде массива');

// Перебор массива с именами свойств объекта
console.groupCollapsed('Перебор массива с именами свойств объекта');
let keys = Object.keys(obj1);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
console.groupEnd('Перебор массива с именами свойств объекта');

// Перебор массива с именами свойств объекта и получение их значений
console.groupCollapsed('Перебор массива с именами свойств объекта и получение их значений');
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(obj1[key]);
}
console.groupEnd('Перебор массива с именами свойств объекта и получение их значений');


// Другой способ перебора свойств объекта с использование forEach
console.groupCollapsed('Другой способ перебора свойств объекта с использование forEach')
Object.keys(obj1).forEach(key => console.log(obj1[key]));
console.groupEnd()

// Вывод объекта obj1
console.groupCollapsed('Вывод объекта obj1');
console.log(obj1);
console.groupEnd('Вывод объекта obj1');
