const hourHand = document.getElementsByClassName("hour-hand")[0];
const minuteHand = document.getElementsByClassName("min-hand")[0];
const secondHand = document.getElementsByClassName("second-hand")[0];

let hoursDegrees = (new Date().getHours() / 12) * 360 + 90;
let minutesDegrees = (new Date().getMinutes() / 60) * 360 + 90;
let secondsDegrees = (new Date().getSeconds() / 60) * 360 + 90;

function updateClockHands() {
  hoursDegrees += 360 / 60 / 60 / 12;
  minutesDegrees += 360 / 60 / 60;
  secondsDegrees += 360 / 60;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function initClockHands() {
  updateClockHands();

  setTimeout(() => {
    hourHand.classList.add("tick");
    minuteHand.classList.add("tick");
    secondHand.classList.add("tick");
  }, 10);
}

initClockHands();
setInterval(updateClockHands, 1000);
