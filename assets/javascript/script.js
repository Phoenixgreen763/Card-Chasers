document.addEventListener('DOMContentLoaded', () => { 

    function startCountdown() {
        var timeLeft = 20;
        var countdownParagraph = document.getElementById('countdown');
    
        var countdownInterval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownParagraph.textContent = 'Countdown over!';
            } else {
                countdownParagraph.textContent = 'Time left: ' + timeLeft + ' seconds';
            }
            timeLeft--;
        }, 1000); // Update every second
    };

    document.getElementById('easy').addEventListener('click', function() {
        startCountdown();
    });
});