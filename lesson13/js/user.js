//----------------Инкапсуляция
//----------------------Полиморфизм
//-----------------------------Таймеры


//----------------Инкапсуляция
// приватное свойство - создается замыкание
function Server() {
    let secret_password = 'so secret';
    this.showSecretPassword = function () {
        console.log(secret_password);
    };
    this._changeSecretPassword = function (newPassword) {
        secret_password = newPassword; //защищенные методы
    }

}

var http = new Server();

//----------------------Полиморфизм

function Parent() {
    Parent.prototype.sayHello = function () {
        console.log('hello ' + this.name)
    }
}
Child.prototype = Object.create(Parent.prototype); // наследуем обратить внимание на Object.create!!!

function Child(name) {
    this.name = name;
}

var cat = new Child('хвостик');

//
//----------------------------------CLASS---------------------------------------
//

class Server2 {
    constructor(database) {
        this.database = database;
    }
    listen(PORT, host) {
        console.log(`Server running on https://${this.host}:${this.port}`);
    }
}

class Client extends  Server2 {
    constructor(database, name){
        super(database); // тот-же call передаем конкретные аргументы
        this.name = name;
    }
}
var http2 = new Server2([{name: 'Vova'}], '111A');

//------------------------Task2
class Parent2{
    sayHello() {
        console.log('hello ' + this.name);
    }
    sayMeow(){
        console.log('MEOW W_W ' + this.name);
    }
}

class Child2 extends Parent2 {
    constructor(name) {
        super();
        this.name = naime;
    }
}

var name1 = new Child2('Vova');

//-------------------------------------Таймеры------------------------------------------
setTimeout(function () {

},1000);
//setInterval()
// clearTimeour()