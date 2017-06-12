'use strict'
// -----------------------------------------------------JSON
let myObj = {
    // // оченьдолго писать + работает в IE and FIREFOX работает в 100раз медленее
    es5function: function () {
        for (let key in myObj) {
            //console.log(key);
        }
    },
    es6function() {
        for (let key in myObj) {
            //console.log(key);   // Как узнать все ключи в объекте (старый способ)
        }
    },
    es6functionOb() {
            for (let key in myObj) {
                console.log(myObj);   // Как узнать все ключи в объекте (старый способ)
            }
       Object.keys(myObj).forEach(function (elem) {
         console.log(myObj[elem]);
       }); // МЕТОД : Object.keys
    }
};

// myObj.es5function(); // Методы показываются  : es5function
// myObj.es6functionOb();

//----------------------------------------------------------------------------------------
let sum = function (a, b) {
    return a + b;
};

console.log(sum(2, 2));
// Способ ES6
let sumES6 =(a, b) => {
    console.log('Sum ES6 =>');
    return a + b;
};
console.log(sumES6(3, 3));
// Передаваймые значения умножаются на два
let sumES6S =(a) => {
    console.log('1) Sum ES6 * 2 => ');
    return (a) * 2;
};
console.log(sumES6S(4));

//Еще красивее по коду

let double = (a) => a * 2;
console.log('2) Sum ES6 * 2 => ', double(42));
//----------------------------------------------------------------------------------------
// > 1500 выберите все значения больше 1500
// используйте функцию стрелку

var someArray = [1000, 1500, 2000, 2500, 3000];

let mySalary1 = (salary) => {
    let mySalaryArr = [];
    return salary.filter(function (elem, index) {
        if (elem > 1500) {
          return mySalaryArr.push('');
        }
    });

};
console.log('OLD: ', mySalary1(someArray));

// ES 6
let mySalary2 = (salary) =>
    salary.filter((elem, index) => {
        return elem > 1500
});
console.log('NEW: ', mySalary2(someArray));

//ES6

var mySalary3 = arr => arr.filter(elem => elem > 1500);
console.log('NEW2: ', mySalary3(someArray));

//--------------------------------------------------------------------
var sumArguments = (... args) =>
args.reduce((prevValue, value) => (prevValue += value));
console.log('sumArguments: ', sumArguments(10,20,30));

// ----------------------------------THIS
// function showContext() {
//     console.log(this);
// }
//
// var recipeBook = {
//     cakes: ['торт', 'sdsd', 'sdsd'],
//     showContext: function () {
//         console.log(this);
//     }
// };
// //showContext();
// recipeBook.showContext();

var telephoneBook = {
    friends: ['торт','мороженное','пицца'],
    // showFriends: function () {
    //     return this.friends;
    //  }
};

var telephoneBook2 = {
    friends: ['яблоко','apple','Апельсин'],
    showFriends() {
        console.log(telephoneBook2.friends);
    }
    // showFriends: function () {
    //     return this.friends;
    // }
};

// console.log(telephoneBook.showFriends());
// console.log(telephoneBook2.showFriends());

telephoneBook2.showFriends();

// DRY - Don't repeat your self


// THIS --------------------------------
// function User (name, surName) {
//     this.name = name;
//     this.surName = surName;
// }
// var Vova = new User('Vova');
//
// console.log(Vova);  //



//вывести имя друга и какие он любит фрукты
// использовать так же уже существующий метод ShowFruits

const user = {
  name: 'Jack',
    fruits: 'mango, kivi, banan',
    friends: [
        {
            name: 'Egor',
            fruits: 'lime'
        },
        {
            name: 'Roma',
            fruits: 'Orange'
        },
        {
            name: 'Lera',
            fruits: 'Banan'
        }
    ],
    showFruits: function () {
        console.log(this.fruits);
    },
    showFriendsFruits: function () {
        let ffr = this.friends.map(elem => elem.fruits);
        console.log(ffr.join(', '));
    }
};

console.log(user.showFruits());
console.log(user.showFriendsFruits());