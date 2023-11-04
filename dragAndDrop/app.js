let base = document.querySelector(".base");
const premierCase = document.getElementById("premier-case");
const boxs = document.querySelectorAll(".case");
const destroy = document.querySelector(".destroy");
const allCases = [];
const images = [
  "613cc3b52246d0980c2ef0f9deeedf89.jpg",
  "1665484806583.png",
  "1665485013723.png",
  "1665485013787~2.png",
  "a1bb8f1e884c98b49053c1eedd4c2c16.jpg",
];

// console.log(images[0]);

// let indexPhoto = images[0];

for (i = 0; i < boxs.length; i++) {
  allCases.push(boxs[i]);
}

indexPhoto = 0;

allCases.push(destroy);

base.style.backgroundImage = `url("./images/${images[indexPhoto]}")`;

function nvBase() {
  const newBase = document.createElement("div");
  newBase.setAttribute("class", "base");
  newBase.setAttribute("draggable", "true");
  indexPhoto++;
  newBase.style.backgroundImage = `url("./images/${images[indexPhoto]}")`;
  premierCase.appendChild(newBase);
  base = newBase;
}

for (const vide of allCases) {
  vide.addEventListener("dragover", dragOver);
  vide.addEventListener("dragenter", dragEnter);
  vide.addEventListener("drop", dragDrop);
}

function dragDrop() {
  //si raisina de tode avosotra
  if (this.id === "premier-case") {
    return;
  }

  //destroy
  if (this.id === "destroy") {

  }
  // this.removeEventListener("dragover", dragOver);
  // this.removeEventListener("dragenter", dragEnter);
  // this.removeEventListener("drop", dragDrop);

  this.appendChild(base);
  nvBase();
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}
