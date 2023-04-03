const questions = [
    {
        "id": 0,
        "question": "[ ] brackets are wrapped around what?",
        "answers": ["Objects", "Arrays", "Strings", "JSON"],
        "right_answer": "Arrays"
    },
    {
        "id": 1,
        "question": "{ } brackets are wrapped around what?",
        "answers": ["Objects", "Arrays", "Strings", "JSON"],
        "right_answer": "Objects"
    },
    {
        "id": 2,
        "question": "Array.push() adds items to an array",
        "answers": ["True", "False"],
        "right_answer": "True"
    },
    {
        "id": 3,
        "question": "If you want to iterate through an array, what would you use?",
        "answers": ["An If Statement", "Bracket Notation", "For Loop", "A Conditional", "An Array Iterate"],
        "right_answer": "For Loop"
    },
    {
        "id": 4,
        "question": "== and != are expamples of?",
        "answers": ["An If Statement", "Bracket Notation", "For Loop", "A Conditional", "An Array Iterate"],
        "right_answer": "A Conditional"
    },
]

let scores = [];

let startContainer = document.getElementById("start-container");
let quizContainer = document.getElementById("quiz-container");
let scoreContainer = document.getElementById("score-container");
let highScoreContainer = document.getElementById("high-score-container");
let startButton = document.getElementById("start-button");
let submitButton = document.getElementById("submit-button");
let finalScore = document.getElementById("final-score");
let scoresListContainer = document.getElementById("scores-list-container");
let clearScores = document.getElementById("clear-scores");
let tryAgain = document.getElementById("try-again");
let timer = document.querySelector(".timer");
let questionOption;
let questionNumber = 0;
let score = 0;
let timerCount = 20
let countdown;

// resets variables
function reset() {
    score = 0;
    timerCount = 20;
    questionNumber = 0;
}

//goes back to start container
tryAgain.addEventListener("click", () => {
    highScoreContainer.classList.add("hide")
    startContainer.classList.remove("hide")
    scoresListContainer.innerHTML = '';
});

//clears scores
clearScores.addEventListener("click", () => {
    scores = []
    localStorage.clear();
    scoresListContainer.innerHTML = ''
});

//displays the high scores list from local storage
function displayHighScores() {
    let storedScores = JSON.parse(localStorage.getItem("scores"))
    storedScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    for (let i = 0; i < storedScores.length; i++) {
        let scoresCard = document.createElement("div");
        scoresCard.classList.add("scores-card");
        scoresCard.innerHTML += `
            <div>
                <span>${storedScores[i].name + ":" + " "}</span>
                <span>${storedScores[i].score}</span>
            </div>
        `;
        scoresListContainer.appendChild(scoresCard);
    }
}

// adds score object to scores array and local storage - then opens high scores container
submitButton.addEventListener("click", () => {
    let name = document.getElementById("score-input").value
    scores.push({
        "name": name,
        "score": score
    })
    document.getElementById('score-input').value = ""
    scoreContainer.classList.add("hide")
    highScoreContainer.classList.remove("hide")
    localStorage.setItem("scores", JSON.stringify(scores))
    displayHighScores()
    //resets variables
    reset()
});

//displays the score
function displayScore() {
    finalScore.innerHTML = "Your score is " + score;
};

// start the timer
const startTimer = () => {
    countdown = setInterval(() => {
        timerCount--;
        timer.innerHTML = `Timer: ${timerCount}s`;
        if (timerCount == 0) {
            clearInterval(countdown);
            quizContainer.classList.add("hide")
            scoreContainer.classList.remove("hide")
            displayScore()
        }
    }, 1000);
};

// initiates next question
function nextQuestion(questionNumber) {
    let questionCard = document.querySelectorAll(".question-card");
    questionCard.forEach((card) => {
        card.classList.add("hide");
    });
    questionCard[questionNumber].classList.remove("hide");
};

// checks the answer - if end of question go to score container
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
}

//starts the quiz and builds button options for each answer
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

//start the quiz and display questions
startButton.addEventListener("click", () => {
    startContainer.classList.add("hide")
    quizContainer.classList.remove("hide")
    startQuiz();
    nextQuestion(0);
    startTimer();
});

// on window load set scores array to array in local storage if it exist
window.onload = () => {
    let scoresFromStorage = JSON.parse(localStorage.getItem("scores"))
    if (scoresFromStorage) {
        scores = scoresFromStorage
    } else {
        scores = []
    }
};