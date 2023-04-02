const questions = [
    {
        "id": 0,
        "question" : "Question 1",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 1"
    },
    {
        "id": 2,
        "question" : "Question 2",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 2"
    },
    {
        "id": 3,
        "question" : "Question 3",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 3"
    },
    {
        "id": 4,
        "question" : "Question 4",
        "answers": ["Answer - 1", "Answer - 2", "Answer - 3", "Answer - 4"],
        "right_answer": "Answer - 4"
    },
]

let startContainer = document.getElementById("start-container");
let quizContainer = document.getElementById("quiz-container");
let scoreContainer = document.getElementById("score-container");
let highContainer = document.getElementById("high-score-container");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
	startContainer.classList.add("hide")
    quizContainer.classList.remove("hide")
    // start timer function
});