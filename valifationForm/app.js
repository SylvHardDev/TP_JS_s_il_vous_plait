const inpUtilisateur = document.querySelector(
  ".form-groupe:nth-child(1) input"
);
const inpMail = document.querySelector(".form-groupe:nth-child(2) input");
const inpMdp = document.querySelector(".form-groupe:nth-child(3) input");
const inpConfirme = document.querySelector(".form-groupe:nth-child(4) input");
const allImg = document.querySelectorAll(".icone-verif");
const allSpan = document.querySelectorAll("span");
const allLigne = document.querySelectorAll(".ligne div");

const showMdp = document.getElementById("showMdp");
const showConf = document.getElementById("showConf");
const hideMdp = document.getElementById("hideMdp");
const hideConf = document.getElementById("hideConf");

console.log(showMdp, showConf)

//show or not MDP

showMdp.addEventListener('click', () => {
    inpMdp.setAttribute('type', 'text')
    hideMdp.style.display = "block"
    showMdp.style.display = "none"
})

hideMdp.addEventListener('click', () => {
    inpMdp.setAttribute('type', 'password')
    hideMdp.style.display = "none"
    showMdp.style.display = "block"
})

showConf.addEventListener('click', () => {
    inpConfirme.setAttribute('type', 'text')
    hideConf.style.display = "block"
    showConf.style.display = "none"
})

hideConf.addEventListener('click', () => {
    inpConfirme.setAttribute('type', 'password')
    hideConf.style.display = "none"
    showConf.style.display = "block"
})
//nom utilisateur validation

inpUtilisateur.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    allImg[0].style.display = "inline";
    allImg[0].innerText = "👍";
    allSpan[0].style.display = "none";
  } else {
    allImg[0].style.display = "inline";
    allImg[0].innerText = "❗";
    allSpan[0].style.display = "inline";
  }
});

//email validation

inpMail.addEventListener("input", (e) => {
  const regexEmail = /\S+@\S+\.\S+/;

  if (e.target.value.search(regexEmail) === 0) {
    allImg[1].style.display = "inline";
    allImg[1].innerText = "👍";
    allSpan[1].style.display = "none";
  } else {
    allImg[1].style.display = "inline";
    allImg[1].innerText = "❗";
    allSpan[1].style.display = "inline";
  }
});

//validation mot de pass

let valeurInp;

const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
  symbol: 0,
  lettre: 0,
  chiffre: 0,
};

inpMdp.addEventListener("input", (e) => {
  valeurInp = e.target.value;

  if (valeurInp.search(specialCar) !== -1) {
    objValidation.symbol = 1;
  }

  if (valeurInp.search(alphabet) !== -1) {
    objValidation.lettre = 1;
  }

  if (valeurInp.search(chiffres) !== -1) {
    objValidation.chiffre = 1;
  }

  if ((e.inputType = "deleteContentBackward")) {
    if (valeurInp.search(specialCar) === -1) {
      objValidation.symbol = 0;
    }

    if (valeurInp.search(alphabet) === -1) {
      objValidation.lettre = 0;
    }

    if (valeurInp.search(chiffres) === -1) {
      objValidation.chiffre = 0;
    }
  }

  let testAll = 0;

  for (const property in objValidation) {
    if (objValidation[property] > 0) {
      testAll++;
    }
  }
  if (testAll < 3) {
    allSpan[2].style.display = "inline";
    allImg[2].style.display = "inline";
    allImg[2].innerText = "❗";
  } else {
    allSpan[2].style.display = "none";
    allImg[2].innerText = "👍";
  }

  //force

  if (valeurInp.length <= 6 && valeurInp.length > 0) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "none";
    allLigne[2].style.display = "none";
  } else if (valeurInp.length > 6 && valeurInp.length <= 9) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "block";
    allLigne[2].style.display = "none";
  } else if (valeurInp.length > 9) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "block";
    allLigne[2].style.display = "block";
  } else if (valeurInp.length === 0) {
    allLigne[0].style.display = "none";
    allLigne[1].style.display = "none";
    allLigne[2].style.display = "none";
  }
});

// Confirmatio mot de passe

inpConfirme.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    allImg[3].style.display = "inline";
    allImg[3].innerText = "❗";
  } else if (e.target.value === valeurInp) {
    allImg[3].style.display = "inline";
    allSpan[6].style.display = "none";
    allImg[3].innerText = "👍";
  } else if (e.target.value !== valeurInp) {
    allImg[3].style.display = "inline";
    allImg[3].innerText = "❗";
    allSpan[6].style.display = "inline";
  } else {
    allImg[3].innerText = "❗";
  }
});

// console.log(allSpan[]);
