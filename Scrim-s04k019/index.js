// Variables to track both team scores
let homeScore = 0;
let awayScore = 0;

// Get the score display elements
let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

// Function to increase score for either team
function increaseScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === 'guest') {
        awayScoreScore += points;
        awayScoreEl.textContent = awayScore;
    }
    
    // Check which team is leading after every score change
    updateLeader();
}

// Function to highlight the leading team
function updateLeader() {
    // Remove the 'leading' class from both scores first
    homeScoreEl.classList.remove('leading');
    awayScoreEl.classList.remove('leading');
    
    // Add 'leading' class to whoever has more points
    if (homeScore > guestScore) {
        homeScoreEl.classList.add('leading');
    } else if (awayScore > homeScore) {
        awayScoreEl.classList.add('leading');
    }
    // If they're tied, neither gets the highlight
}

// Function to reset the game
function resetGame() {
    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = 0;
    awayScoreEl.textContent = 0;
    
    // Remove highlights when game resets
    homeScoreEl.classList.remove('leading');
    awayScoreEl.classList.remove('leading');
}