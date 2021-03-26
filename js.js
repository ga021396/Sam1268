const sam = document.getElementById("sam");
const snowBall = document.getElementById("snowBall");
const image = document.getElementById("image");
let CO = document.getElementById("count");
let count = 0;
let colorNum = 255 / 7414;

const audio = new Audio("MUSIC.mp3");

audio.volume = 0.5;
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
    let color = colorNum * count;
    CO.innerHTML = Math.round(count);
    snowBall.classList.remove("run");
    sam.style.backgroundColor = `rgb(${255 - color},${255 - color},${
      255 - color
    })`;
    console.log(colorNum, color, count);
    setTimeout(() => {
      if (count !== 7414) snowBall.classList.add("run");
    }, 300);
  }
}, 10);

function stop() {
  image.classList.remove("hidden");
  document.removeEventListener("keydown", gan, true);
  audio.pause();
  audio.currentTime = 0;
  image.play();
  snowBall.classList.remove("run");
  $("script[src='js.js']").remove();
}
