document.addEventListener('DOMContentLoaded', () => {

    const section = document.querySelector('section');
    const livesCount = document.querySelector('#lives');
    let playerLives;

    function showLives(clicked) {
        if (clicked === 'easy') {
            playerLives = 2; // Set lives for easy mode
        } else if (clicked === 'hard') {
            playerLives = 3; // Set lives for hard mode
        }
        livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
    }

    let countdownInterval; 

    function startCountdown() {
        clearInterval(countdownInterval); // Clear previous countdown interval if exists
        var timeLeft = 10;
        var countdownParagraph = document.getElementById('countdown');

        countdownInterval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                alert('Game Over!');
            } else {
                countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time:' + timeLeft;
            }
            timeLeft--;
        }, 1000); // Update every second
    }

    function startGameEasy() {
        
    }

    function startGameHard() {
        
    }

    document.getElementById('easy').addEventListener('click', function() {
        showLives('easy');
        startCountdown();
        startGameEasy();
    });

    document.getElementById('hard').addEventListener('click', function() {
        showLives('hard');
        startCountdown();
        startGameHard();
    });

});