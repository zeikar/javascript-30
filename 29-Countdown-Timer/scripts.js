let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time");

function timer(seconds) {
  clearInterval(countdown);

  const then = Date.now() + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const now = Date.now();
    const secondsLeft = Math.round((then - now) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(secondsLeft) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const displayTime = formatTime(minutes, seconds);

  timerDisplay.textContent = displayTime;
  document.title = displayTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);

  const hour = end.getHours();
  const minutes = end.getMinutes();

  endTimeDisplay.textContent = `Be Back At ` + formatTime(hour, minutes);
}

function formatTime(first, second) {
  return `${first}:${String(second).padStart(2, "0")}`;
}

function startTimer() {
  const seconds = this.dataset.time;
  timer(seconds);
}

buttons.forEach((button) => {
  button.addEventListener("click", startTimer);
});

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const mins = this.minutes.value;

  timer(mins * 60);
  this.reset();
});

timer(70);
