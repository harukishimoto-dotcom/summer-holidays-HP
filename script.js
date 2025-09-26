const sound = document.getElementById("click-sound");
const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const eventList = document.getElementById("event-list");

startBtn.addEventListener("click", () => {
  sound.play();
  bgm.play();
  startScreen.classList.add("hidden");
  eventList.classList.remove("hidden");
  eventList.classList.add("fade-in");
});
