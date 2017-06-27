const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
console.group('Task1.1: ');
let parsString = (arg) => {
  let bits = {
      '%%HOMEDIR%%': './JavaScript-Basic',
      '%%APP_DIR%%': 'fixtures/src',
      '%%APPNAME%%': 'app.js'
  };

  for (var key in bits) {
    arg = arg.replace(new RegExp(key,'g'), bits[key]);
  }
  return arg;
};

console.log(parsString(someWebpackModule));
console.groupEnd();

console.group('Task1.2: ');
const someWebpackModule2 = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;
function parsString2(string, word, wordRep) {
  string = string.replace(word, wordRep);
  return string;
}

parsString2(someWebpackModule2, 'output:', 'nAmE:');
console.groupEnd();

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */
// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human
class Human{
  constructor (name, age, gender, length, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.length = length;
    this.weight = weight;
  }
}

class Worker extends Human {
  constructor (name, age, gender, length, weight, work_place, salary) {
    super(name, age, gender, length, weight);
    this.work_place = arguments[5];
    this.salary = arguments[6];
    this.work = function () {
      return true;
    };
    this.constructor = Worker;
  }
}

var worker_person = new Worker('Victor', 24, 'man', 180, 70,'Sloboda Studio', '1000$');
console.log(worker_person);
console.groupEnd();
/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 1000;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log('zzzz');
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    timer = timer * (10-i+1);
    serverResponse(i);
  }
};

startTimer();

// // @ SUPER
//
// /*
//  * Вы должны создать имитацию медленной базы данных.
//  * TASK - 1 Сделайте Класс Database с методами
//  *
//  *  query
//  *
//  *  При запуске метода query запустите внутренний таймаут, который
//     будет длиться 5 секунд.
//  *  При поступлении еще 1 запроса(если вызвать метод еще раз),
//  *  таймаут должен стартануть сначала
//  *  и ответ должен прийти снова через 5 секунд
//  *
//  * */
//
class DataBase {
  constructor(query) {
    this.query = query;
  }
}
//
const dataBase = new DataBase();
dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

dataBase.query();
// 5
// 4
dataBase.query();
// 5
// 4
// 3
// 2
dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
