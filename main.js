const sketchPad = document.querySelector(".sketch-pad");
const sketchPadWidth = sketchPad.clientWidth;
const sketchPadHeight = sketchPad.clientHeight;
const sketchPixels = document.querySelector(".pixels");
const sketchClear = document.querySelector(".clear");
const sketchEraser = document.querySelector(".eraser");
const sketchBrush = document.querySelector(".brush");
const sketchColor = document.querySelector(".color");
const randomColor = document.querySelector(".random-color");

let red;
let green;
let blue;
let color = sketchColor.value;
let pixels = sketchPixels.value;

function generateNewGrid(pixels) {
  sketchPad.innerHTML = "";
  for (let i = 0; i < pixels * pixels; i++) {
    const sketchBox = document.createElement("div");
    sketchBox.className = "sketch-box";
    sketchBox.style.width = sketchPadWidth / pixels + "px";
    sketchBox.style.height = sketchPadHeight / pixels + "px";
    sketchPad.appendChild(sketchBox);
  }
}

function paint() {
  const sketchBoxes = document.querySelectorAll(".sketch-box");
  sketchBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `${color}`;
    });
  });
}
function randomColorBrush() {
  const sketchBoxes = document.querySelectorAll(".sketch-box");
  sketchBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      red = Math.floor(Math.random() * 255);
      green = Math.floor(Math.random() * 255);
      blue = Math.floor(Math.random() * 255);
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

function eraser() {
  const sketchBoxes = document.querySelectorAll(".sketch-box");

  sketchBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "white";
    });
  });
}
function clear() {
  const sketchBoxes = document.querySelectorAll(".sketch-box");
  sketchBoxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
}

sketchColor.addEventListener("change", () => {
  color = sketchColor.value;
  paint(color);
});
sketchPixels.addEventListener("change", () => {
  pixels = sketchPixels.value;
  generateNewGrid(pixels);
  paint();
});
sketchClear.addEventListener("click", clear);

randomColor.addEventListener("click", randomColorBrush);
sketchEraser.addEventListener("click", eraser);
sketchBrush.addEventListener("click", paint);

// initial grid
generateNewGrid(pixels);
paint(color);
