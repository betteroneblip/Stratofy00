function openPlaylist(nome) {
  document.getElementById("home").style.display = "none";
  document.getElementById("playlist-screen").classList.remove("hidden");

  document.getElementById("playlist-title").innerText = nome;
}

function goHome() {
  document.getElementById("playlist-screen").classList.add("hidden");
  document.getElementById("home").style.display = "block";
}

