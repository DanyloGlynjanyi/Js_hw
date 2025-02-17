// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';
console.log(`${str1.length} ${str2.length} ${str3.length}`);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const strUpper = `'${str1}' '${str2}' '${str3}'`;
console.log(strUpper.toUpperCase())


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const strlower = strUpper.toLowerCase();
console.log(strlower)

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim())


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strToarr = 'Ревуть воли як ясла повні';
const arr = strToarr.split(' ');
console.log(arr);
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]  за допомоги map перетворити всі об'єкти в масиві на стрінгові.
let arrTonum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arrtoString = arrTonum.map(arrTonum => arrTonum.toString())
console.log(arrtoString)
// #5hqyKTfmc
// - створити функцію sortNums(array, direction) , яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums(nums, 'ascending') // [3,11,21]
// sortNums(nums, 'descending') // [21,11,3]
const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        console.log(array.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(array.sort((b, a) => a - b));
    }
}

let nums = [11, 21, 3];
sortNums(nums, 'ascending') // [3,11,21]
sortNums(nums, 'descending') // [21,11,3]
// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortArr = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortArr);
// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
const filterArr = sortArr.filter(num => num.monthDuration > 5)
console.log(filterArr);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const addProp = coursesAndDurationArray.map((value, index) => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
}))
console.log(addProp);
// =========================
// описати колоду карт (від 6 до туза без джокерів)
const deck = [
    {value: '6', cardSuit: 'Hearts', color: 'red'},
    {value: '7', cardSuit: 'Hearts', color: 'red'},
    {value: '8', cardSuit: 'Hearts', color: 'red'},
    {value: '9', cardSuit: 'Hearts', color: 'red'},
    {value: '10', cardSuit: 'Hearts', color: 'red'},
    {value: 'Jack', cardSuit: 'Hearts', color: 'red'},
    {value: 'Queen', cardSuit: 'Hearts', color: 'red'},
    {value: 'King', cardSuit: 'Hearts', color: 'red'},
    {value: 'Ace', cardSuit: 'Hearts', color: 'red'},
    {value: '6', cardSuit: 'Diamonds', color: 'red'},
    {value: '7', cardSuit: 'Diamonds', color: 'red'},
    {value: '8', cardSuit: 'Diamonds', color: 'red'},
    {value: '9', cardSuit: 'Diamonds', color: 'red'},
    {value: '10', cardSuit: 'Diamonds', color: 'red'},
    {value: 'Jack', cardSuit: 'Diamonds', color: 'red'},
    {value: 'Queen', cardSuit: 'Diamonds', color: 'red'},
    {value: 'King', cardSuit: 'Diamonds', color: 'red'},
    {value: 'Ace', cardSuit: 'Diamonds', color: 'red'},
    {value: '6', cardSuit: 'Clubs', color: 'black'},
    {value: '7', cardSuit: 'Clubs', color: 'black'},
    {value: '8', cardSuit: 'Clubs', color: 'black'},
    {value: '9', cardSuit: 'Clubs', color: 'black'},
    {value: '10', cardSuit: 'Clubs', color: 'black'},
    {value: 'Jack', cardSuit: 'Clubs', color: 'black'},
    {value: 'Queen', cardSuit: 'Clubs', color: 'black'},
    {value: 'King', cardSuit: 'Clubs', color: 'black'},
    {value: 'Ace', cardSuit: 'Clubs', color: 'black'},
    {value: '6', cardSuit: 'Spades', color: 'black'},
    {value: '7', cardSuit: 'Spades', color: 'black'},
    {value: '8', cardSuit: 'Spades', color: 'black'},
    {value: '9', cardSuit: 'Spades', color: 'black'},
    {value: '10', cardSuit: 'Spades', color: 'black'},
    {value: 'Jack', cardSuit: 'Spades', color: 'black'},
    {value: 'Queen', cardSuit: 'Spades', color: 'black'},
    {value: 'King', cardSuit: 'Spades', color: 'black'},
    {value: 'Ace', cardSuit: 'Spades', color: 'black'}
];
console.log(deck[length].value)

// - знайти піковий туз
let find = deck.find(value => value.value === 'Ace' && value.cardSuit === 'Spades')
console.log(find)
// - всі шістки
let filteredSix = deck.filter(value => value.value === '6')
console.log(filteredSix)
// - всі червоні карти
const redCards = deck.filter(value => value.color === 'red')
console.log(redCards)
// - всі буби
const filteredDiamonds = deck.filter(value => value.cardSuit === 'Diamonds')
console.log(filteredDiamonds)
// - всі трефи від 9 та більше
const filteredClubs = deck.filter(card => card.cardSuit === 'Clubs' && card.value !== '6' && card.value !== '7' && card.value != '8')
console.log(filteredClubs)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// ===================
//

//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//
console.log(deck.reduce((accumulator,decks)=>{
    if (decks.cardSuit==='Spades'){
        accumulator.spades.push(decks)
    }else if (decks.cardSuit==='Diamonds'){
        accumulator.diamonds.push(decks)
    }else if (decks.cardSuit==='Hearts') {
        accumulator.hearts.push(decks)
    }else if (decks.cardSuit==='Clubs') {
        accumulator.clubs.push(decks)
    }
    return accumulator
},{spades:[],diamonds:[],hearts:[],clubs:[]}
))
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course=>{
     return course.modules.includes('sass')
}))
console.log(coursesArray.filter(course=>{
    return course.modules.includes('docker')
}))