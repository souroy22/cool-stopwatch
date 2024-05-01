let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById("timer-section");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");

pauseBtn.disabled = true;
resetBtn.disabled = true;

function startStopwatch() {
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
  timer = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  display.textContent =
    formatTime(hours) +
    " : " +
    formatTime(minutes) +
    " : " +
    formatTime(seconds) +
    " : " +
    formatMilliseconds(milliseconds);
}

function pauseStopwatch() {
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  clearInterval(timer);
}

function resetStopwatch() {
  pauseBtn.disabled = true;
  startBtn.disabled = false;
  resetBtn.disabled = true;
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = "00 : 00 : 00 : 00";
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function formatMilliseconds(ms) {
  return ms < 10 ? "0" + ms : ms;
}
