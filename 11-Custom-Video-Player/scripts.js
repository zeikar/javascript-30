/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playButton = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

let mouseDown = false;

/* Build out functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function togglePlayButton() {
  if (video.paused) {
    playButton.textContent = "►";
  } else {
    playButton.textContent = "❚❚";
  }
}

function skipVideo() {
  const amount = this.dataset.skip;
  video.currentTime += parseFloat(amount);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;

  console.log(percent);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;

  console.log(scrubTime);
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", togglePlayButton);
video.addEventListener("pause", togglePlayButton);
video.addEventListener("timeupdate", handleProgress);

playButton.addEventListener("click", togglePlay);

skipButtons.forEach((skipButton) =>
  skipButton.addEventListener("click", skipVideo)
);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mouseout", () => (mouseDown = false));
