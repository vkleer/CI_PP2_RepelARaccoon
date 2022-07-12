// Global variable to start/stop game and timer
let GameState;
let GameTimer;
// Set the script to start the game on the start button
// when the DOM has finished loading
document.addEventListener('DOMContentLoaded', function() {
    let startButtons = document.getElementsByClassName('start-button');
    let howToButtons = document.getElementsByClassName('how-to-button');
    let goBackButtons = document.getElementsByClassName('home-button');
    // Add startGame function to all buttons with start-button class
    for (let button of startButtons) {
       
        button.addEventListener('click', pickDifficulty);
    }
    // Add howToPlay function to all buttons with how-to-button class
    for (let button of howToButtons) {
        button.addEventListener('click', howToPlay);
    }
    // Add goBack function to all buttons with home-button class
    for (let button of goBackButtons) {
        button.addEventListener('click', goBack);
    }
});
function pickDifficulty() {
    // Set the title of the section
    document.getElementById('section-title').innerText = 'Choose your difficulty level';
    // Hide the home-section and show the difficulty-section
    document.getElementById('home-section').classList.add('hide');
    document.getElementById('game-over-section').classList.add('hide');
    document.getElementById('how-to-play-section').classList.add('hide');
    document.getElementById('difficulty-section').classList.remove('hide');
    // Get the buttons to set difficulty with
    let easyButton = document.getElementById('easy');
    let normalButton = document.getElementById('normal');
    let hardButton = document.getElementById('hard');
    // Sets the game difficulty to easy
    easyButton.addEventListener('click', function() {
        startGame('Easy', 1000, 3)
    });
    // Sets the game difficulty to normal
    normalButton.addEventListener('click', function() {
        startGame('Normal', 800, 6)
    });
    // Sets the game difficulty to hard
    hardButton.addEventListener('click', function() {
        startGame('Hard', 600, 9)
    });
}
/**
 * Shows game instructions
 */
function howToPlay() {
    // Set the title of the section
    document.getElementById('section-title').innerText = 'How to Play'
    // Hide the home-section and show the how-to-play-section
    document.getElementById('home-section').classList.add('hide');
    document.getElementById('game-over-section').classList.add('hide');
    document.getElementById('how-to-play-section').classList.remove('hide');
}
function goBack() {
    // Set the title of the section
    document.getElementById('section-title').innerText = `Gotta repel 'em all!`;
    // Hides the section the user is currently in and go back to home-section
    document.getElementById('how-to-play-section').classList.add('hide');
    document.getElementById('difficulty-section').classList.add('hide');
    document.getElementById('home-section').classList.remove('hide');
}
/** 
 * 
 * Starts the game
 */
function startGame(difficulty, lifeSpan, bushNumber) { // Add parameters for time and difficulty level
    // Clear GameState and GameTimer to avoid duplicating setInterval
    clearInterval(GameState);
    clearInterval(GameTimer);
    // Set the title of the section
    document.getElementById('section-title').innerText = `Difficulty: ${difficulty}`;
    // Set time for game
    let time = 5;
    document.getElementById('time').innerText = time;
    GameTimer = setInterval(startTimer, 1000);
    // Set raccoon spawn speed
    GameState = setInterval(function() {
        spawnRaccoon(lifeSpan)
    }, lifeSpan);
    // Set cheese amount and show game-section
    cheeseAmount = 5;
    document.getElementById('current-cheese').innerText = cheeseAmount;
    document.getElementById('difficulty-section').classList.add('hide');
    document.getElementById('game-section').classList.remove('hide');
    // Call createCheese is no cheese currently exists
    if (document.getElementsByClassName('cheese').length === 0) {
        // Add cheeses to game-section
        let cheeses = document.createElement('div');
        cheeses.setAttribute('id', 'cheeses');
        document.getElementById('game-section').appendChild(cheeses);
        // Call createCheese is no cheese currently exists
        createCheese();
    }
    // Call createBushes if no bushes currently exist
    if (document.getElementsByClassName('bush').length === 0) {
        // Add game-body to game-section 
        let gameBody = document.createElement('div');
        gameBody.setAttribute('id', 'game-body');
        document.getElementById('game-section').appendChild(gameBody);
        // Call createBushes if no bushes currently exist
        createBushes(bushNumber);
    }
}
/**
 * Timer function
 */
function startTimer() {
    let oldTime = parseInt(document.getElementById('time').innerText);
    if (oldTime !== 1) {
        document.getElementById('time').innerText = --oldTime;
    } else {
        document.getElementById('time').innerText = 0;
        winGame(true);
    }
}
/**
 * Checks if the user won or lost
 */
 function winGame(win) {
    // Stop spawning raccoons and stop timer 
   clearInterval(GameState);
   clearInterval(GameTimer);
   // Hide the game-section and show game-over-section
   document.getElementById('game-section').classList.add('hide');
   document.getElementById('game-over-section').classList.remove('hide');
   // Remove game-body
   document.getElementById('game-body').remove();
   // Remove cheeses
   document.getElementById('cheeses').remove();
   // Get the score
    let score = parseInt(document.getElementById('score').innerText);
    let cheeseLeft = parseInt(document.getElementById('current-cheese').innerText);

    if (win === true && cheeseLeft === 5) {
        document.getElementById('game-over-title').innerText = 'You Won!'
        document.getElementById('game-over-text').innerText = `
        You've successfully repelled all the raccoons, and more importantly, kept all of your cheese - well done!
        You got a perfect score of ${score}!
        Want to play again?`;
    } else if (win === true) {
        document.getElementById('game-over-title').innerText = 'You Won!'
        document.getElementById('game-over-text').innerText = `
        You've managed to repel almost all of the raccoons, good job!
        You got a score of ${score} and have ${cheeseLeft} cheeses left.
        Want to try and get a perfect score this time?`;
    } else {
        document.getElementById('game-over-title').innerText = 'Game Over!'
    if (score !== 0) {
        document.getElementById('game-over-text').innerText = `
        You tried your best, but these pesky raccoons managed to steal all of your cheese.
        You did get a score of ${score} though, not bad!
        Want to play again?`;
    } else {
        document.getElementById('game-over-text').innerText = `
        It looks like you didn't repel any of the raccoons - perhaps read the game instructions and try again?`;
    }
    }
   // After the score has been grabbed and displayed, set it back to 0
   document.getElementById('score').innerText = 0;
}
/**
 * Creates div elements where the racoons will spawn
 */
function createBushes(bushNumber) {
    let gameBody = document.getElementById('game-body');
    let bushCount = 0;

    while (bushCount < bushNumber) {
        let bush = document.createElement('div');
        bush.classList.add('bush', 'empty');
        gameBody.appendChild(bush);
        console.log('Create a bush!');
        bushCount++;
    }
}
/**
 * Creates div elements that represent cheese
 */
 function createCheese() {
    let cheeses = document.getElementById('cheeses');
    let cheeseAmount = 5;
    let cheeseCount = 0;

    while (cheeseCount < cheeseAmount) {
        let cheese = document.createElement('div');
        cheese.classList.add('cheese');
        cheeses.appendChild(cheese);
        console.log('Created some cheese!');
        cheeseCount++;
    }
}
/** 
 * Spawn a raccoon
 */
 function spawnRaccoon(lifeSpan) { // set parameter to use for lifespan
    let bush = randomBush();
    let raccoon = document.createElement('div');
    // Add raccoon class to div and remove empty class from bush
    raccoon.classList.add('raccoon');
    bush.classList.remove('empty');
    // Add event listener to check for clicks
    bush.appendChild(raccoon);
    raccoon.addEventListener('click', function() {
        bush.removeChild(raccoon);
        bush.classList.add('empty');
        incrementScore();
    });
    // Removes raccoon from game after timer
    setTimeout(function() {  
        if (bush.contains(raccoon)) {
            bush.removeChild(raccoon);
            bush.classList.add('empty');
            takeCheese();
        } else {
            console.log('There are no raccoons!');
        }
    }, lifeSpan);
}
/** 
 * Select a random bush to spawn a raccoon in 
 */
function randomBush() {
    let bushes = document.getElementsByClassName('bush');
    // Generate a random number between 0 and 7
    let randomBushNumber = Math.floor(Math.random() * bushes.length);
    let currentBush = bushes[randomBushNumber];
    
    if (!currentBush.classList.contains('empty')) {
        console.log('You already used this bush!');
        return randomBush();
    }
    console.log(`Selected bush number ${randomBushNumber}`);
    return bushes[randomBushNumber];
}
/** 
 * Gets the current score from the DOM and increments it by 1
 * */ 
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * Gets the current cheese from the DOM and reduces it by 1
 */
function takeCheese() {
    let oldCheeseAmount = parseInt(document.getElementById('current-cheese').innerText);
    let cheeseBlocks = document.getElementsByClassName('cheese');

    if (oldCheeseAmount !== 0) {
        document.getElementById('current-cheese').innerText = --oldCheeseAmount;
        cheeseBlocks[0].remove();
        if (oldCheeseAmount === 0) {
            document.getElementById('current-cheese').innerText = 0;
            winGame(false);
        }
    } 
}