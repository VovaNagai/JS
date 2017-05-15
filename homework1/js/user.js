var mobilBook = {
 id1:{
    name: 'Vova',
    number:'+380999999999'
 },
    id2:{
        name: 'Gena',
        number:'+3806767671'
    },
    id3:{
        name: 'Daha',
        number:'+38067234231'
    },
    id4:{
        name: 'Alina',
        number:'+38067645641'
    },
    id5:{
        name: 'Roma',
        number:'+38023434551'
    },
    id6:{
        name: 'Victor',
        number:'+380654645641'
    }
};

window.onload = function () {
    for (var key in mobilBook) {
        var line = mobilBook[key].name + ' (' + mobilBook[key].number + ')\n';
        document.getElementById('info').value += line;
    }
    document.getElementById('search').onclick = function () {
        var term = document.getElementById('inputSearch').value;
        if ('' == term) {
            alert('You must enter search terms');
            return false;
        }
        document.getElementById('info').value = '';
        for (var key in mobilBook) {
            if (-1 !== mobilBook[key].name.indexOf(term) || -1 !== mobilBook[key].number.indexOf(term)) {
                var line = mobilBook[key].name + ' (' + mobilBook[key].number + ')\n';
                document.getElementById('info').value += line;
            }
        }
        return false;
    };
};
