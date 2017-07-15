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

let solution = (str) =>/[a-z]/m.test(str);

console.log(solution('WYYGА')); // false
// solution("qwertyuioplkjhgfdsazxcvbnm"); // true
// solution("ejuxggfsts"); // false
// solution("qpwoeirutyalskdjfhgmznxbcv"); // true
// solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv"); // true
// solution("0123456789abcdefghijklmnop"); // false

// const solution = str => {
//   const abc = 'qazwsxedcrfvtgbyhnujmikolp';
//   const abcSorted = sortString(abc);
//   const newStrSorted = sortString(str);
//   return abcSorted === newStrSorted;
// };
//
// const sortString = str => {
//   return str
//       .split('')
//       .filter((elem, index, arr) => {
//         return arr.indexOf(elem) == index;
//       })
//       .sort((a, b) => a - b)
//       .join('');
// };

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
const flatten = arr =>
    arr.reduce((flattenedArray, elem) => {
      return !Array.isArray(elem)
          ? flattenedArray.concat(elem)
          : flattenedArray.concat(flatten(elem));
    }, []);
// [1]
//

/*
 Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
 по phone book
 */
