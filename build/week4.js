"use strict";
//Создайте класс Person, который содержит поля name,  age, isStudent.
class Person {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    getValue() {
        console.log(this.name, this.age, this.isStudent);
    }
}
//Создайте три экземпляра класса Person.
let persons = [
    new Person('Sasha', 29, true),
    new Person('Emi', 2, false),
    new Person('Anna', 30, true)
];
//Создайте внутри класса метод, который будут выводить в консоль значения полей и с его помощью выведите в консоль значения созданных выше экземпляров класса.
persons.map((person) => person.getValue());
//Создайте пример наследования через абстрактный класс и через интерфейс, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
class Campus {
    constructor(name, course, direction, rating) {
        this.name = name;
        this.course = course;
        this.direction = direction;
        this.rating = rating;
    }
}
class Student extends Campus {
    constructor(name, course, direction, rating) {
        super(name, course, direction, rating);
        this.name = name;
        this.course = course;
        this.direction = direction;
        this.rating = rating;
    }
    getScholarship() {
        if (this.rating === 5) {
            return 200;
        }
        else {
            return 200;
        }
    }
}
class Aspirant extends Campus {
    constructor(name, course, direction, rating, scienceWork) {
        super(name, course, direction, rating);
        this.name = name;
        this.course = course;
        this.direction = direction;
        this.rating = rating;
        this.scienceWork = scienceWork;
        this.scienceWork = scienceWork;
    }
    getScholarship() {
        if (this.rating === 5) {
            return 300;
        }
        else {
            return 250;
        }
    }
}
let studentSasha = new Student("Sasha", 2, "doctor", 5);
let aspirantMasha = new Aspirant('Masha', 5, "developer", 3, true);
console.log(studentSasha.getScholarship());
console.log(aspirantMasha.getScholarship());
//Создайте классы для описания интернет-магазина. У него должны быть несколько категорий товаров (с названием и ценой), покупатели (которые для покупки должны зарегистрироваться, соответственно у покупателя будет пароль, логин и история покупок), корзина. Также должны быть методы: добавить в корзину, купить, зарегистрироваться, войти в аккаунт.
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    eddToCard() {
        console.log("Товары добавлены в корзину");
    }
    ;
}
class Parfumery extends Products {
    constructor(name, price, smell, volume) {
        super(name, price);
        this.smell = smell;
        this.volume = volume;
    }
}
class Underwear extends Products {
    constructor(name, price, gender) {
        super(name, price);
        this.gender = gender;
        this.gender = gender;
    }
    eddToCard() {
        console.log('Спасибо,что выбрали нас!');
    }
}
class Buyers {
    constructor(name, pas, history, registration) {
        this.name = name;
        this.pas = pas;
        this.history = history;
        this.registration = registration;
    }
    getRegestration() {
        const result = !this.name || !this.pas ? this.registration = false : this.registration = true;
        return result;
    }
    buyProducts() {
        const result = !this.registration ? console.log("Чтобы сделать покупку, нужно зарегистрироваться") : this.history = "Покупка";
        return result;
    }
}
let alex = new Buyers("Alex", "123", "покупка");
let maria = new Buyers('maria', '2222', 'fff');
let lemon = new Parfumery("Lemon", 500, "lemon + vanilla", "120мл");
