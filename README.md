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
 if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Your character length needs to be a number, 8 - 128 digets. Please try again.");
    return false;
  }
  
  if (confirm("Do you want to use special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
    console.log("choiceArray", choiceArray)
  }
```

**(ABOVE)- I learned alot about creating arrays (which are a sequence of values). They are a visual representation of repeated addition or multiplication. I learned how to declare a variable with an array type and then create the array itself. 

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
     generateBtn.addEventListener("click", typePassword);
```

**(ABOVE)- DOM Event Listners, after studing I learned that they "listen" for and action, then calls a function that performs a related task. In this example of code that is placed above, it is attaching an event handler to the specified element without overiding exsiting event handlers. 

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
 for (var x = 0; x < characterLength; x++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex]
  }
  console.log("password", password)
  return password;
}
```
**(ABOVE)- I used this and found Math.floor(Math.random)() interesting. Math.floor is a method used to round off the number passed as a parameter to it's nearest integar in a Downward direction of rounding i.e. towards the lesser value. Then using Math.random, it will use a function to return a floating-point psuedo-random number between the range [0-1), 0 (inclusive), and 1 (exclusive). 

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
  if (confirm("Do you want to use upper case letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
    console.log("choiceArray", choiceArray)
 }
```
**(ABOVE)- Concat. I spent some time researching this. I learned that it was a method that joins two or more arrays together. It will then return a new array containing the joined arrays BUT will never change the exsisting arrays. 


---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray 

* [LinkedIn](https://www.linkedin.com/in/amanda-gray-831a65254/)

* [Deployed Application link] https://berkeleycodingmomma.github.io/password-generator/
```

## Credits

Shout out to UC Berkeley Instructor Jerome Chenette) and his TA's, Manuel Nunes, Kyle Vance, and James Harding! 



© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



