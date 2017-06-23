console.group('Task1 Прототипное наследование + его разширение');
// __proto__ - для объектов
// prototype - для функций конструктора(КЛАСС)
function  Car(wheels, color, doors, type) {
        this.wheels = wheels;
        this.color = color;
        this.doors = doors;
        this.type = type;

}

Car.prototype.drive = function () {
    console.log(this.type + ' car is driving');
    this.isDrive = true;
};

Car.prototype.stop = function () {
    if (!this.isDrive) {
        console.log(this.type + ' стоит');
    } else
        console.log(this.type + ' остановилась');
        this.isDrive = false;
};

var bmw = new Car (4, 'red', 2, 'bmw');
var lexus = new Car (4, 'blue', 3, 'lexus');
bmw;
bmw.stop();
bmw.drive();
bmw.stop();
lexus.stop();
console.groupEnd();

console.group('Task2: call + apply');
var cat = {
    legs: 4,
    callKitty(food, food2) {
        console.log(this.name, ' kiss kiss kiss', 'держи ', food);
        console.log(food2);
    }
};
var myCat = {
    name: 'Hermiona'
};
var otherCat = {
    name: 'Беляшик'
};
myCat.__proto__ = cat;
otherCat.__proto__ = myCat;
myCat.callKitty('рыбу');
cat.callKitty.call(otherCat);
cat.callKitty.call(otherCat, 'вискас', 'хозяина');
console.log(cat.callKitty.apply(otherCat, ['вискас', "хозяина"]));

function bind(contextFN, object) {
    return () => {
        contextFN.call(object)
    }
}

var feedBelyash = cat.callKitty.bind(otherCat);
feedBelyash('индейку', 'asasasas');
console.groupEnd();

console.group('Task3');

function Creature(type) {
    this.type = type;
}
Creature.prototype.doMagic = function () {
    if (this.type == 'Mage') {
        console.log('Magic');
    } else {
        console.log('Вы человек');
    }
};

function Human(type, ears) {
    Creature.call(this, type);
    this.ears = ears;
}
Human.prototype = Object.create(Creature.prototype);
var man = new Human('Воробей', 3);
var Jack = new Human('Коннор', 150);
var Gendalf = new Human('Mage', 2);

console.log(man);
console.log(Jack);
Gendalf.doMagic();
console.groupEnd();