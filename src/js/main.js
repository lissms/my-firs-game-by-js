"use strict";

const profession = document.querySelector(".js-select");
const message = document.querySelector(".js-message");
const playButton = document.querySelector(".js-play-button");

function addMessageFuntionhandler() {
  message.classList.remove("red");
  if (profession.value === "journalis") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (profession.value === "history") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (profession.value === "physical") {
    message.innerHTML = "Vas por buen camino.";
  }
  if (profession.value === "biology") {
    message.innerHTML = "";
    functionYouHaveWon();
  }
  if (profession.value === "design") {
    message.innerHTML = "No creo que tenga que ver con lo visual";
  }
  if (profession.value === "layout") {
    message.innerHTML = "No creo que tenga que ver con lo visual";
  }
  if (profession.value === "choose") {
    message.innerHTML = "Debes escoger una profesión";
  }
}

playButton.addEventListener("click", addMessageFuntionhandler);

const newWindows = document.querySelector(".js-new-windows");

function functionYouHaveWon() {
  newWindows.innerHTML = `<div class="message">
 <div class="message__container">
   <h2 class="message__title">Has acertado!!!</h2>
 </div>
 <div class="messasge__img-title-container">
   <div class="titlle-container">
     <h2 class="message__profession">Microbiología</h2>
   </div>
   <div class="message-container">
     <p class="message__profession-history">
       Estudié microbiología y estuve vinculada a la investigación científica
       en el
       <a
         href="https://es.wikipedia.org/wiki/Centro_de_Ingenier%C3%ADa_Gen%C3%A9tica_y_Biotecnolog%C3%ADa_de_Cuba"
         >CIGB</a
       >
       durante 8 años.
     </p>
   </div>
 </div>
 <input
   type="button"
   class="button__play-again js-button-play-again"
   value="Vuelve a jugar"
 />
</div>
`;
  eventReturn();
}

function eventReturn() {
  const youHaveWon = document.querySelector(".message");
  const playAgainButton = document.querySelector(".js-button-play-again");
  function playAgain() {
    youHaveWon.classList.add("none");
  }
  playAgainButton.addEventListener("click", playAgain);
}

/* vidas */

function lifes() {
  let numberOfLife = document.querySelector(".js-number");
  const lostlives = 1;
  let numberLife = 3;

  function numberOfLiveRemaining() {
    numberLife = numberLife - lostlives;
    const remainingLife = numberLife;
    numberOfLife.innerHTML = remainingLife;
    const heart = document.querySelector(".js-life");
    heart.classList.add("lifeAnimation");

    if (remainingLife === 0) {
      message.innerHTML = "Lo siento, se han terminado tus oportunidades";
      message.classList.add("red");
      playButton.disabled = true;
      playButton.classList.add("gray");
    }
  }

  playButton.addEventListener("click", numberOfLiveRemaining);
}

lifes();

/* timer  */
const timer = document.querySelector(".js-timer");

let initialtimer = 60;
const endtimer = 1;

function timerFuntion() {
  initialtimer = initialtimer - endtimer;

  timer.innerHTML = initialtimer;
  gameOverbyTimer(); /* por que se llama aqui a la funcion */
}

function gameOverbyTimer() {
  if (initialtimer === 0) {
    message.innerHTML = "Lo siento, se ha terminado tu tiempo";
    message.classList.add("red");
    playButton.classList.add("gray");
    playButton.disabled = true;
    clearInterval(interval);
  }
}

let interval = setInterval(timerFuntion, 1000);

/* TAREAS PARA PERFECCIONAR EL JUEGO */

/* desabiliar la funcion timer cuadno llege a cero y cuando se le de a biología*/
/* resetear el timer a 20 cuadno se apriete el boton de volver a jugar */
/* una vez pierdas, habilitar el boton de volver a jugar. */
/* HACER MEDIA QUERIES DE TABLET, PC */
