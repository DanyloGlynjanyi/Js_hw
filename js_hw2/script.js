// Масиви та об'єкти
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['2', 2, true, false, 'car', 'cat', 'dog', null, undefined, 6];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'book1',
    pageCount: 100,
    genre: 'action'
}
let obj2 = {
    title: 'book2',
    pageCount: 200,
    genre: 'comedy'
}
console.log(obj2);
let obj3 = {
    title: 'book3',
    pageCount: 300,
    genre: 'drama'
}

//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj4 = {
    title: 'book4',
    pageCount: 400,
    genre: 'drama',
    authors: [{
        name: 'Artur',
        age: 25
    }]
}
let obj5 = {
    title: 'book5',
    pageCount: 500,
    genre: 'drama',
    authors: [{
        name: 'Vlad',
        age: 30
    }]
}
let obj6 = {
    title: 'book6',
    pageCount: 600,
    genre: 'drama',
    authors: [{
        name: 'Ivan',
        age: 35
    }]
}
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrUser = [
    {name: 'Artur', username: 'Artur', password: 'Artur1'},
    {name: 'Vlad', username: 'Vlad', password: 'Vlad2'},
    {name: 'Ivan', username: 'Ivan', password: 'Ivan3'},
    {name: 'Oleg', username: 'Oleg', password: 'Oleg4'},
    {name: 'Igor', username: 'Igor', password: 'Igor5'},
    {name: 'Petro', username: 'Petro', password: 'Petro6'},
    {name: 'Iryna', username: 'Iryna', password: 'Iryna7'},
    {name: 'Olga', username: 'Olga', password: 'Olga8'},
    {name: 'Viktor', username: 'Viktor', password: 'Viktor9'},
    {name: 'Ivan', username: 'Ivan', password: 'Ivan10'},
]
console.log('Password:', arrUser[0].password);
console.log('Password:', arrUser[1].password);
console.log('Password:', arrUser[2].password);
console.log('Password:', arrUser[3].password);
console.log('Password:', arrUser[4].password);
console.log('Password:', arrUser[5].password);
console.log('Password:', arrUser[6].password);
console.log('Password:', arrUser[7].password);
console.log('Password:', arrUser[8].password);
console.log('Password:', arrUser[9].password);
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let arrWeather = [
    {monday: [{morning: 10}, {afternoon: 15}, {evening: 7}]},
    {tuesday: [{morning: 11}, {afternoon: 16}, {evening: 8}]},
    {wednesday: [{morning: 12}, {afternoon: 17}, {evening: 9}]},
    {thursday: [{morning: 13}, {afternoon: 18}, {evening: 10}]},
    {friday: [{morning: 14}, {afternoon: 19}, {evening: 11}]},
    {saturday: [{morning: 15}, {afternoon: 20}, {evening: 12}]},
    {sunday: [{morning: 16}, {afternoon: 21}, {evening: 13}]}
]
console.log(arrWeather);
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('enter your number');
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('enter time 1-59');
if (time >= 0 && time <= 15) {
    console.log('1/4');
} else if (time >= 16 && time <= 30) {
    console.log('2/4');
} else if (time >= 31 && time <= 45) {
    console.log('3/4');
} else if (time >= 46 && time <= 59) {
    console.log('4/4');
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("Enter day 1-31");
if (day >= 1 && day <= 10) {
    console.log('1decade');
} else if (day >= 11 && day <= 20) {
    console.log('2decade');
} else if (day >= 21 && day <= 31) {
    console.log('3decade')
}
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let aWeek = prompt('enter your day');
switch (aWeek) {
    case 'monday':
        console.log('work');
        break
    case 'tuesday':
        console.log('work');
        break
    case 'wednesday':
        console.log('work');
        break
    case 'thursday':
        console.log('work');
        break
    case 'friday':
        console.log('work');
        break
    case 'saturday':
        console.log('work');
        break
    case 'sunday':
        console.log('work');
        break
    default:
        console.log('enter correct day');
}
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('enter first number');
let num2 = +prompt('enter second number');
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else if (num1 === num2) {
    console.log('numbers are equal');
}
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x1 = 0;
x1 = x1 || "default";
console.log(x1);
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Cупер');
} else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Cупер');
} else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Cупер');
}else if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Cупер');
}else if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Cупер');
}else if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Cупер');
}

