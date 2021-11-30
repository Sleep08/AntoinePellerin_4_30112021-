function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); /*récupére bouton close -AP */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/*création de la fonction pour fermer le modal -AP */
function launchModalClose() { 
  modalbg.style.display = "none";
}

// CLOSE MODAL

closeBtn.addEventListener("click", launchModalClose); /*Ecoute l'event pour activer fonction de ModalClose -AP */


