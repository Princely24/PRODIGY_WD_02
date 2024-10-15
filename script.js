let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

// Format time as HH:MM:SS
function formatTime(time) {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

// Start the stopwatch
document.getElementById('startBtn').addEventListener('click', function() {
    startTime = Date.now() - elapsedTime; 
    timerInterval = setInterval(updateDisplay, 1000); 
});

// Pause the stopwatch
document.getElementById('pauseBtn').addEventListener('click', function() {
    clearInterval(timerInterval); 
});

// Reset the stopwatch
document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(timerInterval); 
    startTime = Date.now(); 
    elapsedTime = 0; 
    document.getElementById('display').textContent = "00:00:00"; 
    document.getElementById('laps').innerHTML = ""; 
    lapCount = 0; 
});

// Capture lap time
document.getElementById('lapBtn').addEventListener('click', function() {
    lapCount++; 
    let lapTime = formatTime(elapsedTime); 
    let lapItem = document.createElement('div'); 
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`; 
    document.getElementById('laps').appendChild(lapItem); 
});
