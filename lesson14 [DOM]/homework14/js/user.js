// ---------------------------------------------Вариант 1

// let create = tag => document.createElement(tag);
//
// let ul = create('ul');
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
// ul.appendChild(li);
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
// ul.appendChild(li);
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
// ul.appendChild(li);
//
//
// document.body.appendChild(h1);
// document.body.appendChild(ul);

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
  // for (var q in qa) {
  //
  //
  //   for (var a in qa[q]) {
  //
  //   }
  // }
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
  console.log(qs);
};
h1.textContent = 'Тест по програмированию';
document.body.appendChild(h1);

const ul = document.createElement('ul');

// forEach(elem => {
//   const li = document.createElement('li');
//   li.textContent = elem;
//   ul.appendChild(li);
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
  ul.appendChild(li);
}

document.body.appendChild(ul);
document.body.appendChild(button);


