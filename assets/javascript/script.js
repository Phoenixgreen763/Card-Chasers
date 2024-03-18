document.addEventListener('DOMContentLoaded', () => {

    //Grab items
    const gameArea = document.querySelector('.game-board');
    const livesCount = document.querySelector('#lives');
    let playerLives;

    //Show player lives
    function showLives(clicked) {
        if (clicked === 'easy') {
            playerLives = 2; // Set lives for easy mode
        } else if (clicked === 'hard') {
            playerLives = 3; // Set lives for hard mode
        }
        livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
    }

    //Generate card data
    const getCards = () => [
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
    ];

    //Randomize card data
    const randomize = () => {
        const cards = getCards();
        cards.sort(() => Math.random() - 0.5);
        return cards;
    };

    //Generating cards function
    const cardGenerator = () => {
        const cards = randomize();
        console.log(cards);
        //Generate game HTML
        cards.forEach(item => {
            const card = document.createElement("div");
            const face = document.createElement('img');
            const back = document.createElement("div");
            card.classList = 'card';
            face.classList = 'face';
            back.classList = 'back';
            //Add information to each card
            face.src = item.imgSrc;
            //Add cards to game-board div
            gameArea.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);
        });

    };

    cardGenerator();

    randomize();

    //Set game timer when buttons are pressed
    let countdownInterval;

    function startCountdown(mode) {
        clearInterval(countdownInterval); // Clear previous countdown interval if exists
        let timeLeft;
        if (mode === 'easy') {
            timeLeft = 10
        } else if (mode === 'hard') {
            timeLeft = 20
        };
        var countdownParagraph = document.getElementById('countdown');

        countdownInterval = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time: '; // Update display to show 0 when the timer reaches 0
                livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: '
                alert('Game Over!');
            } else {
                countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time: ' + timeLeft;
            }
            timeLeft--;
        }, 1000); // Update every second
    }

    //Easy mode function
    function startGameEasy() {

    }

    //Hard mode function
    function startGameHard() {

    }

    //Button click funtions for game start
    document.getElementById('easy').addEventListener('click', function () {
        startCountdown('easy');
        showLives('easy');
        startGameEasy();
    });

    document.getElementById('hard').addEventListener('click', function () {
        startCountdown('hard');
        showLives('hard');
        startGameHard();
    });

});