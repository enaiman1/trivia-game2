// variables to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15
let timerId

// variables to reference Dom elements
const questionEl = document.getElementById("questions");
const timerEl = document.getElementById("time");
const choicesEl = document.getElementById("choices");
const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit");
const initialsEl = document.getElementById("initials");
const feedbackEl = document.getElementById("feedback");

// this function starts the game
function startQuiz() {
    // hides land page
    var startScreen = document.getElementById("landingPage")
    startScreen.setAttribute("class", "hide")

    // un-hide question section
    questionEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clock, 1000);

    // show starting time
    timerEl.textContent = time;

    // run getQuestion function
    getQuestion();
}

// this function dynamically adds question and answers to the page
function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update title with current questions
    var titleEl = document.getElementById("questionTitle");
    titleEl.textContent = currentQuestion.question;

    //clear out any old question choices
    choicesEl.innerHTML = ""

    // loop over choices
    currentQuestion.choices.forEach(function(choice, i){
        // create new button for each choice
        var choiceOption = document.createElement("button");
        choiceOption.setAttribute("class", "choice");
        choiceOption.setAttribute("value", choice);

        choiceOption.textContent = i + 1 + ". " + choice;

        // attaches click event listener to each choice
        choicesEl.appendChild(choiceOption);
    });
}




function clock(){
    // update time
    time--
    timerEl.textContent = time;
    // check if user ran out of time
    if ( time <=0 ){
        // run quiz end function
        
    }
}

// starts game
startBtn.onclick = startQuiz;
