# Card-Chasers


## Summary 

Card Chasers is a memory matching card game, that can be enjoyed by users of all ages. The game seeks to engage players in a fun and challenging activity by allowing them to race against the clock, in an effort to match all the cards, or risk losing their lives. The game is comprised of two modes, so each user can test their skills further !

View the live website here - https://phoenixgreen763.github.io/Card-Chasers/ 

![UX Mockup](/assets/images/UXmockup.jpg)

## Features 

### Existing features

* Landing page
    * The user is first introduced to the basic landing page.
    * This page shows the name of the site as the heading, it is displayed clear and easily readable for users.
    * This page shows the rules section, and both difficulty buttons.
    * The styling across the entirety of the site is consistent and easy to read.
  
![Landing Page](/assets/images/LandingPage.png)

* Rules
    * The main landing page of the site displays a set of rules.
    * These rules give a brief and concise explanation of the game to the player
    * These rules allow the user an easy understanding of the game without having to read external content.

![Rules Section](/assets/images/rules.png)

* Buttons 
    * The Main landing page of the site also displays a set of buttons
    * These buttons allow the players to access the seperate modes for different difficulties.

![Buttons section](/assets/images/buttons.png)

* Easy Mode 
    * Clicking the easy button starts the easy mode for the player, and removes the hard game from the game board
    * The button then becomes inactive to stop any bugs occuring, whilst the game is already displayed
    * This mode displays 2 sets of cards on the game board, a 5 second timer, and 2 lives for the player
    * If a player matches 2 incorrect cards, they lose a life
    * Each set is chosen at random and then displayed, this keeps the game fresh as to not repeat the same image over, and over.
    
    ![Easy Mode Cards]()

    * If the player runs out of time, they are met with a "Time's Up!" message, and the game then restarts.
    
    ![Times Up Popup]()

    * If the player runs out of lives, they are met with a "Try Again!" message, and the game then restarts

    ![Try Again Popup]()

    * If a player matches all the cards on the board, they are met with a "You Win!" message, and the game then restarts

    ![You Win Popup]()

* Hard Mode 
    * Clicking the hard button starts the hard mode for the player, and removes the easy game from the game board
    * The button then becomes inactive to stop any bugs occuring, whilst the game is already displayed
    * This mode displays 3 sets of cards on the game board, a 10 second timer, and 3 lives for the player
    ![Hard Mode Cards]()
    * If a player matches 2 incorrect cards, they lose a life
    * Each set is chosen at random and then displayed, this keeps the game fresh as to not repeat the same image over, and over
    * Each of the popup messages remain consistent for both easy and hard modes

### Features to Implement

* Score Tracker
    * A tracker could be implemented to keep score of the number of wins a player attains in a row
    * This would allow the user to keep track of their wins
    * This would also give the user an additional challenge of attempting to gain a higher score
    * This feature could then be used to add information to a leaderboard

* Leaderboard 
    * A score leaderboard is also a potential feature to include in future
    * This would give users the ability to track their own highscore and challenge other players
    * This again adds an additional level of fun and competitive nature to the game

* User Details
    * Inputs such as the users name could be required before play
    * This feature would allow us to cache the users info and remember them when they return
    * This information could be used in conjuction with something like a leaderboard to track highscores

## User Stories

* User - A

* User - B

* User - C

## Testing

## Validator Testing 

* CSS Validator 

* HTML Validator

## All Known Bugs

* If a user clicks all the buttons too quickly they get a win, and a loss message. I have tried fixing this with a few methods but it is still apparent at times.

* The game window does not fill bigger screens above 1400 px on some devices

## Design

## Deployment Of The Website

* The website was deployed to GitHub. The steps to deploy are shown, as follows:
    * In the GitHub repository, navigate to the Settings tab
    * Scroll down to GitHub pages and click "Check it out here!"
    * Under "Source" ensure you select "main"
    * Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon to display and indicate the successful deployment.

The live link can be found here - https://phoenixgreen763.github.io/Card-Chasers/

## Technologies Used

* HTML5
* CSS
* JavaScript

## Credits

* Code
    * Perplexity ai was used to search for base ideas, these are the links for the source material. https://www.jamesqquick.com/blog/build-a-javascript-memory-match-game/, https://marina-ferreira.github.io/tutorials/js/memory-game/. These were used as core concepts for research. The final code for card chasers, does not reflect this work.

* Content
    * All content was written by the developer

* Imagery
    * All images came from shuttershock.

* Icons
    * All icons were sourced from fontawesome. They have been used on the lives and time bars to give a visually appealing appearance.
    
* Acknowledgements
    * My Mentor Rahul for advice when planning, and tips for area of improvement.


