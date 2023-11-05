const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const affichageScore = document.querySelector(".score");

const rayonBalle = 10,
  BarreHeight = 10,
  barreWidth = 75,
  nbCol = 8,
  nbRow = 5,
  largeurBrique = 75,
  hauteurBrique = 20;

let x = canvas.width / 2,
  y = canvas.height - 30,
  barreX = (canvas.width - barreWidth) / 2,
  fin = false,
  vitesseX = 5,
  vitesseY = -5;
function dessineBalle() {
  ctx.beginPath();
  ctx.arc(x, y, rayonBalle, 0, Math.PI * 2);
  ctx.fillStyle = "#333";
  ctx.fill();
  ctx.closePath();
}

dessineBalle();

function dessineBarre() {
  ctx.beginPath();
  ctx.rect(barreX, canvas.height - BarreHeight - 2, barreWidth, BarreHeight);
  ctx.fillStyle = "#333";
  ctx.fill();
  ctx.closePath();
}

dessineBarre();

//tableau avec toutes les briques

const birques = [];

for (let i = 0; i < nbRow; i++) {
  birques[i] = [];

  for (let j = 0; j < nbCol; j++) {
    birques[i][j] = { x: 0, y: 0, statut: 1 };
  }
}

function dessineBriques() {
  for (let i = 0; i < nbRow; i++) {
    for (let j = 0; j < nbCol; j++) {
      if (birques[i][j].statut === 1) {
        let briqueX = j * (largeurBrique + 10) + 35;
        let briqueY = i * (hauteurBrique + 10) + 30;

        birques[i][j].x = briqueX;
        birques[i][j].x = briqueY;

        ctx.beginPath();
        ctx.rect(briqueX, briqueY, largeurBrique, hauteurBrique);
        ctx.fillStyle = "#333";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

dessineBriques();

function dessine() {
  if (fin === false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dessineBriques();
    dessineBalle();
    dessineBarre();

    if (x + vitesseX > canvas.width - rayonBalle || x + vitesseX < rayonBalle) {
      vitesseX = -vitesseX;
    }

    if (y + vitesseY < rayonBalle) {
      vitesseY = -vitesseY;
    }

    if (y + vitesseY > canvas.height - rayonBalle) {
      if (x > barreX && x < barreX + barreWidth) {
        vitesseX = vitesseX + 0.1;
        vitesseY = vitesseY + 0.1;
        vitesseY = -vitesseY;
      } else {
        fin = true;
        affichageScore.innerHTML = `Perdu ! <br> Clique sur le casse-brique pour recommencer`;
      }
    }

    x += vitesseX;
    y += vitesseY;
    requestAnimationFrame(dessine);
  }
}

dessine();

//Recomancer

canvas.addEventListener("click", () => {
  if (fin === true) {
    fin = false;
    document.location.reload();
  }
});
