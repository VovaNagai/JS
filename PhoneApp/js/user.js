
// ТЕЛЕФОННЫЙ СПРАВОЧНИК
//
// Приложение телефонный справочник
//
// Создайте функцию конструктор.
//     У данной функции должны быть методы:
//     Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
// Проверка, что телефонный номер содержит только числа
// Добавление пользователей в объект
// Удаление пользователя по имени, фамилии
// Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
// Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
// Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
// Фильтр по указанному свойству
function PhoneApp() {
    this.dataBase = [{id:1, name:'Vasya', phone:'0993378130'}]
}
PhoneApp.prototype.editUser = function(id, options) {
    let i = 1;
     options.name = function (name = `Name not ${i++}`) {
    console.log(name);
     };
};

var id1 = new PhoneApp()

var myApp = new PhoneApp();
//
// var mobilBook = {
//  id1:{
//     name: 'Vova',
//     number:'+380999999999'
//  },
//     id2:{
//         name: 'Gena',
//         number:'+3806767671'
//     },
//     id3:{
//         name: 'Daha',
//         number:'+38067234231'
//     },
//     id4:{
//         name: 'Alina',
//         number:'+38067645641'
//     },
//     id5:{
//         name: 'Roma',
//         number:'+38023434551'
//     },
//     id6:{
//         name: 'Victor',
//         number:'+380654645641'
//     }
// };
//
// window.onload = function () {
//     for (var key in mobilBook) {
//         var line = mobilBook[key].name + ' (' + mobilBook[key].number + ')\n';
//         document.getElementById('info').value += line;
//     }
//     document.getElementById('search').onclick = function () {
//         var term = document.getElementById('inputSearch').value;
//         if ('' == term) {
//             alert('You must enter search terms');
//             return false;
//         }
//         document.getElementById('info').value = '';
//         for (var key in mobilBook) {
//             if (-1 !== mobilBook[key].name.indexOf(term) || -1 !== mobilBook[key].number.indexOf(term)) {
//                 var line = mobilBook[key].name + ' (' + mobilBook[key].number + ')\n';
//                 document.getElementById('info').value += line;
//             }
//         }
//         return false;
//     };
// };
