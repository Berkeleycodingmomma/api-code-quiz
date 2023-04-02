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

let startContainer = document.querySelector(".start-container");
let quizContainer = document.querySelector(".quiz-container");
let scoreContainer = document.querySelector(".score-container");
let highContainer = document.querySelector(".high-score-container");