/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    var out = [];
    var c = (a > b) ? b : a;
    var d = (a < b) ? b : a;
    var e = 0;
    for(var f=c+1;f<d;)
        out[e++] = f++;
    return out;
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let a = [1, null, undefined, 'str', {}, [], function() {}];
function makeTypesArray(a){
    var out = [];
    for(var c=0; c<a.length; c++)
        out[c] = typeof a[c];
    return out;
}
console.log(makeTypesArray(a));