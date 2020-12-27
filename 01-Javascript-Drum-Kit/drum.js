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

function play(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  playAudio(audio);
  animateKey(key);
}

function keyboardListener(event) {
  play(event.keyCode);
}

function mouseListener(event) {
  let target = event.target;

  if (event.target !== this) {
    target = target.parentElement;
  }

  play(target.getAttribute("data-key"));
}

window.addEventListener("keydown", keyboardListener);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") {
      return;
    }

    e.target.classList.remove("playing");
  });

  key.onclick = mouseListener;
});
