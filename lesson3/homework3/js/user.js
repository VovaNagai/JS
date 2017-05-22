/*
 Напишите функцию которая будет возвращать объект
 с свойством name, а значением будет первый аргумент функции
 */


var functionReturn = function () {
    return {name:'Vova'};
};
console.log(functionReturn().name);

/*
 Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
 будет свойство name
 и возвращать новый объект изменяя свойство name
 в большой регистр
 */

function array(obj) {
    return {name:obj.name.toUpperCase()}
}
console.log(array({ name: 'vova' }));

/*
 1. Напишите функцию которая принимает в
 качестве аргумента массив
 и элемент массива и добавляет элемент в конец массива
 */

let arr = [];
arr[0] = 'Zero';
arr[1] = 'First';
arr[2] = 'Second';

function addToArray(arr) {
    arr[arr.length] = 'Third';
    return arr;
}
console.log(addToArray(arr));

/*
 2. Напишите функцию которая получает 3 параметра
 и возвращает объект типа: */
var simpleObjectGenerator = function (argument1, argument2, argument3) {
    return {'argument1':argument1, 'argument2':argument2, 'argument3':argument3};
};

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));


var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));


// /*
//  3.  Напишите функцию которая принимает 3 аргумента,
//  третий аргумент - это объект.
//
//  Функция создает новый объект и добавляет ключ
//  это первый аргумент, а значение - второй аргумент
//  Проверяет если есть свойство name в переданном объекте,
//  тогда добавляет данное свойство и возвращает новый объект*/

 var myName = { name: 'Oleg' };

 function addNameToUser(newKey, newValue, userName) {
    var newObj = {};
     newObj[newKey] = newValue;
     if (undefined != userName.name){
         newObj['name'] = userName.name;
     }
     return newObj;
 }

console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

// /////////////////////////////////
//
// /*
//  -> @@ SUPER
//  Напишите функцию, которая будет возвращать 'Fizz'
//  если передаваемый параметр кратен 3,
//  'Buzz', если передаваемый параметр кратен 5,
//  'FizzBuzz' - если параметер кратен 3 и 5
//  Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
//  */
//
function fizzBuzz(num) {
    if (0 == num % 5){
        if (0 == num % 3){
            return 'FizzBuzz';
        } else {
            return 'Buzz';
        }
    } else if (0 == num % 3){
        return 'Fizz';
    } else {
        return num;
    }
}

console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(2)); // 2
console.log(fizzBuzz(3)); // 'Fizz'
console.log(fizzBuzz(5)); // 'Buzz'
// ...
console.log(fizzBuzz(15)); // 'FizzBuzz'
console.log(fizzBuzz(21)); // 'Fizz'

// /* -> @@ SUPER 2
//  Напишите функцию, которая будет принимать 4 аргумента,
//  последний всегда функция.
//  Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
//
//  */

var fxCallback = function (arrItem1,arrItem2,arrItem3,callback) {
  callback([arrItem1,arrItem2,arrItem3]);
};

fxCallback(3,3,3,function(ax){
    var o = 3;
    for(var c=0;c<ax.length;c++){
        if(o) {
            o *= ax[c];
        } else {
            o = ax[c];
        }
    }
    console.log(o);
});
//
