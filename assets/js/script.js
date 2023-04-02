const questions = [{
        "id": 0,
        "question": "Question 1",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 1"
    },
    {
        "id": 1,
        "question": "Question 2",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 2"
    },
    {
        "id": 2,
        "question": "Question 3",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3"],
        "right_answer": "Answer - 3"
    },
    {
        "id": 3,
        "question": "Question 4",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 4"
    },
]

const scores = []

let startContainer = document.getElementById("start-container");
let quizContainer = document.getElementById("quiz-container");
let scoreContainer = document.getElementById("score-container");
let highContainer = document.getElementById("high-score-container");
let startButton = document.getElementById("start-button");
let submitButton = document.getElementById("submit-button");
let finalScore = document.getElementById("final-score");
let timer = document.querySelector(".timer");
let questionOption;
let questionNumber = 0;
let quizStart;
let score = 0;
let timerCount = 20
let countdown;

submitButton.addEventListener("click", () => {
   let name = document.getElementById('score-input').value
   scores.push({
    "name": name,
    "score": score
   })
   console.log(scores)
});


function displayScore() {
    finalScore.innerHTML = "Your score is " + score + " out of " + questionNumber;
}

const startTimer = () => {
    countdown = setInterval(() => {
        timerCount--;
        timer.innerHTML = `${timerCount}s`;
        if (timerCount == 0) {
            clearInterval(countdown);
            quizContainer.classList.add("hide")
            scoreContainer.classList.remove("hide")
            displayScore()
        }
    }, 1000);
};

function nextQuestion(questionNumber) {
    quizStart = false;
    console.log("questNum", questionNumber)
    let questionCard = document.querySelectorAll(".question-card");
    questionCard.forEach((card) => {
        card.classList.add("hide");
    });
    questionCard[questionNumber].classList.remove("hide");
}

function checkAnswer(answerClicked) {
    answerClicked = answerClicked.innerText
    if (answerClicked == questions[questionNumber].right_answer) {
        score++
    } else {
        timerCount = timerCount - 5
    }
    questionNumber += 1;
    if (questionNumber == questions.length) {
        quizContainer.classList.add("hide")
        scoreContainer.classList.remove("hide")
        clearInterval(countdown);
        displayScore()
    } else {
        nextQuestion(questionNumber)
    }
    console.log("score", score)
}

function startQuiz() {
    for (let i of questions) {
        let questionCard = document.createElement("div");
        questionCard.classList.add("question-card");

        let question = document.createElement("p");
        question.classList.add("question");
        question.innerHTML = i.question;
        questionCard.appendChild(question);

        for (let x = 0; x < i.answers.length; x++) {
            questionCard.innerHTML += `<button id="question-option" class="option-div" onclick="checkAnswer(this)">${i.answers[x]}</button>`;
        }
        quizContainer.appendChild(questionCard);
    }
}

startButton.addEventListener("click", () => {
    startContainer.classList.add("hide")
    quizContainer.classList.remove("hide")
    quizStart = true
    startQuiz();
    nextQuestion(0);
    startTimer();
});