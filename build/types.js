"use strict";
//enum
var Condition;
(function (Condition) {
    Condition[Condition["NEW"] = 0] = "NEW";
    Condition[Condition["PREOWNED"] = 1] = "PREOWNED";
})(Condition || (Condition = {}));
const book = {
    name: 'Cooking book',
    price: 10.99,
    cuisine: ['french'],
    condition: Condition.NEW
};
//union types
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        console.log(n1 + n2);
    }
    else {
        console.log(n1.toString() + n2.toString());
    }
}
//literal types
function add2(n1, n2, dataType) {
    if (dataType === 'Number') {
        console.log(+n1 + +n2);
    }
    else {
        console.log(n1.toString() + n2.toString());
    }
}
const stringType = 'String';
const numberType = 'Number';
add2(5, 8, numberType);
add2('кото', 'пес', stringType);
function add3(n1, n2, dataType) {
    if (dataType === 'Number') {
        console.log(+n1 + +n2);
    }
    else {
        console.log(n1.toString() + n2.toString());
    }
}
function printUserRole(user) {
    console.log(user.role);
}
//анонимная функция
let sum = function (x, y) {
    return x + y;
};
sum(2, 3);
//необязательные параметры
function showData(userName, userAvatarUrl) {
    if (userAvatarUrl != undefined) {
        return userName + userAvatarUrl;
    }
    else {
        return userName;
    }
}
showData('Kate');
showData('Kate', 'someUrl');
// обычная функция
let getResult = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
// лямбда функция  
let getResult2 = (username, points) => {
    return `${username} scored ${points} points!`;
};
//Если стрелочная функция возвращает всего одно выражение, её можно ещё более упростить:
const add4 = (a, b) => a + b;
//А если у нас есть только один аргумент, то можно написать таким образом:
const printResult = output => console.log(output);
//Без параметров:
let printResult2 = () => console.log("Hello TypeScript");
printResult2();
//Generics
function includeNumber(array, query) {
    for (const value of array) {
        if (value === query) {
            return true;
        }
    }
    return false;
}
//остаточные параметры
function hello(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
hello("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
hello("Hello"); // returns "Hello !"
//оператор расширения
const hobbies = ['reading', 'sports'];
const activities = ['hiking', 'running'];
console.log(hobbies.push(...activities));
// ['reading', 'sports', 'hiking', 'running']
