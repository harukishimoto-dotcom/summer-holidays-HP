const bgm = document.getElementById("bgm");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const menu = document.getElementById("menu");
const buttons = document.querySelectorAll("[data-target]");
const backButtons = document.querySelectorAll(".back-btn");
const bgmControls = document.getElementById("bgm-controls");
const bgmToggle = document.getElementById("bgm-toggle");

// BGMの状態
let bgmPlaying = true;

// クリック音再生関数
function playClick() {
  const sound = document.getElementById("click-sound");
  const clone = sound.cloneNode();  
  clone.play();                     
}

// スタートボタン
if (startBtn) {
  startBtn.addEventListener("click", () => {
    playClick();
    if (bgm) {
      bgm.volume = 0.5;
      bgm.play().catch(()=>{});
    }
    startScreen.classList.add("hidden");
    menu.classList.remove("hidden");
    if (bgmControls) bgmControls.classList.remove("hidden");
  });
}

// メニュー → サブコンテンツ切り替え
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    playClick();
    const target = btn.dataset.target;
    menu.classList.add("hidden");
    document.getElementById(target).classList.remove("hidden");
  });
});

// サブコンテンツ → メニュー戻る
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    playClick();
    btn.parentElement.classList.add("hidden");
    menu.classList.remove("hidden");
  });
});

// BGM ON/OFF切り替え
if (bgmToggle) {
  bgmToggle.addEventListener("click", () => {
    playClick();
    if (bgmPlaying) {
      bgm.pause();
      bgmPlaying = false;
    } else {
      bgm.play().catch(()=>{});
      bgmPlaying = true;
    }
  });
}
