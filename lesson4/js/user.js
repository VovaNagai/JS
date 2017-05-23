// for(var i=0;i<1000; i = i + 1) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// var arr = [10,20,30,40];
// for(let i=0; i<arr.length; i=i+1){
//     console.log(arr[i]);
// }

// var arr = [10,20,30,40];
// function name(mas) {
//     for (i=0; i<arr.length; i++) {
//         console.log(name[i] * 2);
//     }
// }
// name([10,20,30,40]);


// function name(arr) {
//     for(let i=0; i<arr.length; i++){
//         if(0 == i % 2) {
//            console.log(arr[i])
//         }
//     }
// }
// name([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);


// // Созддать функцию которая принимает один параметр
// function name(arr) {
// // Создать пустой массив
// const myArr = [];
// // Начать перебирать массив который пришел в параметрах
// for (let i=0; i<arr.legth; i++) {
// // Проверить элементы массива, является ли он четным
// // Если не является, тогда добавить в созданный массив
// // Вернуть созданный изначально массив

// var myArr = [10,20,30,51];
// let i = 0;
// while (i < myArr.length) {
//     console.log(myArr[i]);
//     if (myArr[i].age) {
//         console.log("YOU");
//         break;
//     }
//     i = i +1;
// }

// let counter = 0;
// let randomValue = Math.random()*10;
// while (randomValue<9) {
//     randomValue = Math.random()*10;
//     console.log(counter, 'react');
//     console.log(randomValue);
//     counter = counter + 1;
// }
//
// do {
//     console.log('one');
// } while (randomValue < 9);

//Если елемент является массивом то каждое значение массива начинатся с новой строчки
var project = {
    name: 'Landing page',
    salary: '1200$',
    technology: ['CC3', 'HTML5', 'JQuery']
};

for (let key in project) {
    console.log('key:', key);
    console.log('value:',project[key]);
    if (Array.isArray(project[key])) {
        var arr = project[key];
        for(let i=0; i<arr.length; i++){
            console.log('item in array:', arr[i]);
        }
    }
}
