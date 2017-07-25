const box = document.querySelector('.box');

box.addEventListener('mousedown', () => {
  console.log('mousedown');
  box.style.background = 'red';

  const mouseup = e => {
    box.style.background = 'blue';
    box.removeEventListener('mouseup', mouseup);
  };

  box.addEventListener('mouseup', mouseup);
});

box.addEventListener('click', () => {
  console.log('click');
});

box.addEventListener('mouseup', () => {
  console.log('mouseup');
});

window.addEventListener('keydown', e => {
  console.log('keydown:');
  // e.keyCode == 112 // F1
  // e.keyCode == 123 // F12
  // if (e.keyCode >= 112 && e.keyCode <= 123) {
  // e.preventDefault();
  // }
});

window.addEventListener('keypress', e => {
  console.log('keypress: ');
});

window.addEventListener('keyup', e => {
  console.log('keyup: ');
});

window.addEventListener('contextmenu', e => {
  e.preventDefault();
});

window.addEventListener('beforeunload', () => {});

window.onbeforeunload = function() {
  return true;
};
