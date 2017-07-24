
const http = require('http');
const fs = require('fs');

http
    .createServer((request, response) => {
        //логи
        console.log(request.url);
        console.log(request.method);
        //Читаю файлы из файловой системы синхронной(!)
        const indexHTML = fs.readFileSync('./../index.html');
        const inJS = fs.readFileSync('./../in.js');
        //Возращает клиенту данный файл
        if(request.url == indexHTML) {
            response.end(indexHTML);
        }
        else if (request.url == inJS) {
            response.end(inJS)
        }

        }).listen(1111, 'localhost', err =>{
    if (err) console.log(err);
    console.log('server running at localhost:3000');
});
