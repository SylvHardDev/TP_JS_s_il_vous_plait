const inputsCouleur = document.querySelectorAll(".inp-couleur");
const inputRange = document.querySelector(".inp-range");
const span = document.querySelector("span");
const btns = document.querySelectorAll("button");
const fond = document.body;
const containerCouleur = document.querySelector(".container-couleurs");

const resultatGradient = document.querySelector(".resultat__gradient");

//Demarrage
btnRandom = document.querySelector(".random");

let valCouleurs = ["#BA5370", "#F4E2D8"];
let inclinaison = 45;
let index = 3;
inputsCouleur[0].value = valCouleurs[0];
inputsCouleur[1].value = valCouleurs[1];
resultatGradient.value = `background: linear-gradient(${inclinaison}deg, ${valCouleurs});`;

inputsCouleur[0].style.background = valCouleurs[0];
inputsCouleur[1].style.background = valCouleurs[1];

fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

//inclinaison

inputRange.addEventListener("input", (e) => {
  inclinaison = e.target.value * 3.6;
  fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
});

//Rajour et suppression couleur

btns.forEach((btn) => {
  btn.addEventListener("click", rajoutEnleve);
});

function rajoutEnleve(e) {
  span.innerText = "";
  resultatGradient.value = `background: linear-gradient(${inclinaison}deg, ${valCouleurs});`;

  const allInputs = document.querySelectorAll(".inp-couleur");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // console.log(randomColor);

  if (e.target.className === "plus") {
    if (allInputs.length > 5) {
      return;
    }

    const nvCouleur = document.createElement("input");
    nvCouleur.setAttribute("class", "inp-couleur");
    nvCouleur.setAttribute("data-index", index);
    nvCouleur.setAttribute("maxlength", 7);
    nvCouleur.value = `#${randomColor.toLocaleUpperCase()}`;
    nvCouleur.style.background = `#${randomColor}`;
    containerCouleur.appendChild(nvCouleur);

    valCouleurs.push(`#${randomColor.toLocaleUpperCase()}`);
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
    index++;
  } else if (e.target.className === "moins") {
    if (valCouleurs.length === 2) {
      span.innerText = "Il faut au moins deux couleurs !";
    } else {
      valCouleurs.pop();
      allInputs[allInputs.length - 1].remove();
      index--;
      fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
    }
  }

  allInputs.forEach((inp) => {
    inp.addEventListener("input", MAJCOLORS);
  });
}

inputsCouleur.forEach((inp) => {
  inp.addEventListener("input", MAJCOLORS);
});

function MAJCOLORS(e) {
  let indexEnCours = e.target.getAttribute("data-index");
  e.target.value = e.target.value.toUpperCase();
  valCouleurs[indexEnCours - 1] = e.target.value.toUpperCase();
  e.target.style.background = valCouleurs[indexEnCours - 1];
  fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;
  resultatGradient.value = `background: linear-gradient(${inclinaison}deg, ${valCouleurs});`;
}
//couleur aleatoires

btnRandom.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".inp-couleur");
  for (i = 0; i < valCouleurs.length; i++) {
    valCouleurs[i] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    inputs[i].value = valCouleurs[i].toUpperCase();
    inputs[i].style.background = valCouleurs[i].toUpperCase();
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

    // const gradientValiny = `linear-gradient(${inclinaison}deg, ${valCouleurs})`
    // console.log(gradientValiny);

    // resultatGradient.value = `background: linear-gradient(${inclinaison}deg, ${valCouleurs});`;

  }
});

document.addEventListener('click', () => {
    inclinaisonToDecimal = Math.floor(inclinaison)
  resultatGradient.value = `background: linear-gradient(${inclinaisonToDecimal}deg, ${valCouleurs});`;
})