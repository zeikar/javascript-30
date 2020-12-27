function playAudio(audio) {
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
}

function animateKey(key) {
  if (!key) {
    return;
  }

  key.classList.toggle("playing");
}

window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  playAudio(audio);
  animateKey(key);
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") {
      return;
    }

    e.target.classList.remove("playing");
  })
);
