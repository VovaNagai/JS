/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] 
 * лидеры 17, 5 и 2.

 * */
console.group(' TASK 0');
function solution(arg) {
     let newArr = arg.filter((elem, index) => {
         return arg.slice(index + 1).every(nextElem => {
          return  nextElem < elem;
        });
    });
    return newArr;
}

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.groupEnd();


/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 *
 * */


console.group(' TASK 1: Slider');
class ECSlider {
    constructor({ activeElementIndex, sliderTagName }) {
        this.sliderTag = document.querySelector('.' + sliderTagName);
        // MODEL
        this.state = {
            activeElementIndex,
            totalSliderLength: this.sliderTag.childElementCount
        };

        this.buttonLeft = document.querySelector('.ec-left');
        this.buttonRight = document.querySelector('.ec-right');

        this.events();
    }

    moveLeft() {
        console.log(this);
        const { activeElementIndex } = this.state;
        const nextActiveElementIndex = activeElementIndex - 1;
        if (nextActiveElementIndex < 0) {
            return;
        }
        // VIEW
        this.updateView(activeElementIndex, nextActiveElementIndex);
    }

    updateView(oldElementIndex, nextActiveElementIndex) {
        this.sliderTag.children[oldElementIndex].style.display = 'none';
        this.sliderTag.children[nextActiveElementIndex].style.display = 'block';
        // TODO move MODEL
        this.state.activeElementIndex = nextActiveElementIndex;
    }

    moveRight() {
        console.log(this);
        const { activeElementIndex, totalSliderLength } = this.state;
        const nextActiveElementIndex = activeElementIndex + 1;
        if (nextActiveElementIndex === totalSliderLength) {
            return;
        }

        this.updateView(activeElementIndex, nextActiveElementIndex);
    }

    events() {
        this.buttonLeft.onclick = this.moveLeft.bind(this);
        this.buttonRight.onclick = this.moveRight.bind(this);
    }

    static start(options) {
        return new ECSlider(options);
    }
}
console.groupEnd();


/*
 * TASK 2
 * Сделайте класс, который будет иметь метод topStyle
 * метод topStyle принимает объект с CSS стилями и добавляет в <head>
 *   новый элемент с данными стилями
 *
 *
 * */

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */
console.group('@SUPER');
let pattern = (str) => {
    let newStr = str.split(/-/),
        left = RegExp.leftContext,
        right = RegExp["$'"],
        reg = /[\S]{1}/,
        sym = right.slice(1),
        results = right.match(reg),
        upper = results[0].toUpperCase(),
        resulTo = right.replace(reg, upper),
        res = left.concat(resulTo);

    return res;
};
console.log(pattern('margin-left'));
console.log(pattern('flex-basis'));
console.log(pattern('background-color'));
console.groupEnd();
