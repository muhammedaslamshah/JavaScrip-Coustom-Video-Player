// Initialize importent
let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");
let timeElapsed = document.querySelector(".time-elapsed");
let timeDuration = document.querySelector(".time-duration");

// Initial Time Video Condition
let isVideoPlaying = false;

// Functions

// 1. Video Play/Pause Button
function playOrPuaseVideo() {
  if (!isVideoPlaying) {
    video.play();
    isVideoPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    isVideoPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
  }
}

// 2. Update Video Progresbar
function updateProgressbar(event) {
  let widthOfVideo = (event.target.currentTime / event.target.duration) * 100;
  progressBar.style.cssText = `width : ${widthOfVideo}%;background-color: red`;
}

// 3. Seekbar Updation
function updateSeekbar(event) {
  let calculateWidth = progressRange.getBoundingClientRect();
  let currentPoint = event.offsetX;
  let progressBarTotalWidth = calculateWidth.width; //this.clientWidth
  let currentRange = (currentPoint / progressBarTotalWidth) * video.duration;
  video.currentTime = currentRange;
}

// Helper Function: Format Time to HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Function to Update Elapsed Time and Duration
function updateTimeDisplay() {
  // Update elapsed time
  timeElapsed.textContent = formatTime(video.currentTime);

  // Update Total Duration of Video
  if (!isNaN(video.duration)) {
    timeDuration.textContent = formatTime(video.duration);
  }
}

// Progress Bar Updates Handle for Video 
function updateProgressbar(event) {
  let widthOfVideo = (event.target.currentTime / event.target.duration) * 100;
  progressBar.style = `width : ${widthOfVideo}%;background-color: red`;

  // Update display Time
  updateTimeDisplay();
}

// addeventlistener

// for Time Display Updates
video.addEventListener("loadedmetadata", updateTimeDisplay); // When metadata is loaded, display duration
video.addEventListener("timeupdate", updateProgressbar); // Update elapsed time during playback

// for Play / Pause Video through Button
playBtn.addEventListener("click", playOrPuaseVideo);
// for Play / Pause Video through Video ( Display ) Click
video.addEventListener("click", playOrPuaseVideo);

// 2. Video Play/Pause With Space-Bar Key
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playOrPuaseVideo();
  }
});
//  Video Plays Progress Bar Updations
video.addEventListener("timeupdate", updateProgressbar);

// Current Tideo Time Updations While Clicking Progress Bar
progressRange.addEventListener("click", updateSeekbar);
