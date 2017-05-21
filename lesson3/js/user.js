//Модальные окна три вида
// alert('Hello');
// var x = alert('Hello'); //ничего не возращает

// var question = prompt('Как вас зовут', 'Введите имя');
// console.log(question);

// var approve = confirm('Быть или не быть?');
// console.log(approve);

//-------------------------------------------------------------------------------------
// Сумма первых двух введенных чисел

// var number1 = prompt('Введите число один');
// var number2 = prompt('Введите число два');
// var x = (+`${number1}` + +`${number2}`);
//
// if (x > 20) {
//     alert('Good');
// }
// else {
//     alert('Error');
// }

//-------------------------------------------------------------------------------------
//Два уровня вложенностей
// if (3 > 4) {
//
// } else {
//     if (typeof 'sdsd' == 'string') {
//         if (20 > 10) {
//             alert('Error');
//         }
//     }
// }

//-------------------------------------------------------------------------------------
// var number1 = prompt('Введите число один');
// var number2 = prompt('Введите число два');
// var x = (+`${number1}` + +`${number2}`);
//
// if (!isNaN(x)) {  // x == x
//     alert(x);
// } else {
//     alert('Error');
// }
//-------------------------------------------------------------------------------------
// var number1 = prompt('Введите число');
//
// if (number1 >= 100 && number1 <=150) {
//     alert('Едем на Бали');
// } else if (number1 >= 160) {
//     alert('Добро пожаловать в Сингапур');
// } else if (0 > number1 || 100 < number1) {
//     alert('hello JavaScript');
// } else if (number1 < 0) {
//     alert('Мы едем в тайланд');
// } else if (number1 == 0) {
//     alert('Остаемся в Харькове');
// }

//-------------------------------------------------------------------------------------ФУНКЦИИ
// function helloUserName () {
//     console.log('hello world')
// }
// helloUserName();
// helloUserName();
// helloUserName();
// helloUserName();
//
// function hello (name) {
//     console.log(`hello ${name}`);
//
// }
// hello ('Oleg !');
// //-------------------------------------------------------------------------------------
// function add(number1, number2) {
//     console.log(number1 + number2)
// }
// add(10, 30);
// //-------------------------------------------------------------------------------------Облать видимости
// var user = 'Egor';
// function qwerty() {
//     console.log(user)
// }
// qwerty();
// //-------------------------------------------------------------------------------------Как еще можно объявить функцию
// var array = function () {
//   return ['10', 10, {name:'Vova'}];
// };
// console.log(array()); // без () выведит полностью function ['10', 10, {name:'da'}];


// var array = function () {
//     return name = 'Vova';
// };
// console.log(array);


// function make(obj) {
//     return obj.name.toUpperCase();
// }
// console.log(make({ name: 'oleg' }));
