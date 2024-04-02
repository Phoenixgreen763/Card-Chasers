# Card-Chasers


## Summary 

Card Chasers is a memory matching card game, that can be enjoyed by users of all ages. The game seeks to engage players in a fun and challenging activity by allowing them to race against the clock, in an effort to match all the cards, or risk losing their lives. The game is comprised of two modes, so each user can test their skills further !

View the live website here - https://phoenixgreen763.github.io/Card-Chasers/ 

![UX Mockup](/assets/images/UXmockup.png)

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

![Buttons section](/assets/images/button.png)

* Easy Mode 
    * Clicking the easy button starts the easy mode for the player, and removes the hard game from the game board
    * The button then becomes inactive to stop any bugs occuring, whilst the game is already displayed
    * This mode displays 2 sets of cards on the game board, a 5 second timer, and 2 lives for the player
    * If a player matches 2 incorrect cards, they lose a life
    * Each set is chosen at random and then displayed, this keeps the game fresh as to not repeat the same image over, and over.
    
    ![Easy Mode Cards](/assets/images/Easy.png)

    * If the player runs out of time, they are met with a "Time's Up!" message, and the game then restarts.
    
    ![Times Up Popup](/assets/images/TimesUp.png)

    * If the player runs out of lives, they are met with a "Try Again!" message, and the game then restarts

    ![Try Again Popup](/assets/images/TryAgain.png)

    * If a player matches all the cards on the board, they are met with a "You Win!" message, and the game then restarts

    ![You Win Popup](/assets/images/YouWin.png)

* Hard Mode 
    * Clicking the hard button starts the hard mode for the player, and removes the easy game from the game board
    * The button then becomes inactive to stop any bugs occuring, whilst the game is already displayed
    * This mode displays 3 sets of cards on the game board, a 10 second timer, and 3 lives for the player
    ![Hard Mode Cards](/assets/images/Hard.png)
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

* Modal Popup
    * Instead of using alerts, a modal popup could be put in its place to better fit
    * This would give a more visually appealing message on the page 

## User Stories

* User - A
    * User A is a young child, and is using the site for a learning game
    * This will help develop cognitive ability and test their memory
    * It is also a fun experience for them to play

* User - B
    * User B is a teenager, they are using the site for fun
    * This user decides to pick the hard mode to test themselves 
    * The user is kept engaged with the randomisation of the images being displayed

* User - C
    * This user is the site developer, using the site for testing and fun
    * They are using the website as it is something they themselves enjoy and find engaging to interact with

## Testing

The testing done on the project consisted of automated validator testing to discover any errors in the code, and things such as lighthouse were used, this was done to optomise page loading or any potential issues. Also manual user testing to find potential bugs. The decision was made not to build using tests as it was not deemed necessary, for such a game user testing seemed much more valuable.

## Manual Testing

* The site was tested by multiple freinds and family
* Everyone found the design to be visually appealing and readable
* Everyone found the game engaging and fun with the interactive nature of the game
* The site has been tested on numerous browsers, such as chrome, opera gx, and safari
    * Some outdated versions of safari may not load images, however, this was discovered on an old macbook, with an older version of safari running

## Validator Testing 

* CSS Validator 
    * [CSS results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fphoenixgreen763.github.io%2FCard-Chasers%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    * ![CSS results image](/assets/images/CSS.png)

* HTML Validator
    * [HTML results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fphoenixgreen763.github.io%2FCard-Chasers%2F)
    * ![HTML results image](/assets/images/HTML.png)

* Light House Testing
    * Lighthouse was used to check for errors or optimisation issues
    * The page achieved an overall score of 96
    * The images were compressed to improve load times 
    * ![Lighthouse Score](/assets/images/Lighthouse.png)

## All Known Bugs

* If a user clicks all the buttons too quickly they get a win, and a loss message. I have tried fixing this with a few methods but it is still apparent at times.

* The game window may not fill bigger screens above 1400 px on some devices/Monitors

## Design

* Fonts
   * Google fonts were used
   * The font used for all the text is Merienda as it was stylistic, yet maintained readability 
   * A font effect of outlined was also added to make the text stand out on the page

* Color design
    * The colors used to represent the site were chosen to replicate a "casino"/card game style
    * These colors are consistent through the background design, and all the text on page

* Images
    * The cards themselves are images, are all "album covers" of different styles
    * This was done to give a spin on the classic game cards that are typically used

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


