const app = {
    appName: 'Тест по программированию',
    questions: [
        {
            name: 'Вопрос 1',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswers: [2]
        }, // приходят с сервера
        {
            name: 'Вопрос 2',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswers: [1]
        }, // приходят с сервера
        {
            name: 'Вопрос 3',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswers: [2]
        } // приходят с сервера
    ],

    createLi() {
        return this.new('li');
    },
    createQuestions(question) {
        const li = this.createLi();
        const h3 = this.new('h3');
        h3.textContent = question.name;
        const ul = this.new('ul');
        question.answers.forEach(answer => {
            const htmlAnswer = this.createAnswer(answer);
            ul.appendChild(htmlAnswer);
        });
        li.appendChild(h3);
        li.appendChild(ul);
        return li;
    },
    createAnswer(answer) {
        const liAnswer = this.createLi();
        const label = this.new('label');
        const input = this.new('input');

        input.setAttribute('type', 'checkbox');
        liAnswer.appendChild(input);
        liAnswer.appendChild(label);
        label.textContent = answer;
        return liAnswer;
    },
    render() {
        const body = document.body;
        const main = this.new('main');
        const h1 = this.new('h1');
        const ol = this.new('ol');
        const button = this.new('button');
        button.onclick = function() {
            const ul = document.querySelectorAll('ul');
            [...ul].forEach(elem => {
                elem.children[1].children[0].checked = true;
            });
            // Массивы + свойства объекта
        };
        button.textContent = 'Проверить';
        h1.textContent = this.appName;

        main.appendChild(h1);
        main.appendChild(ol);
        main.appendChild(button);

        this.questions.forEach(question => {
            const htmlQuestion = this.createQuestions(question);
            ol.appendChild(htmlQuestion);
        });
        body.appendChild(main);
    },
    new(tag) {
        return document.createElement(tag);
    }
};

app.render();