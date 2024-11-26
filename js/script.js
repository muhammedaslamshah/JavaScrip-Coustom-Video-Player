// Initialize importent 
let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');
let progressBar = document.querySelector('.progress-bar');



// Initial Time Video Condition
let isVideoPlaying = false;


// Functions
// Video Controls 
// 1. Video Play/Pause Button
function playOrPuaseVideo(){
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace('fa-play', 'fa-pause')
    }else{
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace('fa-pause', 'fa-play');
    }
}
// 2. Update Video Progresbar 
function updateProgressbar(event){
    let widthOfVideo = (event.target.currentTime / event.target.duration)*100;
    progressBar.style.cssText = `width : ${widthOfVideo}%;background-color: red`;
    console.log(widthOfVideo);
    
    
}


// addeventlistener
playBtn.addEventListener('click', playOrPuaseVideo);
video.addEventListener('click', playOrPuaseVideo);

// 2. Video Play/Pause With Space-Bar Key
document.addEventListener('keydown',function(event){
    if (event.code === 'Space') {
        event.preventDefault();
        playOrPuaseVideo();
    }
});

video.addEventListener('timeupdate', updateProgressbar);
