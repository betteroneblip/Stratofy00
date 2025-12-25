const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");

function playMusic(url, name) {
  audio.src = url;
  audio.play();
  nowPlaying.innerText = "Tocando: " + name;
}
