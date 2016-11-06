function objectsModule() {
    let obj1 = {
        name: 'Суслик',
        lastName: 'Сусликовский',
        old: 1000,
        length: 150,
        human: {
            name: 'Кролик',
            lastName: 'Кроликовский'
        },
        // valueOf: function(){
        //     return this.length;
        // },
        toString: function() {
            return `[${this.name}] - [${this.lastName}]`;
        }
    };

    let obj2 = {
        name: 'Евгений',
        lastName: 'Романьков',
        old: 1000,
        length: 180,
        // valueOf: function(){
        //     return this.length;
        // },
        toString: function() {
            return this.name + ' ' + this.lastName;
        }
    };

    let obj3 = [{
        name: 'name',
        writable: true,
        value: 'name'
    }, {
        lastName: 'lastName',
        writable: true,
        value: 'lastName'
    }, {
        length: 'length',
        writable: true,
        value: 'length'
    }];

    // Перезаписывание значения ключа
    // obj1.lastName = '!!!!!!!!!';

    // Удаление ключа
    // delete obj1.lastName;

    // Вывод объекта obj1
    console.groupCollapsed('Вывод объекта obj1');
    console.log(obj1);
    console.groupEnd('Вывод объекта obj1');

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
    console.groupCollapsed('Другой способ перебора свойств объекта с использование forEach');
    Object.keys(obj1).forEach(key => console.log(obj1[key]));
    console.groupEnd();

    // Сравнение объектов
    console.groupCollapsed('Сравнение объектов');
    if (obj1 > obj2) {
        console.log('Объект больше');
    } else {
        console.log("Объект меньше или равен");
    }
    console.groupEnd('Сравнение объектов');

    // Арифметические действия с объектами(методы valueOf и toString)
    console.groupCollapsed('Арифметические действия с объектами(методы valueOf и toString)');
    console.log(obj1 + ', ' + obj2);
    console.groupEnd('Арифметические действия с объектами(методы valueOf и toString)');

    // Динамическое создание свойств
    console.groupCollapsed('Динамическое создание свойств');
    Object.defineProperty(obj1, 'foo', {
        value: 'bar'
            // writable: true
    });

    // Переопределение свойств с помощью set() и get()
    Object.defineProperty(obj1, 'subProp', {
        get() {
            return `${this.name} ${this.lastName}`;
        },
        // set(value){
        // 	[name, lastName] = value.split(' ');

        // 	this.name = name;
        // 	this.lastName = lastName;
        // }
    });

    obj1.foo = 'noBar';
    obj1.subProp = 'Иван Иванов';
    console.log(obj1.foo);
    console.log(obj1.subProp);

    for (let prop in obj1) {
        console.log(`[Key: ${prop}]`);
    }
    console.groupEnd('Динамическое создание свойств');

    // end of module
}

// module export
module.exports = objectsModule;
