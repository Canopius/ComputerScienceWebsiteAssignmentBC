var audio1 = new Audio('..//Assets/FastTalking1.mp3');
var audio2 = new Audio('..//Assets/FastTalking2.mp3');
var audio3 = new Audio('..//Assets/FastTalking3.mp3');

function toggleAudio(img, audio){
    if(img.src.match(/Play/)){
        audio.play()
        img.src = "../Assets/Pause.svg";
    }else{
        audio.pause()
        img.src = "../Assets/Play.svg";
    }
}


