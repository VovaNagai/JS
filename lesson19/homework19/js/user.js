'use strict';
/*
 TASK 0

 Проверьте что строка содержит все символы от "a" до "z"
 solution("wyyga") // false
 solution("qwertyuioplkjhgfdsazxcvbnm") // true
 solution("ejuxggfsts") // false
 solution("qpwoeirutyalskdjfhgmznxbcv") // true
 solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
 solution("0123456789abcdefghijklmnop") // false
 */

function solution(str) {
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < alph.length; i++) {
        if (str.indexOf(alph[i]) >= 0) {
            continue
        } else {
            return false
        }
    }
    return true
}
solution('wyyga'); // false
solution('qwertyuioplkjhgfdsazxcvbnm'); // true
solution('ejuxggfsts'); // false
solution('qpwoeirutyalskdjfhgmznxbcv'); // true
solution('qqqqqqqqpwoeirutyalskdjfhgmznxbcv'); // true
solution('0123456789abcdefghijklmnop'); // false

/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов

 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов

 example:

 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
function arrOpen(array, outArray = []) {
    array.map((elem, i) => {
        if (Array.isArray(elem)) {
            open(elem, outArray);
        } else {
            outArray.push(elem);
        }
    });
    return (outArray);
}
//
//console.log(arrOpen([1, [2, [{ a: "b" }]]]);
/*
 Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
 по phone book
 */

let users = [{
        name: 'Vova',
        lastName: 'Boom',
        mobilPhone: '+(380)-99-0000388',
    },
    {
        name: 'Valera',
        lastName: 'Leroy',
        mobilPhone: '+(380)-99-0000388',
    },
    {
        name: 'Victor',
        lastName: 'Rak',
        mobilPhone: '+(380)-99-0000388',
    },
    {
        name: 'Roma',
        lastname: 'Lesovoy',
        mobilPhone: '+(380)-99-0000388',
    }];

class phoneBook {
    constructor(column1, column2, column3) {
        this.tb = [column1, column2, column3];
        this.users = users;
    }

    new(elemName) {
        return document.createElement(elemName);
    }

    createTableHeader(table) {
        const thead = this.new('thead');
        const tr = this.new('tr');
        table.append(thead);
        thead.append(tr);
        this.tb.forEach(el => {
            const th = this.new('th');
            tr.append(th);
            th.textContent = el;
        })
    }

    createTableBody(table) {
        const tbody = this.new('tbody');
        table.append(tbody);
        this.users.forEach(el => {
            let user = el;
            const tr = this.new('tr');
            tbody.append(tr);

            for (let key in user) {
                const td = this.new('td');
                tr.append(td);
                td.textContent = user[key];
            }
        })
    }

    render() {
        const body = document.body;
        const main = this.new('main');
        const container = this.new('div');
        const table = this.new('table');

        const h1 = this.new('h1');
        h1.textContent = 'Phone Book';

        let input = this.new('input');
        // input.setAttribute('id');
        // input.setAttribute('ser');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'search');

        container.classList.add('container');
        table.classList.add('table', 'table-hover', 'contacts');
        body.appendChild(h1);
        body.appendChild(input);
        body.append(main);
        main.append(container);
        container.append(table);
        this.createTableHeader(table);
        this.createTableBody(table);
    }
}

let phone = new phoneBook('Name', 'Last Name', 'mobilPhone');

phone.render();

