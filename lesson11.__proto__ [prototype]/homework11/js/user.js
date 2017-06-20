/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */
console.group('Task1');

var database = {
    
};



console.groupEnd();
let obj1 = {
    name:''
};

let obj2 = {
    showName() {
        console.log(`Show ${name}`);
    }
};

let obj3 = {
    lastName: 'Nagai',
    name: 'Vova'
};
obj1.__proto__ = obj2;
obj2.__proto__ = obj3;
console.log(obj1);
console.log(obj2);