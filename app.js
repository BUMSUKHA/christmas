const h1 = document.querySelector("#something h1:nth-child(1)");
const body = document.body;

const white = "white";
const blue = "blue";
const gray = "gray";
const pink = "pink";
const tomato = "tomato";
const brightGray = "brightGray";
const backBlueGray = "backBlueGray";
const backBeige = "backBeige";

h1.className = white;
body.className = backBlueGray;

function reset() {
  if (body.className == backBlueGray) {
    h1.className = white;
    h1.style.fontSize = "32px";
    h1.innerText = "Merry Christmas!";
  } else if (body.className == backBeige) {
    h1.className = gray;
    h1.style.fontSize = "32px";
    h1.innerText = "Merry Christmas!";
  }
}

function handleTitleClick() {
  let h1Text;
  const currentColor = h1.className;
  let newColor;
  h1Text = "Mouse was cilked!";
  h1.innerText = h1Text;

  if (currentColor == tomato) {
    newColor = pink;
  } else {
    newColor = tomato;
  }
  h1.className = newColor;
}

function handleTitleEnter() {
  h1.innerText = "Mouse is here!";
  h1.style.fontSize = "35px";
  h1.className = brightGray;
}

function handleTitleMouseLeave() {
  h1.innerText = "Mouse is gone!";
  h1.style.fontSize = "32px";
  h1.className = blue;
  setTimeout(reset, 500);
}

function handleWindeResize() {
  body.className = backBeige;
  reset();
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleEnter);
h1.addEventListener("mouseleave", handleTitleMouseLeave);

window.addEventListener("resize", handleWindeResize);
