function openPlaylist(nome) {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  document.getElementById("playlist-title").innerText = nome;

  playlist.classList.remove("hidden");

  // força render
  playlist.offsetHeight;

  home.classList.add("exit");
  playlist.classList.add("show");
}

function goHome() {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  home.classList.remove("exit");
  playlist.classList.remove("show");

  setTimeout(() => {
    playlist.classList.add("hidden");
  }, 350);
}
