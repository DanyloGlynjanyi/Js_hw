// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h1>Some Text Through "for"</h1>`)

for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text</div>`)
    document.write(`<hr>`)
}
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h1>Some Text Through "for" With Index</h1>`)

for (let i = 0; i < 10; i++) {
    document.write(`<div>Text Some №${i + 1}</div>`)
    document.write(`<hr>`)
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     #OeT7t3uUMFi
document.write(`<h1>Some Text Through "While" </h1>`)

let x = 0
while (x < 20) {
    document.write(`<div>some Text</div>`)
    document.write(`<hr>`)

    x++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h1>Some Text Through "While" With Index </h1>`)
let i = 0
while (i < 20) {
    document.write(`<div>some Text №${i+1}</div>`)
    document.write(`<hr>`)

    i++
}
//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<h1>Displaying a List From an Array by Template</h1>`)

for (const listOfItem of listOfItems) {
    document.write(`<ul>`)
    document.write(`<li>${listOfItem}</li>`)
    document.write(`</ul>`)
}

//
// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVWynnELxasIUDFnV2LeqCcX7iP5BItdlgw&s'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write(`<h1>Displaying a Product List From an Array by Template</h1>`)

for (const product of products) {
    document.write(`<div class="product-card" >`)
    document.write(`<h3 class="product-title">TITLE: ${product.title}. Price - ${product.price}</h3>`)
    document.write(`<img src="${product.image}" alt="product" class="product-image ">`)
    document.write(`</div>`)

}
// --------------------
// #4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
//     - користувачів зі статусом true
document.write(`<h1>User Status - True</h1>`)
for (const user of users) {
    if (user.status === true) {
        document.write(`<div>`)
        document.write(`<h2>Name: ${user.name}  age:${user.age}  Status: ${user.status} </h2>`)
        document.write(`</div>`)
        document.write(`<hr>`)
    }
}
// - користувачів зі статусом false
document.write(`<h1>User Status - False</h1>`)
for (const user of users) {
    if (user.status !== true) {
        document.write(`<div>`)
        document.write(`<h2>Name: ${user.name}  age:${user.age}  Status: ${user.status} </h2>`)
        document.write(`</div>`)
        document.write(`<hr>`)
    }
}
// - користувачів які старші за 30 років
document.write(`<h1>User Age : 30+</h1>`)
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div>`)
        document.write(`<h2>Name: ${user.name}  age:${user.age}  Status: ${user.status} </h2>`)
        document.write(`</div>`)
        document.write(`<hr>`)
    }
}

