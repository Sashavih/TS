
//Создайте практические примеры правильного и непавильного применения принципов SOLID и дайте пояснение, почему это правильно.

//НЕ ПРАВИЛЬНО
class Animal2 {
    constructor(name: string) {
    }
    getAnimalName() { };
    saveAnimal() { };
}
//ПРАВИЛЬНО, мы разделили класс на два, разделяя две задачи.
class Animal {
    constructor(public name: string) {
        this.name = name;
    }
    getAnimalName() { };
}
class AnimalDB {
    getAnimal() { };
    saveAnimal() { };
}

//НЕ ПРАВИЛЬНО. Приходится постоянно добавлять условия в фун-ию.
const animals: object[] = [
    new Animal('lion'),
    new Animal('cat')
];
function AnimalSound1(a: any) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i].name === ' lion') {
            return 'roar';
        }
        if (a[i].name === 'cat') {
            return 'rrrr';
        }
    }

}
AnimalSound1(animals);

//ПРАВИЛЬНО . Удобно, что для каждой сущности мы прописываем в ее же классе что нужно возвращать.
class Animall {
    makeSound() { };
}
class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
}
class Cat extends Animal {
    makeSound() {
        return 'rrrr';
    }
}
class Snake extends Animal {
    makeSound() {
        return 'hiss'
    }
}
function AnimalSound(a: any) {
    for (let i = 0; i <= a.length; i++) {
        a[i].makeSound();
    }
}
AnimalSound(animals);

//НЕ ПРАВИЛЬНО, фигуры не должны реализовывать методы, которые они не используют.
interface Shape {
    drawCircle();
    drawSquare();
    drawTriangle();
}

//ПРАВИЛЬНО
interface IShape {
    draw();
}
interface ICircle {
    drawCircle(): void;
}
interface ISquare {
    drawSquare(): void;
}
interface ITriangle {
    drawTriangle(): void;
}

class Circle implements ICircle {
    drawCircle() {
        //...
    }
}
class ISquare implements ISquare {
    drawSquare() {
        //...
    }
}
class CustomShape implements IShape {
    draw() {
        //...
    }
}

//Найдите 3 любые библиотеки JavaScript и пример декларации Typescript к каждой (отправьте в виде ссылок с описанием).
