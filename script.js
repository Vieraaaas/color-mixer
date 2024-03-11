const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const root = document.querySelector(":root");
const colorTExt = document.querySelector("#rgb");

function changeRed() {
  root.style.setProperty("--red", red.value);
  changeText();
}

function changeGreen() {
  root.style.setProperty("--green", green.value);
  changeText();
}

function changeBlue() {
  root.style.setProperty("--blue", blue.value);
  changeText();
}

function changeText() {
  colorTExt.innerText =
    "RGB (" + red.value + ", " + green.value + ", " + blue.value + ")";
}

red.addEventListener("change", changeRed);
green.addEventListener("change", changeGreen);
blue.addEventListener("change", changeBlue);
