var audio = new Audio('..//Assets/FastTalking.mp3');
audio.play();

audio.oncanplaythrough = function(){
    audio.play();
}

