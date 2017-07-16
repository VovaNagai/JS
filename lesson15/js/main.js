const app = {
    questions: [
        {
            name: 'Вопрос 1',
            answer:['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswer:[2]
        },
        {
            name: 'Вопрос 2',
            answer:['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswer:[2]
        },
        {
            name: 'Вопрос 3',
            answer:['Ответ 1', 'Ответ 2', 'Ответ 3'],
            rightAnswer:[2]
        }
    ],
    createLi() {
        return this.new('li'); //document.createElement('li');
    },
    render() {
        const body = document.body;
        //const main = document.createElement('main');
        const main = this.new('main');
        const h1 = this.new('h1');
        const ol = this.new('ol');

        main.appendChild(h1);
        main.appendChild(ol);

        this.questions.forEach(question => {
            const li = this.createLi('li');
            const h3 = this.new('h3');
            const ul = this.new('ul');
            question.answer.forEach(answer => {
                const liAnswer = this.createLi();
            });
            li.appendChild(h3);
            ul.appendChild(ul);
        })
    },
    new(tag) {
        return document.createElement(tag);
    }
};
