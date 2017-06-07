//SWITCH

function nameSw(arg1) {
    let value = Array.isArray(arg1);
    //console.log(value);

    switch (value) {
        case true:
        console.log(arg1.join('-'));
            break;
        case false:
            console.log(arg1);
            break;
        default:
            console.error('default');
    }
}
nameSw([1,2,3]);


function randomArguments(a,b,s,d) {
    let sum = 0;
    let arr = [...arguments];
    arr.forEach (function (elem, index, arr) {
            sum += elem;
    });
    return sum;

}

console.log(randomArguments(2,2,2,2,4,5,6));

var someObj = {
    method: function (num) {
       return num * 2;
    }
};

var obj = {
    name: 'your name',
    age: 22,
    friends: ['Lera', 'Roma'],
    recepts: {
        piazza: {
            ingredients: ['cheeze', 'toast']
    }
}
};
// var obj2 = obj;
// function name(obj) {
//     for (var key in obj) {
//         console.log(clone[key]);
//     }
// }
// alert(name(obj2));
// console.log(obj);
// console.log(obj2);
function cloneObj(someObj) {
    //создат новый объект
    var obj = {};
    //пройтись при помощи цикла for-in
    for (var key in obj) {
        obj[key] = someObj[key];
    }
    //по всем свойствам someObj
    //добавить такие же ключи из someObj в уже созданный объектах
    //вернуть уже созданный объект
    return obj;
}
var cloneObj = cloneObj(someObj);
obj.recepts.piazza = {
    ingredients: ['@', '@']
};
console.log(cloneObj);
