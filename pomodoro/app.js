const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

const blocWork = document.querySelector(".travail");
const blocPause = document.querySelector(".pause");

let checkInterval = false;
let tempsInitial = 1800;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles ${nbDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
  tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
  tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
}`;

btnGo.addEventListener("click", () => {
  if (pause === false && checkInterval === false) {
    checkInterval = true;

    blocWork.classList.add("active");

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
      tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
    }`;

    let timer = setInterval(() => {
      if (pause === false && tempsInitial > 0) {
        blocWork.classList.add("active");
        blocPause.classList.remove("active");
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
        tempsInitial = 1800;
        tempsDeRepos = 300;
        nbDeCycles++;
        cycles.innerText = `Nombre de cycles ${nbDeCycles}`;

        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      } else if (pause === false && tempsInitial === 0) {
        tempsDeRepos--;
        blocWork.classList.remove("active");
        blocPause.classList.add("active");

        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      }
    }, 1000);
    btnReset.addEventListener("click", () => {
      blocWork.classList.remove("active");
      blocPause.classList.remove("active");
      clearInterval(timer);
      checkInterval = false;
      tempsInitial = 1800;
      tempsDeRepos = 300;
      affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
        tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
      }`;
      affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)} : ${
        tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
      }`;
    });
  } else {
    return;
  }
});

btnPause.addEventListener("click", () => {
  if (checkInterval === true) {
    if (pause === false) {
      blocWork.classList.remove("active");
      btnPause.innerText = "Play";
      // btnPause.style.backgroundColor = "black"
    } else if (pause === true) {
      blocWork.classList.add("active");
      // btnPause.style.backgroundColor = "white"
      btnPause.innerText = "Pause";
    }
    pause = !pause;
  }
});
