const mp3uwu = document.querySelector('audio')
let uwu = document.querySelector('img');


uwu.addEventListener('click', function() {
  if (uwu.pause) {
    mp3uwu.play();
  } else {
    mp3uwu.pause();
  }
});



// const audio = new Audio();
// audio.src = "mp3\click-sound-effect-hd.mp3";



// const clickSound = document.getElementById('clickSound');

// clickSound.addEventListener('onclick', (e) => {
//   audio.src = "mp3\click-sound-effect-hd.mp3";
// })