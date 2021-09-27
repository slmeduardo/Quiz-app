const quizData = [
    {
        question: 'questao 1',
        a: 'dsadsa',
        b: 'correto',
        c: 'errado',
        d: 'errado',
        correct: 'b'
    }, {
        question: 'questao 2',
        a: 'correto',
        b: 'errado',
        c: 'errado',
        d: 'errado',
        correct: 'a'
    }, {
        question: 'questao 3',
        a: 'errado',
        b: 'errado',
        c: 'errado',
        d: 'correto',
        correct: 'd'
    }, {
        question: 'questao 4',
        a: 'correto',
        b: 'errado',
        c: 'errado',
        d: 'errado',
        correct: 'a'
    }, {
        question: 'questao 5',
        a: 'errado',
        b: 'errado',
        c: 'correto',
        d: 'errado',
        correct: 'c'
    }
]

let useranswers = [
    
]

const questionEl = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')
const content = document.querySelector('#content')

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function unselectAwsers() {
    const answers = [...document.querySelectorAll('.answer')]

    answers.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {

    if(useranswers.length >= quizData.length -1) {
        questionEl.innerText = 'Resultado'
        content.innerHTML = `${useranswers.map(a => `<h2>${a}</h2>`).join('')}`
        return
    }

    let answers = [...document.querySelectorAll('.answer')] //adiciona as infos dos inputs em uma array a cada click
    
    const checkedanswer = answers.find(answer => answer.checked) //pega o input que o user selecionou 
    const currentQuizData = quizData[currentQuiz] //puxa as questoes e respostas
    
    if (currentQuizData.correct == checkedanswer.id) {
        useranswers.push('Correto')
        console.log(useranswers)
    }
    if (currentQuizData.correct !== checkedanswer.id) {
        useranswers.push('Errado')
        console.log(useranswers)
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    }
    if(currentQuiz >= quizData.length -1) {
        submitBtn.innerText = 'Obter resultado'
    }

    unselectAwsers()
})
