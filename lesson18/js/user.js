// const cells = [... document.querySelectorAll('td')];
// cells.forEach(cell => {
//     cell.onclick = () =>
//     cell.style.background = 'red';
// });

// const tbody = document.querySelector('tbody')
// tbody.onclick = (event) => {
//
// }
let query = selector => document.querySelector(selector);

const block1 = query('.block1');
const block2 = query('.block3');
const block3 = query('.block3');``

block1.addEventListener('click', () => {alert('block1');});
block2.addEventListener('click', () => {alert('block2');});
block3.addEventListener('click', () => {alert('block3');});
