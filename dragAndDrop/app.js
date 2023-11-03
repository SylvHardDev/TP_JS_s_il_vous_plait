let base = document.querySelector(".base");
const premierCase = document.getElementById("premier-case");
const boxs = document.querySelectorAll(".case");
const destroy = document.querySelector(".destroy");
const allCases = [];

for (i = 0; i < boxs.length; i++) {
  allCases.push(boxs[i]);
}

allCases.push(destroy);

let indexPhoto = 1;

base.style.backgroundImage = `url("./images/613cc3b52246d0980c2ef0f9deeedf89.jpg")`;

function nvBase() {
  const newBase = document.createElement("div");
  newBase.setAttribute("class", "base");
  newBase.setAttribute("draggable", "true");
  indexPhoto++;
  newBase.style.backgroundImage = `url("./images/a1bb8f1e884c98b49053c1eedd4c2c16.jpg")`;
  premierCase.appendChild(newBase);
  base = newBase;
}

for (const vide of allCases) {
  vide.addEventListener("dragover", dragOver);
  vide.addEventListener("dragenter", dragEnter);
  vide.addEventListener("drop", dragDrop);
}

function dragDrop() {
  if (this.id === "premier-case") {
    return;
  }

  this.removeEventListener("dragover", dragOver);
  this.removeEventListener("dragenter", dragEnter);
  this.removeEventListener("drop", dragDrop);

  if (this.id === "destroy") this.appendChild(base);
  nvBase();
}


function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}
