const inpUtilisateur = document.querySelector(
  ".form-groupe:nth-child(1) input"
);
const inpMail = document.querySelector(".form-groupe:nth-child(2) input");
const inpMdp = document.querySelector(".form-groupe:nth-child(3) input");
const inpConfirme = document.querySelector(".form-groupe:nth-child(4) input");
const allImg = document.querySelectorAll(".icone-verif");
const allSpan = document.querySelectorAll("span");
const allLigne = document.querySelectorAll(".ligne div");

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

