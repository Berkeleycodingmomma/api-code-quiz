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

let startContainer = document.getElementById("start-container");
let quizContainer = document.getElementById("quiz-container");
let scoreContainer = document.getElementById("score-container");
let highContainer = document.getElementById("high-score-container");
let startButton = document.getElementById("start-button");
let questionOption;
let questionNumber = 0;
let quizStart;
let score = 0;


function nextQuestion(questionNumber) {
    quizStart = false;
    console.log("questNum", questionNumber)
    let questionCard = document.querySelectorAll(".container_mid");
    questionCard.forEach((card) => {
        card.classList.add("hide");
    });
    questionCard[questionNumber].classList.remove("hide");
}

function checkAnswer(answerClicked) {
   answerClicked = answerClicked.innerText
   if (answerClicked == questions[questionNumber].right_answer) {
    score++
   }
    questionNumber += 1;
    if (questionNumber == questions.length) {
        quizContainer.classList.add("hide")
        scoreContainer.classList.remove("hide")
    } else {
        nextQuestion(questionNumber)
    }
    console.log("score", score)
}

function startQuiz() {
    for (let i of questions) {
        let questionCard = document.createElement("div");
        questionCard.classList.add("container_mid");

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;

        questionCard.appendChild(question_DIV);

        console.log(i.answers)
        for (let x = 0; x < i.answers.length; x++) {
            console.log(x)
            questionCard.innerHTML += `
            <button id="question-option" class="option-div" onclick="checkAnswer(this)">${i.answers[x]}</button>
            `;
        }
        quizContainer.appendChild(questionCard);
    }
}

startButton.addEventListener("click", () => {
    startContainer.classList.add("hide")
    quizContainer.classList.remove("hide")
    quizStart = true
    // start timer function
    startQuiz();
    nextQuestion(0);
});