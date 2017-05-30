/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

//Метод счетчика
function moveZeroToEnd(arr) {
    var newArray = [],
        zeroes = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroes++;
        } else {
            newArray.push(arr[i]);
        }
    }
    for (var i = 0; i < zeroes; i++) {
        newArray.push(0);
    }
    return newArray;
}

console.log('1.1: ', moveZeroToEnd(arr1));

//Метод concat + map

let arr2 = [ 0, 1, null, 2, false, 1, 0 ];

function moveZeroToEnd_2(arr) {
    var newArray = [],
        zeroes = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroes++;
        } else {
            newArray.push(arr[i]);
        }
    }
    newArray = newArray.concat(Array.from({length:zeroes}).map(function(v){return 0;}));
    return newArray;
}

console.log('1.2: ', moveZeroToEnd_2(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

//Array.prototype.max = function(){return Math.max.apply(Math,this);};
Array.prototype.min = function(){return Math.min.apply(Math,this);}

function minimalNumber(arr) {
    var arr3x = Array.from(arr).filter( //filter принимает вкачестве параметра ф-цию которая является callback
        function(v){
            if(v !== arr.min())
                return v;
        }
    );
    return arr.min() + arr3x.min();
}

console.log('2: ', minimalNumber([10,20,30,1,31,11,10]));

/*
3. Напишите функцию которая меняет местами имя и фамилию
nameShuffler('john McClane'); => "McClane john"
nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
nameShuffler('James Bond'); => "Bond James"
*/

function nameShuffler(arg) {
    var pieces = arg.split(' ');
    pieces.reverse();
    return pieces.join(' ');
}
console.log('3.1: ',nameShuffler('john McClane'));
console.log('3.2: ',nameShuffler('James Bond'));

/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arg) {
    var newarr = [];
    for (var i = 0; i < arg.length; i++) {
      var c = arg[i].slice(0,1).toUpperCase() + arg[i].slice(1).toLowerCase();
        newarr.push(c);
    }
    return newarr;
}

console.log('4: ',capMe(['jo', 'nelson', 'jurie']));

