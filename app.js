document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    mainMenu.classList.add("active");
  });

  // Show welcome screen on load
  welcomeScreen.classList.add("active");
});
