// Global variables used to start/end the game and set the game timer
let GameState;
let GameTimer;

/**
 * Adds an event listener to the document when its loaded.
 * Grabs all elements with a class name of 'start-button', 'how-to-button' and 'home-button' and assigns each
 * HTMLCollection to its own variable. 
 * The 'startButtons' variable is looped through, each element being 
 * assigned an event listener, calling the pickDifficulty function when clicked on.
 * The 'howToButtons' and 'goBackButtons' variables are also looped through, each element being assigned an
 * event listener, calling the showSection function when being clicked on instead.
 */
document.addEventListener('DOMContentLoaded', function() {
    let startButtons = document.getElementsByClassName('start-button');
    let howToButtons = document.getElementsByClassName('how-to-button');
    let goBackButtons = document.getElementsByClassName('home-button');

    for (let button of startButtons) {
       
        button.addEventListener('click', pickDifficulty);
    }

    for (let button of howToButtons) {
        button.addEventListener('click', function() {
            showSection('how-to-play-section', 'How to Play');  
        });
    }

    for (let button of goBackButtons) {
        button.addEventListener('click', function() {
            showSection('home-section', `Gotta repel 'em all!`);
        });
    }

});
/**
 * Show the section that is given in the 'sectionId' parameter and set section title in the header equal 
 * to the value given in the 'newTitle' parameter.
 * Creates an array called 'sectionIds' containing all section id values in the index.html file and
 * adds the 'hide' class to all sections except the one with the id of 'sectionId'
 * @param {string} sectionId 
 * @param {string} newTitle 
 */
function showSection(sectionId, newTitle) {
    let sectionIds = ['home-section', 'difficulty-section', 'how-to-play-section', 'game-over-section', 'game-section'];
    let sectionTitle = document.getElementById('section-title');

    sectionTitle.innerText = newTitle;

    for (let allSections of sectionIds) {
        if (allSections === sectionId) {
            document.getElementById(sectionId).classList.remove('hide');
        } else {
            document.getElementById(allSections).classList.add('hide');
        }
    }
}
/**
 * Calls the showSection function and adds event listeners to the elements with an id of 'easy', 'normal'
 * and 'hard'. If clicked on, the startGame function is called with different parameters depending on the
 * difficulty that's been picked.
 */
function pickDifficulty() {
    showSection('difficulty-section', 'Choose your difficulty level');
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
 * Clears 'GameState' and 'GameTimer' intervals and calls the showSection function. The 'GameTimer' variable 
 * is set to an interval which calls the startTimer function every second. The 'GameState' variable is set to
 * an interval which calls the spawnRaccoon function, the frequency depending on the 'lifeSpan' parameter.
 * The elements with an id of 'time' and 'current-cheese' get assigned a value.
 * If there are no elements with a class name of 'cheese' present, a div with the id of 'cheeses' is created
 * and appended to the element with an id of 'game-section'. The createCheese function is called after.
 * If there are no elements with a class name of 'bush' present, a div with the id of 'game-body' is created
 * and appended to the element with an id of 'game-section'. The createBushes function is called after.
 * @param {string} difficulty
 * @param {number} lifeSpan
 * @param {number} bushNumber
 */
function startGame(difficulty, lifeSpan, bushNumber) {
    clearInterval(GameState);
    clearInterval(GameTimer);
    
    showSection('game-section', `Difficulty: ${difficulty}`);

    GameTimer = setInterval(startTimer, 1000);
    GameState = setInterval(function() {
        spawnRaccoon(lifeSpan)
    }, lifeSpan);

    document.getElementById('time').innerText = 30;
    document.getElementById('current-cheese').innerText = 5;

    if (document.getElementsByClassName('cheese').length === 0) {
        let cheeses = document.createElement('div');
        cheeses.setAttribute('id', 'cheeses');
        document.getElementById('game-section').appendChild(cheeses);
        createCheese();
    }

    if (document.getElementsByClassName('bush').length === 0) {
        let gameBody = document.createElement('div');
        gameBody.setAttribute('id', 'game-body');
        document.getElementById('game-section').appendChild(gameBody);
        createBushes(bushNumber);
    }
}
/**
 * Updates the element with the id of 'time' to show how much time is left before the game ends. 
 * If the timer reaches 0, the winGame function is called with the parameter set to true.
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
 * Clears 'GameState' and 'GameTimer' intervals and calls the showSection function without providing
 * a second parameter to keep showing the difficulty the game was played on.
 * Removes the elements with an id of 'game-body' and 'cheeses' and changes the content in the 
 * 'game-over-section' depending on whether the user won the game, lost the game, using the 'win' parameter.
 * The elements with an id of 'score' and 'current-cheese' are used to provide the user with feedback.
 * @param {boolean} win
 */
 function winGame(win) {
    clearInterval(GameState);
    clearInterval(GameTimer);
   
    showSection('game-over-section');

    document.getElementById('game-body').remove();
    document.getElementById('cheeses').remove();

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

   document.getElementById('score').innerText = 0;
}
/**
 * Creates div elements, the number of elements being equal to the 'bushNumber' parameter, 
 * gives them the 'bush' class and appends them to the element with the id of 'game-body'
 * @param {number} bushNumber
 */
function createBushes(bushNumber) {
    let gameBody = document.getElementById('game-body');
    let bushCount = 0;

    while (bushCount < bushNumber) {
        let bush = document.createElement('div');
        bush.classList.add('bush', 'empty');
        gameBody.appendChild(bush);
        bushCount++;
    }
}
/**
 * Creates div elements, the number of elements being equal to the 'cheeseAmount' variable,
 * gives them the 'cheese' class and appends them to the element with the id of 'cheeses'.
 */
 function createCheese() {
    let cheeses = document.getElementById('cheeses');
    let cheeseAmount = 5;
    let cheeseCount = 0;

    while (cheeseCount < cheeseAmount) {
        let cheese = document.createElement('div');
        cheese.classList.add('cheese');
        cheeses.appendChild(cheese);
        cheeseCount++;
    }
}
/** 
 * Calls the randomBush function on the 'bush' variable, creates a div element, gives it the 
 * 'raccoon' class and appends it to 'bush'. Removes the 'empty' class from 'bush'.
 * If the 'raccoon' element is clicked on or times out, it is removed and the 'empty' class is re-added 
 * to 'bush'. If clicked on, the incrementScore function is called and if it times out the takeCheese
 * function is called instead.
 * The setTimeout uses the 'lifeSpan' parameter to set the timer.
 * @param {number} lifeSpan
 */
 function spawnRaccoon(lifeSpan) {
    let bush = randomBush();
    let raccoon = document.createElement('div');

    raccoon.classList.add('raccoon');
    bush.appendChild(raccoon);
    bush.classList.remove('empty');

    raccoon.addEventListener('click', function() {
        bush.removeChild(raccoon);
        bush.classList.add('empty');
        incrementScore();
    });

    setTimeout(function() {  
        if (bush.contains(raccoon)) {
            bush.removeChild(raccoon);
            bush.classList.add('empty');
            takeCheese();
        }
    }, lifeSpan);
}
/** 
 * Gets all elements with a class of 'bush' and returns one of the elements by random selection. If the
 * selected element contains the 'empty' class, call the function again.
 */
function randomBush() {
    let bushes = document.getElementsByClassName('bush');
    // Generate a random number between 0 and 7
    let randomBushNumber = Math.floor(Math.random() * bushes.length);
    let currentBush = bushes[randomBushNumber];
    
    if (!currentBush.classList.contains('empty')) {
        return randomBush();
    }
    return bushes[randomBushNumber];
}
/** 
 * Updates the element with the 'score' id by incrementing its current value.
 * */ 
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * Updates the element with the 'current-cheese' id by subtracting its current value and calls the winGame 
 * function with the parameter set to 'false' if the element is equal to 0.
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