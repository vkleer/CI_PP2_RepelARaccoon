/**
 * Creates div elements where the racoons will spawn
 */
function createBushes() {
    let gameBody = document.getElementById('game-section');
    let bushNumber = 8;
    let bushCount = 0;

    while (bushCount < bushNumber) {
        let bush = document.createElement('div');
        bush.classList.add('bush');
        gameBody.appendChild(bush);
        console.log('Create a bush!');
        bushCount++
    }
}
/** 
 * Spawn a raccoon
 */
 function spawnRaccoon() {
    const spawnInterval = 2000;
    let bush = randomBush();
    let raccoon = document.createElement('div');
    raccoon.classList.add('raccoon');
    bush.appendChild(raccoon);

    setTimeout(function() {
        bush.removeChild(raccoon);
    }, spawnInterval);
}
/** 
 * Select a random bush to spawn a raccoon in 
 */
function randomBush() {
    let gameBody = document.getElementById('game-section');
    let bushes = document.getElementsByClassName('bush');
    // Generate a random number between 0 and 7
    let randomBushNumber = Math.floor(Math.random() * bushes.length);

    console.log(`Selected bush number ${randomBushNumber}`);
    return bushes[randomBushNumber];
}

createBushes();

setInterval(spawnRaccoon, 2000);