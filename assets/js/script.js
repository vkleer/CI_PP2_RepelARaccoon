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
 * Select a random bush to spawn a raccoon in 
 */
function randomBush() {
    let gameBody = document.getElementById('game-section');
    let bushes = document.getElementsByClassName('bush');
    // Generate a random number between 1 and 8
    let randomBushNumber = Math.ceil(Math.random() * bushes.length);

    console.log(`Selected bush number ${randomBushNumber}`);
    return bushes[randomBushNumber];
}

createBushes();
randomBush();