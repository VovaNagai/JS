
/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 *
 *
 * */

function add(x) {
    return function (num2) {
      return function (num3) {
          return x+num2+num3;
      };
    };
}
console.group('TASK 1: ');
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30
console.groupEnd();
/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
    return {method: function () {
        console.log(++this.count);
    }, count: 0, reset: function () {
        this.count = 0;
    }};
}

let test = patternModule(); // 0
console.group('TASK 2: ');
test.method(); //1
test.method(); //2
test.method(); //3
console.warn('Счетчик обнулился');
test.reset();
test.method(); //1
test.method(); //2
test.method(); //3
console.groupEnd();

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.

 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
    var cntName = '_counter'+name;
    if('function' != typeof fn){
        obj[cntName] += num;
        return;
    }
    obj[cntName] = num;
    obj[name] = function (a) {
        if(0 == this[cntName])
            console.error('ERROR ! add more methods');
        else{
            this[cntName]--;
            fn(a);
        }
    };
}

methodCounter(jun, 'logger', 2, function(args) {
    let sum = args.reduce(function(a, b) {
        return a + b
    }, 0);
    console.log(sum);
});

//console.log(jun);
console.group('TASK: @SUPER and @SUPER - PUPER:')
jun.logger([1, 2, 3, 4]); // 2, 10
jun.logger([5, 5, 5, 5]); // 1, 20
methodCounter(jun, 'logger', 1);
jun.logger([5, 517]); // ERROR ! add more methods
jun.logger([1, 2, 3, 4]); // 2, 10
jun.logger([5, 5, 5, 5]); // 1, 20
console.groupEnd();


