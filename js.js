const sam = document.getElementById("sam");
const snowBall = document.getElementById("snowBall");
const image = document.getElementById("image");
const wep = document.getElementById("wep");
let CO = document.getElementById("count");

const audio = new Audio("MUSIC.mp3");
let count = 0;

audio.volume = 0.1;
audio.play();
snowBall.classList.add("run");

let timer = setInterval(function () {
  if (count > 7414) {
    count = 7414;
    CO.innerHTML = Math.round(count);
    clearInterval(timer);
    stop();
  }
  let samTop = parseInt(window.getComputedStyle(sam).getPropertyValue("top"));
  let snowBallLeft = parseInt(
    window.getComputedStyle(snowBall).getPropertyValue("left")
  );
  if (snowBallLeft < 50 && snowBallLeft > 0 && samTop < 90) {
    count += 1000 * Math.random();
    CO.innerHTML = Math.round(count);
    snowBall.classList.add("fly");
    snowBall.classList.remove("run");
    setTimeout(() => {
      snowBall.classList.remove("fly");
      if (count !== 7414) snowBall.classList.add("run");
    }, 300);
  }
}, 10);

function stop() {
  snowBall.classList.add("run2");
  image.classList.remove("hidden");
  document.removeEventListener("keydown", gan, true);
  audio.pause();
  audio.currentTime = 0;
  image.play();
  snowBall.classList.remove("run");
  $("script[src='js.js']").remove();
}

setInterval(function () {
  var m = window.getComputedStyle(sam).getPropertyValue("background-image");

  if (m === `url("https://ga021396.github.io/Sam1268/IMG/GAN1.jpg")`) {
    console.log(m);
    sam.style.backgroundImage = `url("https://ga021396.github.io/Sam1268/IMG/GAN2.jpg")`;
  } else {
    console.log(m);
    sam.style.backgroundImage = `url("https://ga021396.github.io/Sam1268/IMG/GAN1.jpg")`;
  }
}, 200);
