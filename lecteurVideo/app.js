const video = document.querySelector(".video");
const btnPausePlay = document.getElementById("play-pause");
const playPause = document.querySelector("#play-pause p");
const barreOrange = document.querySelector(".barre-orange");
const muteBtn = document.getElementById("mute");
const fullSreen = document.getElementById("fullscreen");
const volumeSlider = document.getElementById("volume-slider");
const juice = document.querySelector(".juice");

btnPausePlay.addEventListener("click", togglePlayPause);
video.addEventListener("Click", togglePlayPause);

function togglePlayPause() {
  if (video.paused) {
    playPause.innerText = "⏸️";
    video.play();
  } else {
    playPause.innerText = "▶️";
    video.pause();
  }
}

// la barre Orange

video.addEventListener("timeupdate", () => {
  let juicePos = video.currentTime / video.duration;

  juice.style.width = juicePos * 100 + "%";

  if (video.ended) {
    playPause.innerText = "▶️";
  }
});

//volume

volumeSlider.addEventListener("change", () => {
  video.volume = volumeSlider.value / 100;
});

//mute

muteBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  } else {
    video.muted = true;
    muteBtn.innerText = "Unmute";
  }
});

//barre orange

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener("click", (e) => {
  let x = e.clientX - rect.left;
  let widthPercent = (x * 100) / largeur;
  console.log(widthPercent);

  let durationVideo = video.duration;

  video.currentTime = durationVideo * (widthPercent / 100);
});

window.addEventListener("resize", () => {
  let rect = barreOrange.getBoundingClientRect();
  let largeur = rect.width;
});

video.addEventListener("dblclick", () => {
  video.requestFullscreen();
});

// video.addEventListener("click", () => {
//     video.pause();

//   if (paused) {
//     video.play();
//   } 
// });

fullSreen.addEventListener("click", () => {
  video.requestFullscreen();
});
