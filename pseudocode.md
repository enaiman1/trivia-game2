1. Start with a landing page
    * link to view high score
    * Timer
    * button to start game
    * game description and rules

2. when you click the start quiz button
    * landing text and button goes away
    * question is displayed 
    * 4 choices/option buttons are revealed
    * timer counts down 
        * time is based off 15 sec for each question in the game

3. when user selects an choices/option button
    * if user gets it right
        * increment correct counter
    * if user gets it wrong 
        * reduce the time 
            * time penality is -15sex

4. The timer stops when all questions have been answered or the timer reaches 0.
    * state game is over
    * revel final score
        * score is based on how much time is left
        * allow user to enter Initials to be added to high score table
        * when user hits submit button
            * reroute to highscores table
                * button to go back
                * button to clear highscore

------- notes for building logic.js----------
* build an array with question objects
* create a startQuiz function
    * hide landing page
    * reveal question 
    * set timer
    * runs getQuestion function
* create on click for startQuiz function
* time function
* function for adding questions and answer dynamically
* function to cycle through questions
    * validate right or wrong
        * if wrong
            * reduce time
            * goes to next question
        * if right
            * modal stating correct 
            * goes to next question
    * if no more questions for go to result screen
        * hide questions
        * reveal the results screen
* function that will show the result when game is over
    * final score will be the result of time left
    * hide the div that holds the question 
* function to save high score
    * allows user to write initial
    * push score into local storage, to save for future storage
    * add a redirect to highscore.html
* create on click for the high scores function

    ------- notes for building scores.js----------
    * function to print Highscores
        * retrieve and parse object from local storage into string
        * sort scores from highest to lowest
        * display score on page

    * function to allow user to clear the highschores
        * tap into local storage
            *removeItem
            *reload
    * create click event for the clearHighscores function