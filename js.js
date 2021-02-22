const sam = document.getElementById("sam");
const snowBall = document.getElementById("snowBall");
const image = document.getElementById("image");
let CO = document.getElementById("count");

const audio = new Audio("MUSIC.mp3");
let count = 0;

audio.play();
snowBall.classList.add("run");

let timer = setInterval(function () {
  if (count > 5920) {
    count = 5920;
    CO.innerHTML = Math.round(count);
    clearInterval(timer);
    stop();
  }
  let samTop = parseInt(window.getComputedStyle(sam).getPropertyValue("top"));
  let snowBallLeft = parseInt(
    window.getComputedStyle(snowBall).getPropertyValue("left")
  );
  if (snowBallLeft < 50 && snowBallLeft > 0 && samTop < 90) {
    count += 50 * Math.random();
    CO.innerHTML = Math.round(count);
  }
}, 10);

function stop() {
  snowBall.classList.remove("run");
  image.classList.remove("hidden");
  document.removeEventListener("keydown", gan, true);
  audio.pause();
  audio.currentTime = 0;
  image.play();
  $("script[src='js.js']").remove();
}

setInterval(function () {
  var m = window.getComputedStyle(sam).getPropertyValue("background-image");
  console.log(m);
  if (m === `url('IMG/GAN1.jpg')`)
    sam.style.backgroundImage = `url('IMG/GAN2.jpg')`;
  else {
    sam.style.backgroundImage = `url('IMG/GAN1.jpg')`;
  }
}, 200);
