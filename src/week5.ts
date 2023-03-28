//Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел, если параметры типа number и приветствие, если параметры типа string или boolean.

function generic<T>(a: T): void {
    if (typeof a == 'string' || 'boolean') {
        console.log('Hello');


    } if (typeof a == 'number') {
        console.log(a);

    }
}

//Создать обобщённый класс с тремя параметрами соответствующими дженерикам (T, V, K).
class Animal3<T, V, K> {
    fly(a: T) { };
    swim(b: V) { };
    run(c: K) { };

}
//Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы, возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.
class Animal4<T, V, K> {
    constructor(public name: T, public age: V, public color: K) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    fly(name: T) { return name };
    swim(age: V) { return age };
    run(color: K) { return color };

}

// Создать класс Fruits, Vegetables и функцию, которая будет проверять тип переменной и выводить в консоль разный текст, в зависимости от типа данных.
class Fruits {
    name: string = 'orange'
}
class Vegetables {
    count: number = 5;
}
function checkType<T>(obj: T) {
    if (obj instanceof Fruits) {
        console.log('it`s fruit!')
    }
    if (obj instanceof Vegetables) {
        console.log('it`s vegetable!')
    }
}
const avocado = new Vegetables;
checkType(avocado);

//Создать два обобщённых интерфейса с одним параметром в каждом, создать константу, чей тип будет объединять оба интерфейса.

interface One {
    run(): string;
}
interface Two {
    go(): void
}
function common<T extends One & Two>(x: T) {
    x.run();
    x.go();
}

