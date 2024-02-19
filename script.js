/*// Задание первое:
let n = prompt('Введите число:')
let fun = n**2
console.log(`"ответ: ", ${fun}`)*/

/*// Задание второе:
let num = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число:");
let sum = (num + num2)
console.log(sum / 2)*/

/*// Задача три:
let line = prompt('Введите длину квадрата: ')
let s = line*line
console.log(`Площадь квадрата со стороной ${line} = ${s}`)*/

/* Задача четыре:
// const km = prompt("Колл-во километров:")
// const fact = 0.621371
// const miles = km * fact
// console.log(`${km} км равны ${miles} миль`)*/

/* задача пять
let n1 = Number(prompt('enter number one'))
let n2 = Number(prompt('enter number two '))
let op = prompt('enter operation')

switch(op){
    case '+': alert((n1 + n2));
    break;
    case '-': alert((n1 - n2));
    break;
    case '*': alert((n1 * n2));
    break;
    case '/': alert((n1 / n2));
    break;
}*/

/*Задание шесть
let a = prompt('enter meaning one');
let b = prompt('enter meaning two');

let x = a * b;
alert('Значение x: ' + x);*/

/*Задание семь
let hours = +prompt("Введите часы (0 - 23): ")
let minutes = +prompt('введите минуты (0 - 59): ')

let reHours = 23 - hours
let reMinutes = 60 - minutes

console.log('Оствшиеся часы: ', reHours)
console.log('Оставшиеся минут:', reMinutes)*/
//======================//=========================//=============================//=========================//===========================//

/*Задача на ветвление
let age = prompt("Сколько вам лет?: ")

if (age < 18){
    alert('вы не совершеннолетний!')
}
if (age <= 65){
    alert('вы совершеннолетеный!')
}
else {
    alert('вы пожилой!');
}*/



/*let point = prompt("Enter your point: ")


if (point >= 60){
    alert('You done!')
}
else{alert('You not done. Try again')}*/



/*let age = prompt('Enter yors years :')

if (age < 18 ){
    alert('are you a minor')
}else if (age >= 18 && age <= 65){
    alert ('you are an adult')
}else{
    alert ('you are old man')
}*/


/*let number = +prompt('Enter number:')

if (number % 2 === 0 && number > 0){
    alert(`${number}`, 'even')
}else if (number % 2 === 0 && number < 0){
    alert (`${number}`, 'negative even')
}else if (number % 2 !== 0 && number > 0){
    alert(`${number}, 'the number is not even and positive'`)
}else if (number % 2 !== 0 && number < 0){
    alert(`${number}, the number is odd and negative`)
}*/



/*let order = prompt('choose drink (coffe, tee, juce)')

switch (order) {
    case "coffe":
        alert('you choose - coffe')
        break
    case "tee":
        alert("you choose - tea")
        break
    case "juce":
        alert('you choose - juce')
        break
}*/


/*let dis = prompt('Enter distance: ')

if (dis < 5){
    alert(' you can go step')
}else if (dis >= 5 && dis <= 20){
    alert('you can take a bike')
}else {
    alert ('you can take bus')
}*/

//===========================//====================================//=================================//==========================//========

// Задачи на тернальный оператор//
/*let num1 = prompt('Enter number one: ')
let num2 = prompt('Enter second number: ')

let resul = num1 > num2 ? `${num1} больше` : num2 > num1 ? `${num2}, больше`: 'Числа равны'
alert(resul)*/

/*let point = prompt("Enter youre points: ")
let rePoint = point >= 90 ? 'very cool!' : point >=70 && point < 90 ? 'cool' : 'normal'
alert(rePoint)*/

/*let number = prompt('Enter number: ')

let reNumber = number % 2 === 0 ? 'even' : 'no even'
alert(reNumber)*/

/*let lang = prompt('Enter preferred language(Inglish, French): ')
let reLang = lang === "Inglish" ? 'Hello' : 'Bonjour'
alert(reLang)*/

/*let month = prompt('Enter month: ')
let reMonth = month === 'Январь' || month === 'Февраль' || month === 'Декабрь' ? 'Зимний периуд' : month === 'Март' || month === 'Апрель' || month === 'Май' ? 'Весна': month === 'Июнь' || month === 'Июль' || month === 'Август' ? "Лето" : 'Осень';
alert(reMonth)*/


/*// Задания на обьекты
let auto = {
    brand: 'BMW',
    agestart: 2013,
    color: "black",
    carStart: function () {
        console.log('Двигатель запущен!')
    }

}
auto.carStart()
console.log(auto)

autoduble = { ...auto, color: 'green' }
console.log(autoduble.color)*/




/*let user = {
    name: 'Alex',
    age: 23,
    address: "Panel 5"
}
user.age = 32
console.log(user.age)

userDuble = {...user, address: 'Kirova 5'}
console.log(userDuble.address)

let fieldNames = Object.keys(user)
console.log(fieldNames)*/


/*let book = {
    author : 'Marcus',
    yearPubl : 1994,
    title: 'program as a lifestyle'
}

 console.log(book)*/

/*let animal = {
   soundAnimal: function(){
       console.log('Издать звук: РРРРРР')
   }
}
animal.soundAnimal()*/

/*let product = {
    name: 'Pen',
    price: 3,
    quantity: 2
}
 product.quantity += 5

 console.log(product.quantity)*/

/*let computer ={
   startComp: function(){
       console.log("Компьютер запущен!")
   }
}
computer.startComp()*/

/*let fruit = {
    clearFruit: function(){
        console.log('Почистить')
    }
}
fruit.clearFruit()*/

/*let city = {
    name: 'Puran',
    population: 15000,
    country: 'Fictional'
}

console.log(city)*/


/*let styles = ['Jazz', 'bluz']    //  Создаем масив с элементами
styles.push('rock-n-roll')  // Добовляем элемен в конец 
styles[Math.floor((styles.length - 1)/2)] = 'Classic' //Заменяем значение в середине на "классик"  код работает для массивов любой длины
console.log(styles.shift()) // Удаляем первый элемент масива и показываем его 
styles.unshift('Rap', 'Raggy') // Вставляем элементы в начала массива 
console.log(styles) // выводим */


//Нахождение уникальных чисел черех флаг
/*let arr = [1, 4, 5, 6, 4, 1]

function unicPoint(arr) {
    let retArr = []
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == retArr[j]{
                flag = false;
                break
            })
        }

        if (flag == true) {
            retArr.push(arr[i])
        }
    }

    return retArr
}

let arr2 = unicPoint(arr)
arr2.forEach((i) => { console.log(i) })





//Сортировка чисел пузырьковым методом
function bubbleSor(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[i] > arr[j + 1]) {
                let buff = arr[i]
                arr[j] = arr[j + 1]
                arr[j + 1] = buff
            }
        }
    }
    return arr
}

console.log(arr)


let arr3 = bubbleSor(arr)
console.log(arr3)


let objarr = [1,2]

objarr[2] = 3


function addItem(arr, x){
    console.log(arr.length)
    arr[arr.length] = x
    return arr
}

objarr = addItem(objarr,77)

console.log(objarr)*/

/*const piopleOne = {
    name: 'Alex',
    age: 32
}

function updatePiopleTwo(piople){
    const newPiople = Object.assign({},piople)
    newPiople.name = 'Bob'
    newPiople.age = 23
    return newPiople
}

const updatePiopleOne = updatePiopleTwo(piopleOne)

console.log(piopleOne)
console.log(updatePiopleOne)*/



// let number = 5 

// console.log(number)

// let name = "Alex"
// let age = 32 
// console.log(name + age)

// let number = prompt("Введите число:")

// if (number % 2 === 0) [
//     console.log("Число четное")
// ]; else {
//     console.log("Число нечетное");
// }


// let numArr = [2,3,6,4,1]
// console.log(numArr.length)

/*let shopList = [apple, tomat, potates, onion, carrot]

let apple = {
    name: "apple",
    quantity: 3,
    status: "purchased",
}

let tomat = {
    name: 'tomat',
    quantity: 5,
    status: 'not purchased',
}

let potates = {
    name: 'potates',
    quantity: 8,
    status: "purchased",
}

let onion = {
    name: 'Onion',
    quantity: 1,
    status: "not purchased",

}

let carrot = {
    name: 'carrot',
    quantity: 2,
    status: 'purchased'

}*/

/*for (let key of arr) // Для масива
for (let key in obj) // Для обьектва*/


// Модуль 1 // Неделя 1 
//Задание №1

/*let name = prompt( "Введите ваше имя" );
console.log( `Привет, ${name}!`);*/


//Задание 2

/*let year = prompt( "Введите год рождения" );
const nowYear = 2024
let age = nowYear - year;
console.log(age) */

//Задание 3

/*let per = +prompt( 'Введите длину стороны квардрата')
let res = (per * 4) 
alert(res)*/

//Задание 4

/*let rad = prompt('Введите радиус окружности:');
let p = 3.14
let s = (p * rad * 2)
alert(`Длина диаметра равна ${s}` )*/


//задание 5


/*let dis = prompt( 'Введите расстояние между точками (a ,b):' );
let time = prompt('Введите время за которое хотите добраться:');
let speed = dis / time;
alert (`Скорость движения равна ${speed}`)*/


//Задание 6

/*const eurCours = 1.08
let dollar = prompt( 'Сколько долларов хотите пометь' );
let exChang = dollar * eurCours
alert(`Конвертация в евро будет  ${exChang}`)*/


// Задание 7

/*let vol = prompt('Сколько ГБ на флешке: ')
let sumDoc = vol * 1024 / 820
alert(`Помещается файлов ${sumDoc}`)*/

//Задание 8 

/*let cache = prompt('Сколько денег в кошельке ')
let  price = prompt (' Сколько стоит товар ')
let sumShok = Math.floor(cache / price)
let  remShok = cache - sumShok * price
alert(`Ты купил ${sumShok} штук и осталось ${remShok} рублей `)*/


//Задача 9
/*let num = prompt('Введите трехзначное число число')

function reverseNumber(num) {
    let reverseString = String(num).split("").reverse().join("");
    return parseInt(reverseString) * Math.sign(num);
}
alert(reverseNumber(num))*/


//Задача 10 

 /*let num = prompt('введите число')
 if (num  % 2 == 0 ){
    alert (`${num} - это четное число`)
} else (alert(`${num} - это нечетное число`))*/
///----//----------------//-----------------//----------------------------//-------------------------    
//Модуль 1 // Неделя 2 

//Задание 1 ??

/*let age = prompt('Введите свой возраст')
if (age <= 2){
    console.log( 'Детский возраст')
}else if (12  > age  && age < 18) {
    console.log('Юноша')
}else if (18 >= age && age <= 60) {
    console.log('Взрослый')
}else if (age > 60 ){
    console.log( "Пенсионер")



//Задание 2 

/*let num = prompt('Введите число (0 - 9)')

switch(num){
    case  "0": console.log  (')'); break;
    case  '1': console.log ('!');break;
    case "2" : console.log ('@');break;
    case "3" : console.log ("#");break;
    case "4" : console.log ("$");break;
    case "5" : console.log ("%");break;
    case "6" : console.log ("^");break;
    case "7" : console.log ("$");break;
    case "8" : console.log ("*");break;
    case "9" : console.log ("(");break;
}*/


// Задание 3

/*let num = prompt('Введите 3х значное число')
if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]){
    console.log('Есть одинаковое число')
}else{
    console.log('Нет одинакового числа')
}*/

    
//Задание 4 ??

// let age = prompt('Введите год')

// if (age % 400 === 0 || (age % 4 === 0 && age % 100 !== 0)){
//     console.log('Год высокосный')
// }else console.log('не высокосный')

//Задание 5 

/*let num = prompt('Введите 5ти значное число')
console.log(num)
console.log(num.split('').reverse().join(''))
if (num == num.split('').reverse().join('')) {
    console.log('palindrom')
} else {
    console.log('ne palindrom')
}*/

 

 












// recusNum += num % 10;
// num = Math.floor(num/10);
// recusNum+= num * 10 + (num % 10);
// num = Math.floor(num/10)
// recusNum = recusNum * 10 + num;
// alert(`Число ${recusNum}`)












// function sumTo(n){
//     let result = 0;

//     for (let i = 0; i <= n; i++){
//         result += i;
//     }
//     return result;
// }

// console.log(sumTo(100))


// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// console.log(sumTo(100))


// function sumTo(n){

// }


// function factorial(n){
//     if (n === 0){
//         return  1;
//     }else {
//         return  n * factorial(n-1);
//     }

// }
// console.log(factorial(5))



// function fib(n){
//     if (n == 1 || n == 2){
//         return 1
//     }else{ return result = fib( n - 1 ) + fib( n- 2);}

// }
// console.log(fib(2));



// решение фибоначи с кешированием
// function cached(){
//     const cache = {}
//     return function fib(n){
//         if (cache[n]) return cache[n]
//         if (n < 1){
//             return n
//         } else {
//             let res = fib(n - 1) + fib(n - 2)
//             cache[n] = res
//             return res
//         }
//     }
// }
// const cachedfib = cached()
// console.log(cachedfib(77))
// console.log(cachedfib(3))


//  //Модуль 2 
//  // Задание 1 
//  let auto =  {
//     marka: 'Kia',
//     model: 'sidan',
//     year: 2005,
//     midlSped: 80

//  }

// function car (auto){
//     return auto
// }

// function clock (distance, speed){
//     const  time = distance / speed;
//     const breaks = Math.round (distance/(4 * speed)) ;
//     const totalTime = time + breaks;
//     return totalTime
// }

// console.log(clock(1000, 80))

// console.log(car(auto))




// const purchaselist = [
//     { name: "Хлеб", count: 1, buyed: false },
//     { name: "Молоко", count: 1, buyed: false },
//     { name: "Яйцо", count: 10, buyed: false },
//     { name: "Сыр", count: 1, buyed: true },
//     { name: "Колбоса", count: 1, buyed: true },
// ]


// function printPurchase() {
//     const tempList = [...purchaselist]
//     tempList.sort((a, b) => a.buyed < b.buyed)
//     const html = ''
//     tempList.forEach(al =>{
//         html+= `<li ${el.buyed?} 
//     })
//     console.log(tempList)
// }


// function addPurchase(nmae, count) {
//     const elem = purchaselist.find(el=>el.name == name) //  Поиск по имени) 
//     if (elem){
//         elem.count += count
//     } else {
//         purchaselist.push({nmae , count ,buyed : false})
//     }
    
// }

// function setPurchase(name) {    // поиск по имени и если куплен поставить "Куплено"
//     const elem = purchaselist.find(el=>el.name == name) 
//     if (elem) elem.buyed = true
// }


// printPurchase()
// addPurchase("Овощи", 1)
// printPurchase()
// setPurchase("Овощи")
// printPurchase()