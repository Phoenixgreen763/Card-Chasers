document.addEventListener('DOMContentLoaded', () => {

    // Grab items
    const gameArea = document.querySelector('.game-board');
    const livesCount = document.querySelector('#lives');
    const rulesParagraph = document.getElementById('rules');
    let playerLives;
    let currentMode; // Variable to store the current game mode
    let countdownInterval;

    function startCountdown(mode) {
        clearInterval(countdownInterval); // Clear previous countdown interval if exists
        let timeLeft;
        if (mode === 'easy') {
            timeLeft = 5;
        } else if (mode === 'hard') {
            timeLeft = 10;
        }
        const countdownParagraph = document.getElementById('countdown');
        const initialCountdownHTML = countdownParagraph.innerHTML; // Store initial HTML content
        // Update the timer display before starting the interval
        countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time: ' + timeLeft;
        countdownInterval = setInterval(function () {
            if (timeLeft <= 0 || playerLives === 0) {
                clearInterval(countdownInterval);
                countdownParagraph.innerHTML = initialCountdownHTML; // Revert to initial HTML
                livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ';
                if (timeLeft <= 0 && !isGameWon()) {
                    alert('Out of time!');
                    restartGame(currentMode); // Call restartGame with the current mode only if the game is not won
                }
                return; // Exit the function after showing the alert
            }
            timeLeft--;
            countdownParagraph.innerHTML = '<i class="fa-solid fa-clock"></i>Time: ' + timeLeft; // Update the timer display
        }, 1000); // Update every second
    };
    
    
    // Function to check if the game is won
    function isGameWon() {
        const toggleCard = document.querySelectorAll('.toggleCard');
        return toggleCard.length === (currentMode === 'easy' ? 4 : 6);
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
        const toggleCard = document.querySelectorAll('.toggleCard')
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
                    alert('Try Again!');
                    restartGame(currentMode);
                }
            }
        }
        //Check if player has won
        if (toggleCard.length === 4) {
            setTimeout(() => {
                alert('You win!');
                restartGame(currentMode);
            }, 500);
        }
    };

    // Generate card data for hard mode
    const getCardsHard = () => [
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
        { imgSrc: "/assets/images/card3.jpg", name: "Album 3" },
        { imgSrc: "/assets/images/card1.jpg", name: "Album 1" },
        { imgSrc: "/assets/images/card2.jpg", name: "Album 2" },
        { imgSrc: "/assets/images/card3.jpg", name: "Album 3" },
    ];

    // Randomize card data for hard mode
    const randomizeHard = () => {
        const cardsHard = getCardsHard();
        cardsHard.sort(() => Math.random() - 0.5);
        return cardsHard;
    };

    // Generating cards for hard mode
    const cardGeneratorHard = () => {
        const cards = randomizeHard();
        console.log(cards);
        // Generate game HTML
        cards.forEach(item => {
            const card = document.createElement("div");
            const face = document.createElement('img');
            const back = document.createElement("div");
            card.classList = 'cardHard';
            face.classList = 'faceHard';
            back.classList = 'backHard';
            // Add information to each card
            face.src = item.imgSrc;
            card.setAttribute('number', item.name);
            // Add cards to game-board div
            gameArea.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener("click", (e) => {
                card.classList.toggle("toggleCard");
                checkCardsHard(e);
            });
        });
    };

    // Check if cards match function for hard mode
    const checkCardsHard = (e) => {
        console.log(e);
        const clickedCard = e.target;
        clickedCard.classList.add('flipped');
        const flippedCards = document.querySelectorAll('.flipped');
        const toggleCard = document.querySelectorAll('.toggleCard')
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
                    alert('Try Again!');
                    restartGame(currentMode);
                }
            }
        }
        //Check if player has won
        if (toggleCard.length === 6) {
            setTimeout(() => {
                alert('You win!');
                restartGame(currentMode);
            }, 500);
        }
    };

    const restartGame = (mode) => { // Receive mode as argument
        if (mode === 'easy') {
            let getCards = randomize();
            let face = document.querySelectorAll('.face');
            let card = document.querySelectorAll('.card');
            getCards.forEach((item, index) => {
                card[index].classList.remove('toggleCard');
                // On restart randomize all cards
                setTimeout(() => {
                    card[index].style.pointerEvents = 'all';
                    face[index].src = item.imgSrc;
                    card[index].setAttribute("number", item.name);
                    Section.style.pointerEvents = "all";
                }, 1000);
            });
        } else if (mode === 'hard') {
            let getCards = randomizeHard();
            let face = document.querySelectorAll('.faceHard');
            let card = document.querySelectorAll('.cardHard');
            getCards.forEach((item, index) => {
                card[index].classList.remove('toggleCard');
                // On restart randomize all cards
                setTimeout(() => {
                    card[index].style.pointerEvents = 'all';
                    face[index].src = item.imgSrc;
                    card[index].setAttribute("number", item.name);
                    Section.style.pointerEvents = "all";
                }, 1000);
            });
        }
        playerLives = (mode === 'easy') ? 2 : 3; // Set player lives based on the mode
        livesCount.innerHTML = '<i class="fa-solid fa-heart"></i>Lives: ' + playerLives;
        startCountdown(mode); // Start the countdown with the current mode
    };


    // Button click functions for game start

    //Remove hard mode cards from the board 
    const removeHardCards = () => {
        const hardCards = document.querySelectorAll('.cardHard');
        hardCards.forEach(card => {
            card.remove();
        });
    };
    const easyButton = document.getElementById('easy')

    easyButton.addEventListener('click', () => {
        removeHardCards();
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
        gameArea.style.height = '20em'
        updateButtonStates();
    });

    //Remove easy mode cards from the board 
    const removeEasyCards = () => {
        const easyCards = document.querySelectorAll('.card');
        easyCards.forEach(card => {
            card.remove();
        });
    };

    const hardButton = document.getElementById('hard')

    hardButton.addEventListener('click', () => {
        removeEasyCards();
        currentMode = 'hard'; // Set the current game mode
        startCountdown('hard');
        showLives('hard');
        cardGeneratorHard();
        randomizeHard();
        rulesParagraph.remove();
        gameArea.style.display = 'grid';
        gameArea.style.gridTemplateColumns = 'repeat(2, 10rem)';
        gameArea.style.gridTemplateRows = 'repeat(2, 10rem)';
        gameArea.style.gridGap = '2rem';
        gameArea.style.perspective = '800px';
        gameArea.style.height = '34em'
        updateButtonStates();
    });

    // Update button states based on currentMode
    function updateButtonStates() {
        if (currentMode === 'easy') {
            easyButton.disabled = true;
            hardButton.disabled = false;
        } else if (currentMode === 'hard') {
            easyButton.disabled = false;
            hardButton.disabled = true;
        }
    };
});