document.addEventListener('DOMContentLoaded', () => { 

    function startCountdown() {
        var timeLeft = 10;
        var countdownParagraph = document.getElementById('countdown');
    
        var countdownInterval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                alert('Game Over!');
            } else {
                countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time:' + timeLeft;
            }
            timeLeft--;
        }, 1000); // Update every second
    };

    function startGameEasy() {

    }

    document.getElementById('easy').addEventListener('click', function() {
        startCountdown();
    });

    document.getElementById('hard').addEventListener('click', function() {
        startCountdown();
    });

});