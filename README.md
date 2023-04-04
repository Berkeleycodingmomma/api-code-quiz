# api-code-quiz
Creating a Web APIs Challenge Code Quiz
# A timed quiz with multiple choice questions

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 

Wrapping javaScript functions: https://www.chainshot.com/article/wrapping-functions

Researching: https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array

Understanding timer.innerhtml: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

Local storage in javaScript: https://www.makeuseof.com/localstorage-javascript/

Google free back-ground image search: https://lh3.googleusercontent.com/AxNH1OPwLn8uEU-J6-EgbDtdlHzo71vALcVR3Jv5wOrYnZBJrJUEuuK8kxBqK7mWKTG1ooWlAQ7fQWIN-SSJtX82vEtCfhJeMwRMmw7BwQ




## Description 
I created an application where a user can take a timed quiz by the pushing the start button. The timer starts as the user is presented with the first out of four questions. When answered incorectly, time is subtracted from the clock. When all the answers are answered or the timer runs out, the quiz game is over. The user then inputs their initials and saves their score. The highest score is announced and the user will have the option to try again and/or clear high scores.

 <img src="./assets/images/Screen Shot 2023-04-03 at 5.56.37 PM.png" alt="screen-shot">

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

**(ABOVE)- I learned that the JSON.parse method converts a JSON string into a javaScript object (or an array), but there’s room to transform that data at the same time. It allows a server to efficiently store data that can then be easily converted into the user interface by converting it back to JavaScript.



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

**(ABOVE)- I figured out that using the innerHTML property, it can set or return the HTML content (inner HTML) of an element.

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
**(ABOVE)- Here I figured out that the parseFloat() method parses its first argument to a string and returns the first number. I also learned the syntax for adding code inside a string

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
   {
        "id": 4,
        "question": "== and != are expamples of?",
        "answers": ["An If Statement", "Bracket Notation", "For Loop", "A Conditional", "An Array Iterate"],
        "right_answer": "A Conditional"
    },
```
**(ABOVE)- This is an example of an object where I have a question to be asked. Below that I have an array of four possible answers. If the user chooses "A conditional", that will be recognozed as the right answer. 

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray 

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link](
```

## Credits

Shout out to UC Berkeley Instructor Jerome Chenette and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



