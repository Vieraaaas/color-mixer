const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const root = document.querySelector(":root");
const colorText = document.querySelector("#rgb");
const button = document.querySelector("button");

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
  colorText.innerText =
    "RGB (" + red.value + ", " + green.value + ", " + blue.value + ")";
}

async function changeRandom(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/color");

    if (response.ok) {
      const data = await response.json();
      root.style.setProperty("--red", data.rgb.r);
      red.value = data.rgb.r;
      root.style.setProperty("--green", data.rgb.g);
      green.value = data.rgb.g;
      root.style.setProperty("--blue", data.rgb.b);
      blue.value = data.rgb.b;
      changeText();
    }
  } catch (err) {
    console.error(err);
  }
}

red.addEventListener("input", changeRed);
green.addEventListener("input", changeGreen);
blue.addEventListener("input", changeBlue);
button.addEventListener("click", changeRandom);
