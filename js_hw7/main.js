// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// let users = []
// users.push(user1 = (new User(1, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user2 = (new User(2, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user3 = (new User(3, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user4 = (new User(4, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user5 = (new User(5, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user6 = (new User(6, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user7 = (new User(7, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user8 = (new User(8, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user9 = (new User(9, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// users.push(user10 = (new User(10, 'petya', 'petrov', 'qwer123@aaa.com', '+35447754488')))
// console.log(users)
let users = [new User(1, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(2, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(3, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(4, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(544, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(63, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(79, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(80, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(93, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488'), new User(100, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488')]
console.log(users)
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const userFiltered = users.filter(value => value.id % 2 == 0)
console.log(userFiltered)
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const userSorted = users.sort((a, b) => a.id - b.id)
console.log(userSorted)
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

const clients = [new Client(1, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['tea', 'milk', 'apple']), new Client(2, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['meat']), new Client(3, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['juice', 'milk', 'apple', 'cucumber']), new Client(4, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['lemon', 'milk', 'apple']), new Client(544, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['kiwi', 'milk', 'apple']), new Client(63, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['water', 'milk',]), new Client(79, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['ice cream', 'milk']), new Client(80, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['milk', 'apple']), new Client(93, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['cheese', 'milk', 'apple']), new Client(100, 'vasya', 'petrov', 'qwer123@aaa.com', '+35447754488', ['potato', 'milk', 'apple'])]
console.log(clients)
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientsSorted = clients.sort((a, b) => a.order.length - b.order.length)
console.log(clientsSorted)
//
// #vV9a6584I5

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

function Car(model, producer, year, maxspeed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxspeed = maxspeed
    this.engine = engine
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    };
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxspeed = this.maxspeed + newSpeed
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        if (newValue > 0) this.year = newValue
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let bmw = new Car('M5', 'BMW', 2015, 249, 4.9)
bmw.drive()
bmw.info()
bmw.increaseMaxSpeed(30)
bmw.changeYear(2030)
bmw.addDriver({Name: 'Max', Expirience: '5 years'})
console.log(bmw)

//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Cars {
    constructor(model, producer, year, maxspeed, engine) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxspeed = maxspeed
        this.engine = engine
    }

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        return `Model: ${this.model}
Producer: ${this.producer}
Year: ${this.year}
Max Speed: ${this.maxspeed} km/h
Engine: ${this.engine}L`
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxspeed = this.maxspeed + newSpeed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear = function (newValue) {
        if (newValue > 0) this.year = newValue
    }

}

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Driver extends Cars {
    constructor(model, producer, year, maxspeed, engine,) {
        super(model, producer, year, maxspeed, engine);
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let lexus = new Driver('LX600', 'Lexus', 2015, 210, 3.5)

lexus.drive()
lexus.info()
lexus.increaseMaxSpeed(50)
lexus.changeYear(2020)
lexus.addDriver({name: 'Jonh', Expirience: '9 years'})
console.log(lexus)
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const cinderellas = [
    new Cinderella("Anna", 19, 35),
    new Cinderella("Maria", 21, 36),
    new Cinderella("Elena", 23, 37),
    new Cinderella("Sofia", 18, 34),
    new Cinderella("Victoria", 22, 38),
    new Cinderella("Diana", 20, 35),
    new Cinderella("Olga", 24, 39),
    new Cinderella("Katerina", 25, 40),
    new Cinderella("Tatiana", 26, 41),
    new Cinderella("Natalia", 27, 36)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
const prince = new Prince('Adolf', 28, 34)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        prince.lady = cinderella
    }

}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const shoeFinded = cinderellas.find(value => value.footSize === prince.shoeSize)
console.log(prince.lady === shoeFinded)
console.log(prince)
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach,

// підглядав  вирішення в Cергія
// шукав помилки за допомогою chat gpt
// ставив завдання AI пояснити логіку виконання, без коду
// виконувавав 70% через розв'язок Сергія, та gpt- 30% Сам
Array.prototype.myForEach = function (callback) {
    const array = this

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}
let numbers = [11, 22, 33]
const iter = numbers.myForEach((x) => console.log((x)));
// filter
//шукав помилки за допомогою чату gpt та логіку принципи роботи filter після коли були помилки підглянув у виконання
Array.prototype.myFilter = function (callback) {
    const newArray = []
    for (const value of this) {
        if (callback(value)) {
            newArray.push(value)
        }
    }
    return newArray
}
let filt = cinderellas.myFilter((item) => item.age === 20)
console.log(filt)
// //map
// Array.prototype.myMap = function (callback) {
//     const arr = []
//     for (const Element of this) {
//         arr.push(callback(Element))
//     }
//     return arr
// }
// const arr = cinderellas.myMap((item) => item.age.toString());
// console.log(arr)