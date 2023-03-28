//1
const check = (a: number): number => {
    if (a === 0 || a === 2) {
        return a + 7;
    } else {
        return a / 10;
    }
};
console.log(check(5));
console.log(check(0));
console.log(check(-3));
console.log(check(2));

//2 
function check2(a: number) {
    if (a === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
check2(0);
check2(2);
check2(3);

//3 Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском. Решите задачу через if и через switch-case.
let daysEng: string[] = ['mon', 'tue', 'wed', 'tru', 'fri', 'sat', 'sun'];
let daysRus: string[] = ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
let lang: string = "ru";
let arr: string[];
switch (lang) {
    case 'ru': {
        arr = [...daysRus];
        break
    }
    case 'en': {
        arr = [...daysEng];
        break
    }
    default: {
        arr = [...daysEng];
        break
    }
}

console.log(arr);

(lang: string) => {
    if (lang = "ru") {
        arr = [...daysRus];
    }
    if (lang = 'eng') {
        arr = [...daysEng];
    }
}
console.log(arr);

//4
let tax: number;
let money: number;
function pay(salary: number) {
    if (salary <= 6000) {
        tax = salary * 0.1;
        money = salary - tax;
        return `Налог: ${tax} Зарплата: ${money}`;
    }
    if (salary <= 10000) {
        tax = salary * 0.15;
        money = salary - tax;
        return `Налог: ${tax} Зарплата: ${money}`;
    }
    if (salary <= 15000) {
        tax = salary * 0.175;
        money = salary - tax;
        return `Налог: ${tax} Зарплата: ${money}`;
    }
    if (salary > 15000) {
        tax = salary * 0.2;
        money = salary - tax;
        return `Налог: ${tax} Зарплата: ${money}`;
    }
}
console.log(pay(10000));

//5
let numbers: number[] = [];
for (let i = 0; i < 51; i++) {
    numbers.push(i);
}
console.log(numbers);

//6
let items = [2, 3, 4, 5];
for (let i = 0; i < 4; i++) {
    console.log(`Результат: ${i}`);
}

//7

let obj = {
    'кот': 'мяу',
    'собака': 'гав',
    'корова': 'муу',
};
//for (let key in obj) {
  //  console.log(key + ' говорит: ' + obj[key]);
//}


