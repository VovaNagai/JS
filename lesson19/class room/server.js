const http = require('http');
const fs = require('fs');

http
  .createServer((request, response) => {
    // логи
    const { url } = request;
    console.log(url);
    let fileDir = `.${url}`;
    if (url.includes('favicon')) return;
    if (url === '/') {
      fileDir = './index.html';
    }

    // Домашнее задание, добавить проверку
    const someFile = fs.readFileSync(fileDir);
    response.end(someFile);
    // Читаю файл из файловой системы синхронной(!)
    // Возвращаю клиенту данный фаил
  })
  .listen(3000, 'localhost', err => {
    if (err) throw err;
    console.log('server running at localhost:3000');
  });
