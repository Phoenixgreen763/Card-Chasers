document.addEventListener('DOMContentLoaded', () => { 

    function startCountdown() {
        var timeLeft = 10;
        var countdownParagraph = document.getElementById('countdown');
    
        var countdownInterval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                alert('Game Over!');
            } else {
                countdownParagraph.textContent = 'Time: ' + timeLeft;
            }
            timeLeft--;
    
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                alert('Game Over!');
            }
        }, 1000); // Update every second
    }

    document.getElementById('easy').addEventListener('click', function() {
        startCountdown();
    });
});