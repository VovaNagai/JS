// 'use strict';
// var JSONProduct = {
//     "name": "iPhone 8s",
//     "application": {
//         "price": ['10', '20', '30']
//     }
// };
//
// let str = JSON.stringify(JSONProduct);
// console.log(str);

// Функция конструктор или CLASS на основании которого создаем разные объекты
//  function User(name) { //пишем с заглавной буквы
//     //let obj = {};
//     //obj.name = name;
//     this.name = name;
// }
//
// let userOleg = new User('Oleg');
// let userPerl = new User('Perl');
// console.log(userOleg.name);
//
// function City(name, popular, temperatyr) {
//     this.name = name;
//     this.popular = popular;
//     this.temperatyr = temperatyr;
// }
// let Madrid = new City('Madrid', 9, 20);
// let Tokyo = new City('Tokyo', 10, 17);
// console.log(Madrid);
// console.log(Tokyo);

// подобие микросервисной архитектуры

/*
* мы сейчас будем делать ф-цию-конструктор в world.
* World have
* свойство: bankCash
* метод: addCountry
* ---------------------------------
* После того как мы разместили страну в world
* у данной страны добавился метод, который получает
* доступ к bankCash
*/

function World (cash) {
    this.cash = cash;
    this.addCountry = () => {
        console.log(this);
        console.log(this, Country[Country.name]);
    };
}
function Country(name, currentCash, callback) {
        this.name = name;
        this.currentCash = currentCash;
        this.callback = callback;
        this[name] = function () {
            console.log(callback);
        }
}

let earth = new World(1000);

let login = new Country('ua', 100, function () {});
let ukraine = new Country('login', 100, function () {});
earth.addCountry(ukraine);
//Country.ukraine(20);

console.info(ukraine);



