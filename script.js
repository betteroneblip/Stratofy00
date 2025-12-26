const audio = document.getElementById("audio");
const now = document.getElementById("now-playing");
const bottom = document.querySelector(".bottom-bar");
const title = document.getElementById("now-title");
const cover = document.getElementById("now-cover");
const progress = document.getElementById("progress");

function openPlaylist(){
  document.getElementById("home").classList.add("hidden");
  document.getElementById("playlist-screen").classList.remove("hidden");
}

function goHome(){
  document.getElementById("playlist-screen").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function playTrack(t,u,c){
  audio.src=u;
  audio.play();
  title.innerText=t;
  cover.src=c;
  now.classList.remove("hidden");
  bottom.style.display="none";
}

function closeNow(){
  now.classList.add("hidden");
  bottom.style.display="flex";
}

function toggle(){
  audio.paused ? audio.play() : audio.pause();
}

audio.ontimeupdate=()=>{
  progress.value=(audio.currentTime/audio.duration)*100||0;
}

progress.oninput=()=>{
  audio.currentTime=(progress.value/100)*audio.duration;
}

function next(){}
function prev(){}
