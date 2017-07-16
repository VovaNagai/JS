// -----------------------instanceOf-------------------------------------

// ---------------------regular------------------------------------------
var str1 = 'JavaScript is rule';
function name(str) {
    return /JavaScript/.test(str)
}
console.log(name(str1));

var str3 = 'JavaScript is is is is rule';
// или
let st = (str) => /JavaScript/.test(str);
console.error(st(str1));
// const name2 = (str) => str.replace(new RegExp('is ','ig'), 'is');

let replase = str => {
    return str.replace(/is/, '!!').replace(/is /g, '').replace('!!', 'is')
};

console.log(replase(str3));

//------------------------------------------------DOM-----------------------------------

const h1 = document.createElement('h1');
h1.textContent = 'HELLO';


// let create = tag => document.createElement(tag);
//
// let ol = create('ol');
// let li1 = create('li');
// li1.textContent = 'JavaScript';
// let li2 = create('li');
// li2.textContent = 'React';
// let li3 = create('li');
// li3.textContent = 'Node.js';
//
// ol.appendChild(li1);
// ol.appendChild(li2);
// ol.appendChild(li3);
//
// document.body.appendChild(h1);
// document.body.appendChild(ol);

var info = ['JavaScript', 'React', 'Node.js'];
const ul2 = document.createElement('ol');

info.forEach(elem => {
    const li = document.createElement('li');
    li.textContent = elem;
    ul2.appendChild(li);
});
document.body.appendChild(h1);
document.body.appendChild(ul2);





