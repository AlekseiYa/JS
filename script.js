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





