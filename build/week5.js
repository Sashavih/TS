"use strict";
//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел, если параметры типа number и приветствие, если параметры типа string или boolean.
function generic(a) {
    if (typeof a == 'string' || 'boolean') {
        console.log('Hello');
    }
    if (typeof a == 'number') {
        console.log(a);
    }
}
//Создать обобщённый класс с тремя параметрами соответствующими дженерикам (T, V, K).
class Animal3 {
    fly(a) { }
    ;
    swim(b) { }
    ;
    run(c) { }
    ;
}
//Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы, возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.
class Animal4 {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.name = name;
        this.age = age;
        this.color = color;
    }
    fly(name) { return name; }
    ;
    swim(age) { return age; }
    ;
    run(color) { return color; }
    ;
}
// Создать класс Fruits, Vegetables и функцию, которая будет проверять тип переменной и выводить в консоль разный текст, в зависимости от типа данных.
class Fruits {
    constructor() {
        this.name = 'orange';
    }
}
class Vegetables {
    constructor() {
        this.count = 5;
    }
}
function checkType(obj) {
    if (obj instanceof Fruits) {
        console.log('it`s fruit!');
    }
    if (obj instanceof Vegetables) {
        console.log('it`s vegetable!');
    }
}
const avocado = new Vegetables;
checkType(avocado);
function common(x) {
    x.run();
    x.go();
}
