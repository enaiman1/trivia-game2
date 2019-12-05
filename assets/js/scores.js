// this function is used to print highscores
function showHighscores(){
    // this will get score from local storage or if not score set an empty array
    var highscores= JSON.parse(window.localStorage.getItem("highscores")) || []

    // sort highscore propety in descending order
    hishscores.sort(function(a,b){
        return b.score - a.score;
    });
    // this function will create an li tag for each high score
    highscores.forEach(function(score){
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score

        // this will display it on the page
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

// this function allows user to clear the highscores from their local storage
function clearHighscores(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// on click event to clear the highscores
document.getElementById("clear").onclick = clearHighscores;
// run function when page loads
showHighscores()