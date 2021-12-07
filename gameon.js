/* CONSTANTES DES CHAMPS */
const formInscription = document.getElementById('formInscription');
const eltFormulaire = document.getElementsByClassName('formData');
const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const nbTournoi = document.getElementById('quantity');
const checkLocation = document.querySelectorAll('#choixlocation .checkbox-input');
const boxChoice = document.getElementById('checkbox1');
const formenvoye = document.getElementById('formenvoye');
/* VERIFICATION DES ELEMENTS DU FORM */

/*nom et prénom ne doivent pas être vides */

/*function prenomOk() {
    let value = e.target.value;
    if (value.length<2){
        return false;
    } else{
        return true;
    }
};

function nomOk() {
    let value = e.target.value;
    if (value.length<2){
        return false;
    } else{
        return true;
    }
};


/* l'email doit être valide*/

/*function emailOk() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim().match(re)){
        return true;
    } else {
        return false;
    }
};

/* Pour le nombre de concours, une valeur numérique est saisie. */

/*function nbConcoursOk() {
    if (isNaN(nbTournoi)||=""){
        return false;
    } else{
        return true;
    }
}

/* Une ville doit être sélectionnée */

/*function cityOk() {
    for(i=0; i<checkLocation.length; i++) {
        if(checkLocation[i].checked){
            return true
        } else {
        return false
        }
    }    
}

/* La case conditions doit être séléctionnée */

/*function conditionsOk() {
    if (boxChoice.checked == true) {
        return true;
    } else {
        return false;
    }
}
*/
/*function allLocation() {
    for (i=0; i<checkLocation.length; i++);
    if(allLocation[i].selected){
        return true;
    } else {
        return false;
    }
}*/
/* ENVOI DU FORMULAIRE */
formInscription.addEventListener("submit", function(e) {
//Déclaration de l'ensemble des critères pour afficher message d'erreur
//si le champ n'est pas bien complété.
    let prenomOk = true;
    let nomOk = true;
    let emailOk = true;
    let nbTournoiOk = true;
    let cityOk = false;
    let conditionsOk = true;

//Déclaration pour regrouper l'ensemble des critères afin
//de s'assurer qu'ils sont tous respectés.
    let inscriptionOk = true;

//Vérification du prénom :
    if(prenom.value.length<2) {
        prenomOk = false;
        inscriptionOk = false;
    }
//Vérification du nom :
    if(nom.value.length<2) {
        nomOk = false;
        inscriptionOk = false;
    }
//Vérification de l'email :
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.trim().match(re)){
        emailOk = false;
        inscriptionOk = false;
    }
//Vérification de la date de naissance :

//Vérification du nombre de tournois :
    let ra = /^[0-9]$|^[1-9][0-9]$|^(99)$/;
    if (!nbTournoi.value.trim().match(ra)){
        nbTournoiOk = false;
        inscriptionOk = false;
    }
// Vérification d'une ville sélectionnée :
    for (var i = 0; i < checkLocation.length; i++) { 
        if (checkLocation.item(i).checked) {
            cityOk = true;
        }
    }
// Vérification des conditions générales cochées :
    if (!boxChoice.checked) {
        conditionsOk = false;
        inscriptionOk = false;
    }
//Création du message d'erreur si mal complété ou
// vide si complété correctement.
    if(prenomOk){
        document.getElementById('erreurprenom').style.display='none';    
        prenom.style.border='2px solid green';    
    } else {
        document.getElementById('erreurprenom').style.display='block';    
        prenom.style.border='2px solid red';    
        document.getElementById('erreurprenom').innerHTML="> Veuillez saissir minimum 2 caractères.";    
    }
    if(nomOk){
        document.getElementById('erreurnom').style.display='none';    
        nom.style.border='2px solid green';    
    } else {
        document.getElementById('erreurnom').style.display='block'; 
        nom.style.border='2px solid red';       
        document.getElementById('erreurnom').innerHTML="> Veuillez saissir minimum 2 caractères.";
    }
    if(emailOk){
        document.getElementById('erreurmail').style.display='none';    
        email.style.border='2px solid green';    
    } else {
        document.getElementById('erreurmail').style.display='block'; 
        email.style.border='2px solid red';       
        document.getElementById('erreurmail').innerHTML="> Veuillez entrer une adresse mail valide.";
    }
    if(nbTournoiOk){
        document.getElementById('erreurnbTournoi').style.display='none';    
        nbTournoi.style.border='2px solid green';    
    } else {
        document.getElementById('erreurnbTournoi').style.display='block'; 
        nbTournoi.style.border='2px solid red';       
        document.getElementById('erreurnbTournoi').innerHTML="> Veuillez entrer un nombre de tournois.";
    }
    if(cityOk){
        document.getElementById('erreurcity').style.display='none';    
    } else {
        document.getElementById('erreurcity').style.display='block'; 
        document.getElementById('erreurcity').innerHTML="> Veuillez sélectionner une ville.";
    }
    if(conditionsOk){
        document.getElementById('erreurconditions').style.display='none';    
    } else {
        document.getElementById('erreurconditions').style.display='block'; 
        document.getElementById('erreurconditions').innerHTML="> Veuillez accepter les conditions d'utilisation.";
    }
//Déclanche message de validation si tout est Ok :
    if(inscriptionOk){
    alert('Formulaire Envoyé !');
    } else {
        alert('Il manque des informations');
        e.preventDefault();  
    }
});


/*function validate(event){
    event.preventDefault();
    if (!prenomOk()) {
        return false;
    }
    if (!nomOk()) {
        return false;
    }
    if (!emailOk()) {
        return false;
    }
    if (!nbConcoursOk()) {
        return false;
    }
    if (!cityOk()) {
        return false;
    }
    if (!conditionsOk()){
        return false;
    } 
    return true;
}*/