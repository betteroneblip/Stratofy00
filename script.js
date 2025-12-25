const audio = document.getElementById("audio");
const titulo = document.getElementById("tituloAtual");
const capa = document.getElementById("capaAtual");
const barra = document.getElementById("barra");

function tocarMusica(arquivo, nome, imagem) {
  audio.src = arquivo;
  audio.play();
  titulo.innerText = nome;
  capa.src = imagem;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

audio.addEventListener("timeupdate", () => {
  barra.max = audio.duration;
  barra.value = audio.currentTime;
});

barra.addEventListener("input", () => {
  audio.currentTime = barra.value;
});
