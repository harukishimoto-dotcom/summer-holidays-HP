const sound = document.getElementById("click-sound");
const bgm = document.getElementById("bgm");

// スタート画面のボタンがあるページ用
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const eventList = document.getElementById("event-list");

if (startBtn) { // index.htmlにだけ存在する
  startBtn.addEventListener("click", () => {
    sound.play();
    bgm.volume = 0.5;
    bgm.play();
    startScreen.classList.add("hidden");
    eventList.classList.remove("hidden");
    eventList.classList.add("fade-in");
  });
}

// 共通：BGMはページ読み込み後に準備
window.addEventListener("load", () => {
  if (bgm) {
    bgm.volume = 0.5;
  }
});
