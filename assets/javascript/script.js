document.addEventListener('DOMContentLoaded', () => {

    // Grab items
    const gameArea = document.querySelector('.game-board');
    const livesCount = document.querySelector('#lives');
    const rulesParagraph = document.getElementById('rules');
    let playerLives;
    let currentMode; // Variable to store the current game mode
    let countdownInterval;

    // Set game timer when buttons are pressed
    function startCountdown(mode) {
        clearInterval(countdownInterval); // Clear previous countdown interval if exists
        let timeLeft;
        if (mode === 'easy') {
            timeLeft = 10;
        } else if (mode === 'hard') {
            timeLeft = 20;
        }
        const countdownParagraph = document.getElementById('countdown');
        const initialCountdownHTML = countdownParagraph.innerHTML; // Store initial HTML content

        countdownInterval = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownParagraph.innerHTML = initialCountdownHTML; // Revert to initial HTML
                livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ';
                restartGame(currentMode); // Call restartGame with the current mode when the timer hits 0
                return; // Exit the function after showing the alert
            }
            countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time: ' + timeLeft;
            timeLeft--;
            // Reset timer if lives equal 0
            if (playerLives === 0) {
                clearInterval(countdownInterval);
                countdownParagraph.innerHTML = initialCountdownHTML; // Revert to initial HTML
                livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ';
                restartGame(currentMode); // Call restartGame with the current mode when lives equal 0
            }
        }, 1000); // Update every second
    };

    // Show player lives
    function showLives(clicked) {
        if (clicked === 'easy') {
            playerLives = 2; // Set lives for easy mode
        } else if (clicked === 'hard') {
            playerLives = 3; // Set lives for hard mode
        }
        console.log("Player Lives:", playerLives); // Debugging statement
        livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
    };

    // Generate card data
    const getCards = () => [
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
    ];

    // Randomize card data
    const randomize = () => {
        const cards = getCards();
        cards.sort(() => Math.random() - 0.5);
        return cards;
    };

    // Generating cards function
    const cardGenerator = () => {
        const cards = randomize();
        console.log(cards);
        // Generate game HTML
        cards.forEach(item => {
            const card = document.createElement("div");
            const face = document.createElement('img');
            const back = document.createElement("div");
            card.classList = 'card';
            face.classList = 'face';
            back.classList = 'back';
            // Add information to each card
            face.src = item.imgSrc;
            card.setAttribute('number', item.name);
            // Add cards to game-board div
            gameArea.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener("click", (e) => {
                card.classList.toggle("toggleCard");
                checkCards(e);
            });
        });
    };

    // Check if cards match function
    const checkCards = (e) => {
        console.log(e);
        const clickedCard = e.target;
        clickedCard.classList.add('flipped');
        const flippedCards = document.querySelectorAll('.flipped');
        console.log(flippedCards);
        // Check flipped cards
        if (flippedCards.length === 2) {
            if (flippedCards[0].getAttribute('number') ===
                flippedCards[1].getAttribute('number')
            ) {
                console.log('match');
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    card.style.pointerEvents = 'none';
                });
            } else {
                console.log('wrong');
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    setTimeout(() => card.classList.remove('toggleCard'), 1000)
                });
                playerLives--;
                console.log("Player Lives:", playerLives); // Debugging statement
                livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
                if (playerLives === 0) {
                    restartGame(currentMode);
                }
            }
        }
    };

    const restartGame = (mode) => {
        // Clear any existing countdown interval
        clearInterval(countdownInterval);
        
        // Reset player lives based on the mode
        playerLives = (mode === 'easy') ? 2 : 3;
    
        // Update lives count display
        livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
    
        // Restart the countdown with the current mode
        startCountdown(mode);
    
        // Get new randomized cards
        const cards = randomize();
    
        // Get all card elements
        const cardElements = document.querySelectorAll('.card');
    
        // Loop through each card and update its face
        cardElements.forEach((card, index) => {
            const face = card.querySelector('.face');
            // Set the new image source
            face.src = cards[index].imgSrc;
            // Remove any existing classes
            card.classList.remove('toggleCard', 'flipped');
            // Re-enable pointer events
            card.style.pointerEvents = 'all';
        });
    };
    
    
    

    // Button click functions for game start
    document.getElementById('easy').addEventListener('click', () => {
        currentMode = 'easy'; // Set the current game mode
        startCountdown('easy');
        showLives('easy');
        cardGenerator();
        randomize();
        rulesParagraph.remove();
        gameArea.style.display = 'grid';
        gameArea.style.gridTemplateColumns = 'repeat(2, 10rem)';
        gameArea.style.gridTemplateRows = 'repeat(2, 10rem)';
        gameArea.style.gridGap = '2rem';
        gameArea.style.perspective = '800px';
    });

    document.getElementById('hard').addEventListener('click', () => {
        currentMode = 'hard'; // Set the current game mode
        startCountdown('hard');
        showLives('hard');
    });
});


