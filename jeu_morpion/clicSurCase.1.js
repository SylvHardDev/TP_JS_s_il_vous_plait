function clicSurCase(e) {
  const caseClique = e.target;
  const caseIndex = caseClique.getAttribute("data-index");

  if (partieEnCours[caseIndex] !== "" || !verouillage) {
    return;
  }

  partieEnCours[caseIndex] = joueurEnCours;
  caseClique.innerHTML = joueurEnCours;
  console.log(partieEnCours);

  // changementDeJoueur()
}
