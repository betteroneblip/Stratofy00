function openPlaylist(nome) {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  document.getElementById("playlist-title").innerText = nome;

  // prepara playlist
  playlist.classList.remove("hidden");
  playlist.style.transform = "translateX(100%)";

  // força reflow (truque necessário)
  playlist.offsetHeight;

  // anima
  home.style.transform = "translateX(-40%)";
  home.style.opacity = "0";

  playlist.style.transform = "translateX(0)";
  playlist.style.opacity = "1";
}

function goHome() {
  const home = document.getElementById("home");
  const playlist = document.getElementById("playlist-screen");

  home.style.transform = "translateX(0)";
  home.style.opacity = "1";

  playlist.style.transform = "translateX(100%)";
  playlist.style.opacity = "0";

  setTimeout(() => {
    playlist.classList.add("hidden");
  }, 350);
}
