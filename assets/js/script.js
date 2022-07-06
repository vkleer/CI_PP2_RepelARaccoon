// Set the script to start the game on the start button
// when the DOM has finished loading
document.addEventListener('DOMContentLoaded', function() {
    let startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startGame);
    // Creates a global variable that starts and stops the game
    let GameState;
});
/** 
 * Starts the game
 */
function startGame() {
    createBushes();
    GameState = setInterval(spawnRaccoon, 1000);
    document.getElementById('home-section').classList.add('hide');
    document.getElementById('game-section').classList.remove('hide');
    
}
/**
 * Creates div elements where the racoons will spawn
 */
function createBushes() {
    let gameBody = document.getElementById('game-body');
    let bushNumber = 8;
    let bushCount = 0;

    while (bushCount < bushNumber) {
        let bush = document.createElement('div');
        bush.classList.add('bush', 'empty');
        gameBody.appendChild(bush);
        console.log('Create a bush!');
        bushCount++
    }
}
/** 
 * Spawn a raccoon
 */
 function spawnRaccoon() {
    // Sets the lifespan of raccoon
    const spawnInterval = 2000;
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
    })

    setTimeout(function() {
        if (bush.contains(raccoon)) {
            bush.removeChild(raccoon);
            bush.classList.add('empty');
            takeCheese();
        } else {
            console.log('There are no raccoons!');
        }
    }, spawnInterval);
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

    if (oldCheeseAmount !== 0) {
        document.getElementById('current-cheese').innerText = --oldCheeseAmount;
    } else {
        // Stop the game, hide the game-section
        clearInterval(GameState);
        document.getElementById('game-section').classList.add('hide');
        console.log('Game over!');
    }
}