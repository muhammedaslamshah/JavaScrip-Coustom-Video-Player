// Initialize importent 
let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');


// Initial Time Video Condition
let isVideoPlaying = false;

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

