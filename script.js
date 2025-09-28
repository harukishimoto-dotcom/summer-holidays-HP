const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("click-sound");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const menu = document.getElementById("menu");
const buttons = document.querySelectorAll("[data-target]");
const backButtons = document.querySelectorAll(".back-btn");

// スタートボタンでメニュー表示 + BGM再生
if (startBtn) {
  startBtn.addEventListener("click", () => {
    clickSound.play();
    bgm.volume = 0.5;
    bgm.play().catch(()=>{});
    startScreen.classList.add("hidden");
    menu.classList.remove("hidden");
  });
}

// メニュー → サブコンテンツ切り替え
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.play();
    const target = btn.dataset.target;
    menu.classList.add("hidden");
    document.getElementById(target).classList.remove("hidden");
  });
});

// サブコンテンツ → メニュー戻る
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.play();
    btn.parentElement.classList.add("hidden");
    menu.classList.remove("hidden");
  });
});
