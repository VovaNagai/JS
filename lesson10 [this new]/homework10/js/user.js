/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y; // вернет значение 5

let z = t => {
    let y = 5;
    t();// ничего не вернется поскольку функция ничего не возращает
};
console.group('Задача 0');
console.log(y);// вернет значение 5
console.groupEnd();


/*
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 * */

let dollarSign = tag => `<${tag}></${tag}>`;


console.group('Задача 1');

let createBODY = dollarSign('body');
let createDIV = dollarSign('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>
console.groupEnd();

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 // obj.method().method().method()
 ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

// var ezjQuery = {};
// ezjQuery
//     .add('body') //<body></body>
//     .add('div') //<body></body><div></div>
//     .add('h1'); //<body></body><div></div><h1></h1>
// console.group('Задача 3');
// console.groupEnd();
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */
console.group('Задача 4');
// var helloList = ezjQuery
//     .add('body') // <body></body>
//     .add('div') // <body><div></div></body>
//     .add('ul') // <body><div><ul></ul></div></body>
//     .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
//     .add('div', 'jj/<>')
//     .add('p')
//     .render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// // //  Обратите внимание, что после вызова render создание строки началось сначала
//
// var bodyDiv = ezjQuery
//     .add('body') //<body></body>
//     .add('div', 'hello once more') //<body><div></div></body>
//     .render();
// console.log(bodyDiv); //<body><div></div></body>
console.groupEnd();

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
console.group('Задача @SUPER');
function $(tagMain, contentMain = '') {
    return {
        tags: [{ tagName: tagMain, content: contentMain }],
        add(tagName, content = '') {
            // this.tags.push({ tagName: tagName, content: content });
            this.tags.push({ tagName, content });
            return this;
        },
        render() {
            const beginArr = [];
            const endArr = [];
            this.tags.forEach(tag => {
                beginArr.push(`<${tag.tagName}>${tag.content}`);
                endArr.unshift(`</${tag.tagName}>`);
            });
            this.tags = [];
            return beginArr.concat(endArr).join('');
        }
    };
}
console.log($('body').render());
console.log($('div').add('h1').add('p', 'p:атрибут_значения').render());
console.groupEnd();

