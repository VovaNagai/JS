// ---------------------------------------------Вариант 1

// let create = tag => document.createElement(tag);
//
// let ol = create('ol');
// let li = create('li');
// let h1 = create('h1');
// h1.textContent = 'Тест по програмированию';
// let h2 = create('h2');
//
// h2.textContent = 'Вопрос1';
//
// li.appendChild(h2);
//
// let input = create('input');
// let label = create('label');
//
// input.type = 'checkbox';
// label.textContent = 'Вариант1';
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант2';
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант3';
//
// label.appendChild(input);
// li.appendChild(label);
//
// ol.appendChild(li);
//
// li = create('li');
//
// h2 = create('h2');
//
// h2.textContent = 'Вопрос2';
//
// li.appendChild(h2);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант1';
//
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант2';
//
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант3';
//
// label.appendChild(input);
// li.appendChild(label);
//
// ol.appendChild(li);
//
// li = create('li');
//
// h2 = create('h2');
//
// h2.textContent = 'Вопрос3';
//
// li.appendChild(h2);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант1';
//
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант2';
//
// label.appendChild(input);
// li.appendChild(label);
//
// input = create('input');
// input.type = 'checkbox';
// label = create('label');
// label.textContent = 'Вариант3';
//
// label.appendChild(input);
// li.appendChild(label);
//
// ol.appendChild(li);
//
//
// document.body.appendChild(h1);
// document.body.appendChild(ol);

// ---------------------------------------------Вариант 2

var qa = {
  'q1': {
    'a1':false,
    'a2':false,
    'a3':true
  },
  'q2': {
    'a1':false,
    'a2':false,
    'a3':true
  },
  'q3': {
    'a1':false,
    'a2':false,
    'a3':true
  }
};

let h1 = document.createElement('h1');
let button = document.createElement('button');
button.textContent = 'Проверить';
button.onclick = function () {
  var qs = {};
  Array.from(document.getElementsByTagName('input')).forEach (function (i) {
    var valid = (i.checked && qa[i.name][i.value]) || (!i.checked && !qa[i.name][i.value]);
    if(i.name in qs) {
      qs[i.name] = (qs[i.name] & valid);
    } else {
      qs[i.name] = valid;
    }
    //console.log('Q = ',i.name,', A = ',i.value,', valid = ',valid);
  });
  console.log('Кол-во правильных ответов: ',qs);
};
h1.textContent = 'Тест по програмированию';
document.body.appendChild(h1);

const ol = document.createElement('ol');

// forEach(elem => {
//   const li = document.createElement('li');
//   li.textContent = elem;
//   ol.appendChild(li);
// });
for (var q in qa) {
  let li = document.createElement('li');
  let h2 = document.createElement('h2');
  h2.textContent = q;
  li.appendChild(h2);

  for (var a in qa[q]) {
    let input = document.createElement('input');
    let label = document.createElement('label');
    let span = document.createElement('span');

    input.type = 'checkbox';
    input.name = q;
    input.value = a;
    //label.textContent = qa[q][a];
    span.textContent = a;//qa[q][a];
    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
  }
  ol.appendChild(li);
}

document.body.appendChild(ol);
document.body.appendChild(button);


/*
 TASK 0. Найдите числа которые повторяются нечетное количество раз
 в массиве
 solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
 solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
 solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
 solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
 solution([2, 2, 44, 44]) => []
 */

console.group('Task:0');
let solution = array => array.filter(number => {
  return array.filter(elem => elem === number).length % 2
}).filter((elem, index, array) => array.indexOf(elem) === index);

console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])); // -> [6 5 9 21]
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])); // -> [8 16 23 42]
console.log(solution([2, 2, 44, 44])); //=> []
console.groupEnd();


/* TASK - 1
 Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько вызовов данной функции
 *
 *
 * */

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

console.group('Task1: ');
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


