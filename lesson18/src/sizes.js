const example = document.getElementById('root');
const info = document.getElementById('info');

let props = {
  размеры: [
    'clientLeft',
    'clientTop',
    'clientWidth',
    'clientHeight',
    'offsetWidth',
    'offsetHeight',
    'scrollWidth',
    'scrollHeight'
  ],
  прокрутка: ['scrollLeft', 'scrollTop'],
  'позиционирование по рендерингу': ['offsetParent', 'offsetLeft', 'offsetTop']
};

info.innerHTML = '<h3>Нажмите для просмотра значения:</h3>';
for (let k in props) {
  info.innerHTML += `<h4>${k}</h4>`;
  let prop = props[k];
  for (let i = 0; i < prop.length; i++) {
    const propWidth = prop[i];
    info.innerHTML += `<span class='key'>${propWidth}</span>: <span id="${propWidth}">&nbsp;</span> `;
    i++;
    if (i < prop.length) {
      const propHeight = prop[i];
      info.innerHTML += `<span class='key'>${propHeight}</span>: <span id="${propHeight}">&nbsp;</span>`;
    }
    info.innerHTML += '<br/>';
  }
}

document.onclick = event => {
  let target = event.target;
  if (!target.classList.contains('key')) return;

  let prop = target.innerHTML;
  let value = example[prop];
  value = value.tagName || value;
  document.getElementById(prop).innerHTML = value;
};



