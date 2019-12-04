1. Start with a landing page
    * link to view high score
    * Timer
    * button to start game

2. when you click the start quiz button
    * landing text and button goes away
    * question is displayed 
    * 4 answer buttons are revealed
    * timer counts down from 75sec

3. when user selects an answer button
    * if user gets it right
        * increment win counter
    * if user gets it wrong 
        * reduce the time 

4. The timer stops when all questions have been answered or the timer reaches 0.
    * state game is over
    * revel final score
        * score is based on how much time is left
        * allot user to enter Initials to be add to high score table
        * when user hits submit button
            * reroute to highscores table
                * button to go back
                * button to clear highscore

<!-- notes -->
* build an array with question objects
* create a startQuiz function
    * hide landing page
    * reveal question 
    * set timer
    * runs getQuestion function
* time function
* function for add questions and answer dynamically

    