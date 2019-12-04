// variables to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15
let timerId

// variables to reference Dom elements
const questionEl = document.getElementById("questions");
const timerEl = document.getElementById("time");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("intials");
const feedbackEl = document.getElementById("feedback");
