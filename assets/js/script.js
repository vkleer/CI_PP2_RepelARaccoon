/**
 * Creates div elements where the racoons will spawn
 */
function createBushes() {
    let gameBody = document.getElementById('game-section');
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
    const spawnInterval = 2000;
    let bush = randomBush();
    let raccoon = document.createElement('div');
    raccoon.classList.add('raccoon');
    bush.classList.remove('empty');

    bush.appendChild(raccoon);
    raccoon.addEventListener('click', function() {
        bush.removeChild(raccoon);
    })

    setTimeout(function() {
        if (bush.contains(raccoon)) {
            bush.removeChild(raccoon);
            bush.classList.add('empty');
        } else {
            console.log('There are no raccoons!');
        }
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
    let currentBush = bushes[randomBushNumber];
    
    if (!currentBush.classList.contains('empty')) {
        console.log('You already used this bush!');
        return randomBush();
    }
    console.log(`Selected bush number ${randomBushNumber}`);
    return bushes[randomBushNumber];
}

createBushes();
setInterval(spawnRaccoon, 1000);