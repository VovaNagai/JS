//GET
//POST
const url = 'http://easycode-js.herokuapp.com/';
document.getElementById('btn').onclick = function () {
    // HTTP запрос


    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        // if (xhr.readyState === 3) {
        //     //Стримы - выучить!!!!----------------------------
        //     //readyState(0,1,2,3,4)
        //     //     0 - еще не отправленно
        //     //     1 - открыто соединение
        //     //     2 - получены заголовки
        //     //     3 - начало получения ответа
        //     //     4 - завершение ответа
        //     //console.log(xhr.readyState);
        //     state3 = xhr.responseText;
        //     console.log(xhr.responseText);
        // }
        // document.getElementById('info').value = '';
        if (xhr.readyState === 4) {
            state4 = xhr.responseText;
            //console.log(xhr.responseText);
            document.getElementById('info').value += xhr.responseText+'\n';
        }

    };

// то что запрашиваем
    xhr.open('GET', url + 'test', true);
// отправка запроса
    xhr.send();
    // button2.addEventListener('click', () => {
    //     xhr();
    // })
};
document.getElementById('btn2').onclick = function () {
    let xhrPOST = new XMLHttpRequest();

    xhrPOST.addEventListener('readystatechange', () => {
        if (xhrPOST.readyState === 4) {
            console.log('response: ', JSON.parse(xhrPOST.response));
            //console.log();
        }
    });
    xhrPOST.open('POST', url + 'Vova/users', true);
    xhrPOST.setRequestHeader('Content-Type', 'application/json');
    xhrPOST.send(JSON.stringify({fullName: 'Vova', email: 'ghostffd@ddd.hh'}))
};

//-----------------------------------------------------------------

