

document.getElementById('btn').onclick = function () {
    // HTTP запрос
    const url = 'http://easycode-js.herokuapp.com/';

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
        document.getElementById('info').value = '';
        if (xhr.readyState === 4) {
            state4 = xhr.responseText;
            //console.log(xhr.responseText);
          document.getElementById('info').value = xhr.responseText;
        }

    };

// то что запрашиваем
    xhr.open('GET', url + 'test', true);
// отправка запроса
    xhr.send();
};
