function openPlaylist(nome) {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  document.getElementById("playlist-title").innerText = nome;

  home.classList.add("exit");
  playlist.classList.remove("hidden");

  setTimeout(() => {
    home.style.display = "none";
    playlist.classList.add("show");
  }, 300);
}

function goHome() {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  playlist.classList.remove("show");

  setTimeout(() => {
    playlist.classList.add("hidden");
    home.style.display = "block";
    home.classList.remove("exit");
  }, 300);
}
