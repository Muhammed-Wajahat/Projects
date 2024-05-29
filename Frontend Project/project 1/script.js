let img = document.querySelector("#img_container");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let title = document.querySelector("#title");
let play = document.querySelector("#play");
var songIdx = 0;
let audio = new Audio();
var songs = [
  {
    title: "Inspiring.jpeg",
    image: "./images/inspiring.jpeg",
    URL: "./songs/Inspiring-Acoustic-Guitar(chosic.com).mp3",
  },
  {
    title: "Midnight.jpeg",
    image: "./images/midnight.jpeg",
    URL: "./songs/The-Midnight-Diner(chosic.com).mp3",
  },
  {
    title: "Motivation.jpeg",
    image: "./images/motivation.jpeg",
    URL: "./songs/Hope-Emotional-Soundtrack(chosic.com).mp3",
  },
  {
    title: "Walk Around.jpeg",
    image: "./images/walk.jpeg",
    URL: "./songs/roa-music-walk-around(chosic.com).mp3",
  },
];
function changeIcons() {
  var flag = 0;
  play.addEventListener("click", function () {
    if (flag === 0) {
      play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      img.classList.add("animation");
      audio.play();
      flag = 1;
    } else {
      play.innerHTML = `<i class="fa-solid fa-play"></i>`;
      img.classList.remove("animation");
      flag = 0;
      audio.pause();
    }
  });
}
function playSong() {
  audio.src = "./songs/Inspiring-Acoustic-Guitar(chosic.com).mp3";
  changeIcons();
}
playSong();
function changeSonge(songs) {
  title.textContent = songs.title;
  img.style.backgroundImage = `url(${songs.image})`;
  audio.src = `${songs.URL}`;
  audio.play()
  var flag = 0;
  
}
function next() {
  songIdx = (songIdx + 1) % songs.length;
  changeSonge(songs[songIdx]);
}
function back(){
    songIdx = (songIdx - 1) % songs.length;
  changeSonge(songs[songIdx]);
}
backward.addEventListener("click", back)
forward.addEventListener("click", next);