/*eslint-disable */
let query = selector => document.querySelector(selector);

const block1 = query('.block1');
const block2 = query('.block2');
const block3 = query('.block3');
const aaaa = 

// block 1 alert(1)
// block 2 alert(2)
// block 3 alert(3)

// Фаза погружения
block1.addEventListener('click', () => {
  alert('BLOCK 1 ! ! ! !');
});

// Фаза погружения
block2.addEventListener('click', () => {
  // event.stopPropagation();
  event.stopImmediatePropagation();
  alert('BLOCK @ @ @ @ @ @');
});

// Фаза всплытия
block2.addEventListener('click', () => {
  alert('BLOCK 2 ! ! ! !');
});

// Фаза погружения
block3.addEventListener('click', (event) => {
  alert('BLOCK 3 ! ! ! !');
},true );

