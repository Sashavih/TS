//enum
enum Condition {
    NEW, PREOWNED
}

const book = {
    name: 'Cooking book',
    price: 10.99,
    cuisine: ['french'],
    condition: Condition.NEW
}

//union types
function add(n1: string | number, n2: string | number) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        console.log(n1 + n2);
    }
    else {
        console.log(n1.toString() + n2.toString());
    }
}

//literal types
function add2(n1: string | number, n2: string | number, dataType: 'Number' | 'String') {
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

//custom types
type MyCustomType = string | number;
type CustomLiteralType = 'Number' | 'String';
function add3(n1: MyCustomType, n2: MyCustomType, dataType: CustomLiteralType) {
    if (dataType === 'Number') {
        console.log(+n1 + +n2);
    }
    else {
        console.log(n1.toString() + n2.toString());
    }
}

type Role = 'Admin' | 'User'
type User = { name: string, age: number, role: Role }

function printUserRole(user: User) {
    console.log(user.role);
}
//анонимная функция
let sum = function (x: number, y: number): number {
    return x + y;
}
sum(2, 3);

//необязательные параметры
function showData(userName: string, userAvatarUrl?: string) {
    if (userAvatarUrl != undefined) {
        return userName + userAvatarUrl;
    }
    else {
        return userName;
    }
}
showData('Kate')
showData('Kate', 'someUrl')

// обычная функция
let getResult = function (username: string, points: number) {
    return username + ' scored ' + points + ' points!';
};

// лямбда функция  
let getResult2 = (username: string, points: number): string => {
    return `${username} scored ${points} points!`;
}
//Если стрелочная функция возвращает всего одно выражение, её можно ещё более упростить:
const add4 = (a: number, b: number) => a + b

//А если у нас есть только один аргумент, то можно написать таким образом:
const printResult: (a: string) => void = output => console.log(output);

//Без параметров:
let printResult2 = () => console.log("Hello TypeScript");
printResult2();

//Generics
function includeNumber(array: number[], query: number): boolean {
    for (const value of array) {
        if (value === query) {
            return true;
        }
    }
    return false;
}
//остаточные параметры
function hello(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
hello("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"
hello("Hello");// returns "Hello !"

//оператор расширения
const hobbies = ['reading', 'sports'];
const activities = ['hiking', 'running']
console.log(hobbies.push(...activities));
// ['reading', 'sports', 'hiking', 'running']