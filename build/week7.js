"use strict";
//Создайте практические примеры правильного и непавильного применения принципов SOLID и дайте пояснение, почему это правильно.
//НЕ ПРАВИЛЬНО
class Animal2 {
    constructor(name) {
    }
    getAnimalName() { }
    ;
    saveAnimal() { }
    ;
}
//ПРАВИЛЬНО, мы разделили класс на два, разделяя две задачи.
class Animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getAnimalName() { }
    ;
}
class AnimalDB {
    getAnimal() { }
    ;
    saveAnimal() { }
    ;
}
//НЕ ПРАВИЛЬНО. Приходится постоянно добавлять условия в фун-ию.
const animals = [
    new Animal('lion'),
    new Animal('cat')
];
function AnimalSound1(a) {
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
    makeSound() { }
    ;
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
        return 'hiss';
    }
}
function AnimalSound(a) {
    for (let i = 0; i <= a.length; i++) {
        a[i].makeSound();
    }
}
AnimalSound(animals);
class Circle {
    drawCircle() {
        //...
    }
}
class ISquare {
    drawSquare() {
        //...
    }
}
class CustomShape {
    draw() {
        //...
    }
}
//Найдите 3 любые библиотеки JavaScript и пример декларации Typescript к каждой (отправьте в виде ссылок с описанием).
