document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const startButton = document.getElementById("start-button");
  const mainMenu = document.getElementById("main-menu");
  const sectionScreens = document.querySelectorAll(".section-screen");
  const menuButtons = document.querySelectorAll(".menu-btn");
  const backButtons = document.querySelectorAll(".back-btn");

  // Show main menu when Start is clicked
  startButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  // Handle topic button clicks
  menuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const topic = btn.getAttribute("data-topic");
      mainMenu.classList.add("hidden");

      // Show the corresponding section screen
      const sectionScreen = document.getElementById(topic);
      if (sectionScreen) {
        sectionScreen.classList.remove("hidden");
      }
    });
  });

  // Handle "Back to Menu" buttons
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Hide all section screens
      sectionScreens.forEach((screen) => {
        screen.classList.add("hidden");
      });

      // Show main menu
      mainMenu.classList.remove("hidden");
    });
  });
});
