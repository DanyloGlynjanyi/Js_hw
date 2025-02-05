// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello'
let owu = 'owu'
let com = 'com'
let ua = 'ua'
let one = 1
let ten = 10
let n3 = -999
let n123 = 123
let PI = 3.14
let n2 = 2.7
let n16 = 16
let t = true
let f = false
console.log(hello)
console.log(owu)
console.log(com)
console.log(ua)
console.log(one)
console.log(ten)
console.log(n3);
console.log(n123);
console.log(PI);
console.log(n2);
console.log(n16);
console.log(f)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Vitalik"
let middleName = "Olegovich"
let lastName = "Alekseev"
let person = firstName + " " + middleName + " " + lastName
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імя, По-Батькові та роками. та вивести в консоль

let firstNam = prompt("Enter is your name!!!!");
let midName = prompt("Enter is your middle name!!!!!");
let age = +prompt("Enter is your age!!!!");
console.log(`Ім'я: ${firstNam}`);
console.log(`По-Батькові: ${midName}`);
console.log(`Вік: ${age}`);