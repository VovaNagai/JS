// let number = 0;
// number++;
// console.log(++number);

//------------------------------------------- Тернарный оперратор
// function Oper(a, b) {
//     // return a > b ? a : b
//     if(a < b) {
//         return b;
//     }
//     if(a > b) {
//         return a;
//     }
// }
// console.log(Oper(10, 5));

// --------------------------------------------------------------------------------------
// var arr = {
//     name: 'qwe',
//     qwer: [1,2,310,20,10]
// };
// var arr2 = [1,2,75,310,20,75];
// function newFunc(arr, arr2) {
//     var out = [];
//     if (Array.isArray(arr, arr2)){
//         for(var c=0; c<arr.length; c++)
//         out[c] = typeof arr[c];
//         return out;
//     } if (arr2[c] > arr){
//         return arr[c];
//     } else {
//         for (let key in obj) {
//             if (Array.isArray()) {
//
//             }
//         }
//     }
// }
// newFunc(arr2, 200);
// newFunc(arr, 55);  //Не получилось выполнить на уроке

// var obj = {
//     name: 'qwe',
//     qwer: [1,2,310,20,10]
// };
//
// var arr = [1,2,75,310,20,75];
//
// const task1 = function (data, number) {
//     if (Array.isArray(data)) {
//         for (let i=0; i<data.length; i++) {
//             let elem = data[i];
//             if (elem > number) {
//                 console.log(elem);
//                 return;
//             }
//         }
//     } else
//         //всегда объекты
//     for(let key in data) {                     //?
//         let elemInsideObject = obj[key];
//         if (Array.isArray(data)) {
//         if (elem > number) {
//             console.log(elem);
//             return;
//         }
//     }
// };
//
// console.log(task1(obj, 200));
// console.log(task1(arr, 55)); // Дописать после else и упростить FOR обернуть в ф-цию

//----------------------------------------------------------------------------------------------------Рекурсия
// function sum(number) {
//     if (number < 1) {
//         return number;
//     }
//     return sum((number - 1)) + number;
//     //итерация1: 4+5
// }
//
// console.log(sum(5));
// 5+4+3+2+1

// Массивы метод SLICE_______________________________________________________________________________


const js = 'JavaScript COOL language';

function reverseStrimg(word) {
    var string =  word.split(' ');
    // for (let i=0; i<word.length; i++) {
    //     string[i].reverse().join('');
    // }
    return string;
}

console.log((reverseStrimg.reverse().join(''))(js));

