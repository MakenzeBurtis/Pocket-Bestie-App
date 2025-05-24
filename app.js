document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");

  // Tap anywhere on welcome screen to go to main menu
  welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  // Simple alert on menu buttons click to test
  const menuButtons = document.querySelectorAll(".menu-btn");
  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert(`You clicked "${button.textContent}" — feature coming soon!`);
    });
  });
});
