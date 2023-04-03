# api-code-quiz
Creating a Web APIs Challenge Code Quiz
# A timed quiz with multiple choice questions

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 

Wrapping javaScript functions: https://www.chainshot.com/article/wrapping-functions

Researching for my questions: https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array

Understanding timer.innerhtml: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

Local storage in javaScript: https://www.makeuseof.com/localstorage-javascript/



## Description 
I created an application where a user can take a timed quiz by the pushing the start button. The timer starts as the user is presented with the first out of four questions. When answered incorectly, time is subtracted from the clock. When all the answers are answered or the timer runs out, the quiz game is over. The user then inputs their initials and saves their score. The highest score is announced and the user will have the option to try again and/or clear high scores.

 <img src="./assets/css/Screen Shot 2023-04-03 at 12.12.36 AM.png" alt="screen-shot">

## Web APIs Challenge Code Quiz, Code examples


--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh
 window.onload = () => {
    let scoresFromStorage = JSON.parse(localStorage.getItem("scores"))
    if (scoresFromStorage) {
        scores = scoresFromStorage
    } else {
        scores = []
    }
```

**(ABOVE)- 

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
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
```

**(ABOVE)-

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
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
```
**(ABOVE)-  

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
   {
        "id": 4,
        "question": "== and != are expamples of?",
        "answers": ["An If Statement", "Bracket Notation", "For Loop", "A Conditional", "An Array Iterate"],
        "right_answer": "A Conditional"
    },
```
**(ABOVE)- 
---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray 

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link]
```

## Credits

Shout out to UC Berkeley Instructor Jerome Chenette and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



