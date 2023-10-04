/********** navbar tablet et mobile ***********/

// DOM Elements
const icon = document.querySelector(".icon");
const navbar = document.querySelector(".main-navbar");
const navbarClose = document.querySelector(".navbar-close");

// Ajouter la class open à main-navbar
function openNavbar() {

  navbar.classList.add("open");

}

// Enlever la class open à main-navbar 
function removeNavbar() {

  navbar.classList.remove("open");
  
}

// Cliquer sur l'icon pour ouvrir la navbar de la version tablette ou mobile
icon.addEventListener("click", openNavbar);

// Cliquer sur navabr-close pour fermer la navbar de la version tablette ou mobile
navbarClose.addEventListener("click", removeNavbar);

/********** Formulaire ***********/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");
 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeForm.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBgContent.classList.remove("closed");
}


// close modal form
function closeModal() {

  modalBgContent.classList.add("closed");

  setTimeout(() => {
  modalbg.style.display = "none";
  }, 800);

}

// Formulaire

// Input du formulaire
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const input = document.getElementsByTagName("input");
const quantity = document.getElementById("quantity");
const conditions = document.getElementById("checkbox1");


// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexDate = /^([0-2]{1}[0-9]{3})\/([0-1]{1}[0-9]{1})\/([0-2]{1}[0-9]{1}|30|31)$/;
const regexQuantity = /^([0-9]{1,2})$/;


// Créer un message d'erreur pour les inputs du formulaire
// first erreur
let errorFirst = document.createElement("p");
errorFirst.classList.add("error");

let errorLast = document.createElement("p");
errorLast.classList.add("error");

let errorEmail = document.createElement("p");
errorEmail.classList.add("error");

let errorBirthdate = document.createElement("p");
errorBirthdate.classList.add("error");

let errorQuantity = document.createElement("p");
errorQuantity.classList.add("error");

let errorConditions = document.createElement("p");
errorConditions.classList.add("error");

// valide
//let valide = document.createElement("p");
//valide.classList.add("valide");

// Variable de validation
let isValid = true;

//Ecouter la modification de prénom
const valideFirst = first.addEventListener('change', (event) => {
  event.preventDefault();

  if (first.value.length < 2 || !first.value.match(regexName)) {
    first.parentElement.appendChild(errorFirst);
    first.style.border ="2px solid #e54858"
    errorFirst.style.display = "block";
    errorFirst.innerHTML = "Ce champ ne doit contenir minimum 2 caractères et ne pas contenir de caractères spéciaux";
    isValid = false;
  }
  else if(first.value.length = 0) {
      first.parentElement.appendChild(errorFirst);
      errorFirst.style.display = "block";
      errorFirst.innerHTML = "Le champ ne doit pas être vide";
      isValid = false;
  }
  else if(!first.value.match(regexName)){ 
    errorFirst.innerHTML = "Ce champ ne doit pas contenir de caractères spéciaux"; 
    isValid = false;
  }
  else {
    first.style.border ="none"
    errorFirst.style.display = "none";
    isValid = true;
  }

});

last.addEventListener('change', (event) => {
  event.preventDefault();

  if(last.value.length < 2) {
    last.parentElement.appendChild(errorLast);
    errorLast.style.display = "block";
    errorLast.innerHTML = "Ce champ ne doit contenir minimum 2 caractères et ne pas contenir de caractères spéciaux";
    isValid = false;
  }
  else if(last.value.length = 0) {
    last.parentElement.appendChild(errorLast);
    errorLast.style.display = "block";
    errorLast.innerHTML ="Le champ ne doit pas être vide";
    isValid = false;
  }
  else {
    last.style.border ="none"
    errorLast.style.display ="none";
    isValid = true;
  }

});

email.addEventListener('change', (event) => {
  event.preventDefault();

  if(!email.value.match(regexEmail)) {
    email.parentElement.appendChild(errorEmail);
    errorEmail.style.display = "block";
    email.style.border ="2px solid #e54858"
    errorEmail.innerHTML = "Veuillez renseigner une adresse email valide";
    isValid = false;
  }
  else {
    email.style.border ="none"
    errorEmail.style.display = "none";
    isValid = true;
  }

});

quantity.addEventListener('change', (event) => {
  event.preventDefault();

  if(quantity.value.length == "") {
    quantity.parentElement.appendChild(quantityLast);
    quantityLast.style.display = "block";
    last.style.border ="2px solid #e54858"
    quantityLast.innerHTML = "Le champ ne doit pas être vide.";
    isValid = false;
  }
  else {
    quantity.style.border ="none"
    quantityLast.style.display = "none";
    isValid = true;
  }

});

form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  // Vérifier la validation
  if (isValid) {
    // Les conditions sont remplies, vous pouvez envoyer le formulaire ici

    // Log the form field values
    console.log("Prénom: " + first.value);
    console.log("Nom: " + last.value);
    console.log("E-mail: " + email.value);
    console.log("Anniversaire: " + birthdate.value);
    console.log(isValid);

    // Réinitialiser le formulaire
    //form.reset();
  } 

  if(!first.value) {
    first.parentElement.appendChild(errorFirst);
    
    errorFirst.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!last.value) {
    last.parentElement.appendChild(errorLast);
    
    errorLast.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!last.value) {
    last.parentElement.appendChild(errorLast);  
    errorLast.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!email.value) {
    email.parentElement.appendChild(errorEmail);
    errorEmail.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!birthdate.value) {
    birthdate.parentElement.appendChild(errorBirthdate);
    errorBirthdate.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!quantity.value) {
    quantity.parentElement.appendChild(errorQuantity);
    errorQuantity.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!conditions.checked) {
    conditions.parentElement.appendChild(errorConditions);
    errorConditions.innerHTML = "Veulliez accepter les conditions d'utilisation";
  }

  else { 
    console.log(isValid);
    // Les conditions ne sont pas remplies, affichez un message d'erreur
    alert("Le formulaire contient des erreurs. Veuillez corriger les champs en rouge.");
  } 
});



 