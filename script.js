const hrNeedle = document.querySelector(".hr");
const minNeedle = document.querySelector(".min");
const secNeedle = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();

  hr = date.getHours() * 30;
  min = date.getMinutes() * 6;
  sec = date.getSeconds() * 6;

  hrNeedle.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minNeedle.style.transform = `rotateZ(${min}deg)`;
  secNeedle.style.transform = `rotateZ(${sec}deg)`;
});
