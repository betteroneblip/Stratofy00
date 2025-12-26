const audio=document.getElementById("audio");
const mini=document.getElementById("mini-player");
const title=document.getElementById("mini-title");
const btn=document.getElementById("mini-btn");

let playing=false;

function openPlaylist(nome){
  document.getElementById("playlist-title").innerText=nome;
  document.getElementById("home").classList.add("exit");
  const p=document.getElementById("playlist-screen");
  p.classList.remove("hidden");
  p.classList.add("show");
}

function goHome(){
  document.getElementById("home").classList.remove("exit");
  const p=document.getElementById("playlist-screen");
  p.classList.remove("show");
  setTimeout(()=>p.classList.add("hidden"),300);
}

function playTrack(name,url){
  audio.src=url;
  audio.play();
  title.innerText=name;
  mini.classList.remove("hidden");
  btn.innerText="⏸";
  playing=true;
}

function togglePlay(){
  if(playing){audio.pause();btn.innerText="▶";}
  else{audio.play();btn.innerText="⏸";}
  playing=!playing;
}
