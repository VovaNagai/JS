'use strict';
/*
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {
    this.host = undefined;
    this.port = undefined;
    this.backfire = undefined;
}

Http.prototype.createServer = function (backfire) {
    this.backfire = backfire;
    return this;
};

Http.prototype.listen = function (port, host) {
    this.host = host;
    this.port = port;
    console.log(`Server running on https://${this.host}:${this.port}`);  // А сертефикат где брать на https? :)
    this.backfire();
    return this;
};


const server = new Http().createServer(function(ctx, next) {
   // console.log(ctx);
}).listen(3000, 'localhost');

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human
function Human(name, age, gender, length, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.length = length;
    this.weight = weight;

}


function Worker(name, age, gender, length, weight, work_place, salary) {
    //let xz = Array.from(arguments).slice(0,5);
    //this.prototype = Human;
    //xz.unshift(this);
    //this.prototype.apply(xz);
    //Human.call(...xz);
    // Human.call(this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    //
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.length = length;
    this.weight = weight;
    //
    this.work_place = arguments[5];
    this.salary = arguments[6];
    this.work = function () {
        return true;
    };
    this.constructor = Worker;
}
Worker.prototype = new Human();

//var person = new Human('Victor', 24, 'man', 180, 70);

var worker_person = new Worker('Victor', 24, 'man', 180, 70,'Sloboda Studio', '1000$');
console.log(worker_person);


// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 */

function Outer() {
    console.log(arguments);
     return function() {
        var sum = 0;
         for(var sum in arguments) {
             sum += c;
         }
         return sum;
     }(arguments(sum));
}



