'use strict';
//вывести имя друга и какие он любит фрукты
// использовать так же уже существующий метод ShowFruits
//
const user = {
    name: 'Jack',
    fruits: 'mango, kivi, banan',
    friends: [
        {
            name: 'Egor',
            fruits: 'lime'
        },
        {
            name: 'Roma',
            fruits: 'Orange'
        },
        {
            name: 'Lera',
            fruits: 'Banan'
        }
    ],
    showFruits: function () {
        //console.log(this.fruits);
        return this.fruits;
    },
    showFriendsFruits: function () {
        let ffr = this.friends.map(elem => elem.fruits);
        //console.log(ffr.join(', '));
        return ffr.join(', ');
    }
};

console.log('Classwork: ' + user.showFruits());
console.log('Classwork: ' + user.showFriendsFruits());
// // Legolas Task !
//
// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requires: ['Node.js', 'JavaScript', 'OOP'],
    goodDev: goodDev
};
let developer2 = {
    experience: [
        { technology: 'java' },
        { technology: 'c++' },
        { technology: 'aws' },
        { technology: 'docker' }
    ],
    requires: ['java', 'json', 'c++', 'JavaScript'],
    goodDev: goodDev
};

function goodDev() {
    this.requires.forEach(req => {
        let expz = ('experience' in this) ? this.experience.map(exp => exp.technology) : (('skills' in this) ? this.skills : []);
        let got = (expz.some(exp => exp.toLowerCase() == req.toLowerCase())) ? 'success' : 'fail';
        console.log(`required: ${req} ... ${got}`);
    });
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
    console.log(`developer ${index + 1}`);
    dev.goodDev();
});
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
    database: [
        { age: 100, name: 'b' },
        { age: 15, name: 'c' },
        { age: 25, name: 'a' }
    ],
    myFilter(term){
        return this.database.filter(n => n).sort((a, b) => (isNaN(a[term])) ? ((a[term] > b[term]) ? 1 : -1) : ((parseInt(a[term]) > parseInt(b[term])) ? 1 : -1));
    }
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.warn(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 *
 */
/*
 3.1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let moveZeroToEnd = (arr) => arr.filter(n => (0 === n) ? false : true).concat(arr.filter(n => (0 === n) ? true : false));
console.log('3.1: ', moveZeroToEnd(arr1));
/*
 3.2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

let arr = [10,20,30,1,31,11,10];
/*
Array.prototype.min = function(){return Math.min.apply(Math,this);}

let minimalNumber = (arr) => {
    var arr3x = Array.from(arr).filter( //filter принимает вкачестве параметра ф-цию которая является callback
         (v) => {
            if(v !== arr.min())
                return v;
        }
    );
    return arr.min() + arr3x.min();
};*/
let minimalNumber = (a) => (Math.min.apply(Math,a))+(Math.min.apply(Math,a.filter(n => {if(Math.min.apply(Math,a) != n) return n;})));

console.log('2.2: ', minimalNumber([10,20,30,1,31,11,10]));


/*
 3.3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

let nameShuffler = (arg) => {
    let pieces = arg.split(' ');
    pieces.reverse();
    return pieces.join(' ');
};
console.log('3.3.1: ',nameShuffler('john McClane'));
console.log('3.3.2: ',nameShuffler('James Bond'));

/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

let capMe = (arg) => arg.map(name => name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase());

console.log('3.4: ' + capMe(['jo', 'nelson', 'jurie']));

////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
    var key = name + ':' + fn.length;
    object[key] = fn;
    if('function' != typeof object[name]){
        object[name] = function(){
            var call_key = name + ':' + arguments.length;
            if(call_key in object)
                object[call_key]();
            else
                console.warn(`No method ${name} exists which accepts ${arguments.length} arguments!`);
        };
    }
}

function newMethodFun() {
    //
}
addMethod(junior, 'ok', function() {
    console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
    console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
    console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
    console.log('three arguments');
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2, 3, 4); // No method...!
