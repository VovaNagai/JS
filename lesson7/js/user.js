// var arr = [3,2,1];
//
// alert(arr.sort()); // Сортирует массив по первому символу
//
// var arr = [1,2,3,4,5,6,7,8,9,10];
// function name(arr) {
//
//     var sum = 0;
//     arr.forEach( function (elem) {
//         // console.log(elem);
//         sum += elem;
//     });
//     return sum;
//     }
// console.log(name(arr));
//
// var arr = [1,2,3,4,5,6,7,8,9,10];
// function arrSum() {
//
// return arr.reduce(function (prevValue, value, index, arr) {
//     prevValue += value;
//     return prevValue;
// },0);
// }
// console.log(arrSum(arr));

var arr = [1,2,3,4,5,6,7,8,9,10];

var positiveArr = arr.reduce(function(prevValue, value) {
    return (prevValue) ? prevValue += '-' + value : value;
});

alert( positiveArr );
//
// function helloName(name) {
//     return function () {
//         alert('privet ' + name);
//     };
// }
//
// var user = helloName('Vova')();
//
// function add(num1) {
//     return function (num2) {
//         return num1 + num2;
//     };
// }
//
// var number15 = add(5)(10);
// console.log(number15);
//
// function counter() {
//     return function add() {
//         return add += 1;
//     }
// }

// const plusOne = counter();
//
// console.log(plusOne.add());
// // 1
// plusOne.add();
// // 2
// plusOne.add();
// // 3


