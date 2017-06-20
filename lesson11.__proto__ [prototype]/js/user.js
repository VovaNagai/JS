console.group('Task1');
const mainTeacher = {teacher: 'Oleg Lustenko'};
let allStudents = [];
const addStudents = () => {
    for (let i=0; i<30; i++) {
        let student = {name: 'qwerty' + 1 };
        student.__proto__ = mainTeacher;
        student.someMagic = function () {
            console.log(this.name + ' calls', 'ХАЛЯВА ПРИДИ !');
        };
        allStudents.push(student)
    }
    return allStudents;
};

console.info(addStudents());
console.groupEnd();

//
console.group('Task2');

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
// console.log(obj2);
// console.log(obj3);
console.groupEnd();

console.group('Task3');

function User(myArray, cars, name) {
    if (Array.isArray(myArray)) {
        this.myArray = myArray;
    }
    if (cars) {
        this.cars = cars;
    }
    if (name) {
        this.name = name;
    }
}

User.prototype.ekz1 = function () {
    console.log('user');
};

var user = new User([1,2], {name: name}, 'string');
// user.prototype([1,2], {name: name}, 'string');

console.log(user);

console.groupEnd();

console.group('Task4');
function CounterConst() {
    var method = 0;
return {
    counter: function () {
         console.log(method++);
    }
    }
}

var myCounter = CounterConst();


console.groupEnd();

console.group('Task5');
var Rozetka =  {name: 'Rozetka'};

var Apple = function (name, color) {
    this.name = name;
        this.color = color
};

var colorB = new Apple('Apple2', 'black');

Rozetka.prototype = Apple.name + Apple.color;


console.log(Rozetka);
console.groupEnd();