let display = document.getElementById("display");
let timer = null;
let startTimer = 0;
let timeElapsed = 0;
let isRunning = false;
function start() {
    if (!isRunning) {
        startTimer = Date.now() - timeElapsed;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        startTimer = Date.now() - timeElapsed;
        clearInterval(timer);
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTimer = 0;
    timeElapsed = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update() {
    const currentTime = Date.now();
    timeElapsed = currentTime - startTimer;

    let hours = Math.floor(timeElapsed / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(timeElapsed / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(timeElapsed / (1000) % (60)).toString().padStart(2, 0);
    let milisec = Math.floor(timeElapsed % (1000) / 10).toString().padStart(2, 0);
    display.textContent = `${hours}:${minutes}:${seconds}:${milisec} `
}