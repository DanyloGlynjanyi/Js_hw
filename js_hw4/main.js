// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculation(a, b) {
    return a * b;
}

console.log(calculation(5, 2));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function cirle(r) {
    return Math.PI * r * r
}

console.log(cirle(7));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

console.log(cylinder(5, 10));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
const users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
]

function acceptsdata(array) {
    for (const item of array) {
        console.log(`ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Status: ${item.status}`);
    }
    return array;
}

acceptsdata(users);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function pCreator(text) {
    document.write(` <div class="p-creator"><p>${text}</p></div>`);
}

pCreator('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function ulCretor(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}

ulCretor('Javascript');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function liCretor(text, count) {
    document.write(`<ul class="li_Creator">`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text} ${count}</li>`);
    }
    document.write(`</ul>`)
}

liCretor('Javascript', 1);
liCretor('Javascript', 2);
liCretor('Javascript', 3);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let trash = [true, '22222 ', 'Javascript', false, 'Vasya', 'CSS', 554547]

function trashCretor(content) {
    for (const contentElement of content) {
        document.write(`<ul class="trash_creator"><li>${contentElement}</li></ul>`);
    }
}

trashCretor(trash);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function objCreator(arg) {
    for (const argElement of arg) {
        document.write(`

<div class="objCreator">
<ul>
<li>Id:${argElement.id} name:${argElement.name} age:${argElement.age}</li>
</ul>
</div>`)
    }
    return arg
}

objCreator(users)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let arrNum = [123, 222, 0, -5, 7, 4, 6, 8]


function minNum(arg) {
    for (const argElement of arg) {
        if (argElement < 0) {
            return `minNum:${argElement}`;
        }
    }
}


console.log(minNum(arrNum));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(sum(arrNum));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log(swap([11, 22, 33, 44], 0, 1));
//
// function swap(arr, index1, index2) {
//     const first = arr[index1];
//     const last = arr[index2];
//     arr[index1] = last;
//     arr[index2] = first;
//     return arr
// }
function swap(arr, index1, index2){
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]] ,arr
}

swap([11, 22, 33, 44], 0, 1);


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        sum1 = sumUAH
        if (exchangeCurrency === item.currency) {
            res= sum1 / `${item.value}`
            console.log(`${item.currency}:${res}`)
        }
    }
}

exchange(10000, [{currency: 'USD', value: 40}], 'USD')
exchange(8400, [{currency: 'EUR', value: 42}], 'EUR')