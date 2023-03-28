//Создайте класс Person, который содержит поля name,  age, isStudent.
class Person {
    constructor(
        public name: string,
        public age: number,
        public isStudent: boolean,
    ) {
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
]
//Создайте внутри класса метод, который будут выводить в консоль значения полей и с его помощью выведите в консоль значения созданных выше экземпляров класса.
persons.map((person) =>
    person.getValue()
)
//Создайте пример наследования через абстрактный класс и через интерфейс, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
abstract class Campus {
    constructor(
        public name: string,
        public course: number,
        public direction: string,
        public rating: number,
    ) { }
    abstract getScholarship(): number;
}
class Student extends Campus {
    constructor(public name: string,
        public course: number,
        public direction: string,
        public rating: number) {
        super(name, course, direction, rating);
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
    constructor(public name: string,
        public course: number,
        public direction: string,
        public rating: number,
        public scienceWork: boolean,
    ) {
        super(name, course, direction, rating);
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
    constructor(
        public name: string,
        public price: number,
    ) {
        this.name = name;
        this.price = price;
    }
    eddToCard(): void {
        console.log("Товары добавлены в корзину");
    };
}
class Parfumery extends Products {
    constructor(
        name: string,
        price: number,
        public smell: string,
        public volume: string,
    ) {
        super(name, price);
    }

}
class Underwear extends Products {
    constructor(
        name: string,
        price: number,
        public gender: string,
    ) {
        super(name, price);
        this.gender = gender;
    }
    eddToCard() {
        console.log('Спасибо,что выбрали нас!');
    }
}

class Buyers {
    constructor(
        private name: string,
        private pas: string | number,
        private history: string | string[],
        public registration?: boolean,
    ) {

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
let alex = new Buyers("Alex", "123", "покупка",);
let maria = new Buyers('maria', '2222', 'fff',);
let lemon = new Parfumery("Lemon", 500, "lemon + vanilla", "120мл")

