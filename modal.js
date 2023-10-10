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

const confirmaValidation = document.querySelector(".message-validation");
 
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

//////////////////////////
// Input du formulaire //
const form = document.getElementById("form");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const input = document.getElementsByTagName("input");
const quantity = document.getElementById("quantity");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const locations = document.getElementById("locations");

const conditions = document.getElementById("checkbox1");

////////////
// Regex //

const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
const regexQuantity = /^[1-9]{0,1}[0-9]$/g;

/////////////////////////////////////////////////////////////
// Créer un message d'erreur pour les inputs du formulaire //

//
let errorFirst = document.createElement("p");
errorFirst.classList.add("error");
//
let errorLast = document.createElement("p");
errorLast.classList.add("error");
//
let errorEmail = document.createElement("p");
errorEmail.classList.add("error");
//
let errorBirthdate = document.createElement("p");
errorBirthdate.classList.add("error");
//
let errorQuantity = document.createElement("p");
errorQuantity.classList.add("error");
//
let errorLocations = document.createElement("p");
errorLocations.classList.add("error");
//
let errorConditions = document.createElement("p");
errorConditions.classList.add("error");

////////////////////////////////////////////////////////
// Function de validation des inputs des formulaires //

// Valider le prénom
function firstValid() {
  if (first.value.length < 2) {
    first.parentElement.appendChild(errorFirst);
    first.style.border ="2px solid #e54858";
    errorFirst.style.display = "block";
    errorFirst.innerHTML = "Ce champ doit contenir minimum 2 caractères.";
    return false;
  }
  else if(!first.value.match(regexName)) {
    first.parentElement.appendChild(errorFirst);
    first.style.border ="2px solid #e54858";
    errorFirst.style.display = "block";
    errorFirst.innerHTML = "Ce champ ne doit pas contenir de caractères spéciaux";
    return false;
  }
  else {
    first.style.border ="none"
    errorFirst.style.display = "none";
  }
  return true;
};

// Valider le nom
function lastValid() {
  if(last.value.length < 2) {
    last.parentElement.appendChild(errorLast);
    last.style.border ="2.5px solid #e54858";
    errorLast.style.display = "block";
    errorLast.innerHTML = "Ce champ doit contenir minimum 2 caractères.";
    return false;
  }
  else if(!last.value.match(regexName)) {
    last.parentElement.appendChild(errorLast);
    last.style.border ="2.5px solid #e54858";
    errorLast.style.display = "block";
    errorLast.innerHTML = "Ce champ ne doit pas contenir de caractères spéciaux.";
    return false;
}
  else {
    last.style.border ="none"
    errorLast.style.display ="none";
  }
  return true;
};

// Valider l'email
function emailValid() {
  if(!email.value.match(regexEmail)) {
    email.parentElement.appendChild(errorEmail);
    email.style.border ="2.5px solid #e54858"
    errorEmail.style.display = "block";
    errorEmail.innerHTML = "Veuillez renseigner une adresse email valide";
    return false;
  }
  else {
    email.style.border ="none"
    errorEmail.style.display = "none";
  }
  return true;
}

// Valider la date de naissance
function birthdateValid() {
  //Récupérer la date de naissance de l'utilsiateur
  const birthdateValue = new Date(birthdate.value);

  //Récupérer la date actuelle
  const currentDate = new Date();

  //Calculez la différence entre la date actuelle et la date de naissance
  const difference_currentDate_birthdate = currentDate - birthdateValue;

  // Convertissez la différence en années                    // nombre de millisecondes dans une année
  const differenceInYears = difference_currentDate_birthdate / (1000 * 60 * 60 * 24 * 365); 

  // 4. Vérifiez si l'utilisateur a plus de 18 ans
  if (differenceInYears < 18) {
    birthdate.parentElement.appendChild(errorBirthdate);
    birthdate.style.border ="2px solid #e54858"
    errorBirthdate.style.display = "block";
    errorBirthdate.innerHTML = "Vous devez avoir plus de 18 ans pour participer.";
    return false;
  }
  else if (differenceInYears > 130) {
    birthdate.parentElement.appendChild(errorBirthdate)
    birthdate.style.border ="2px solid #e54858"
    errorBirthdate.style.display = "block";
    errorBirthdate.innerHTML = "Veullez renseigner une date de naissance valide";
    return false;
  }
  else {
    birthdate.style.border ="none"
    errorBirthdate.style.display = "none";
  }
  return true;
}

// Valider nombre de participation au tournoi GameOn
function quantityValid() {
  if(!quantity.value.match(regexQuantity)) {
    quantity.parentElement.appendChild(errorQuantity);
    quantity.style.border="2px solid #e54858"
    errorQuantity.style.display = "block";
    errorQuantity.innerHTML = "Veuillez renseigner un nombre entre 0 et 99.";
    return false;
  }
  else {
    quantity.style.border ="none"
    errorQuantity.style.display = "none";
  }
  return true;
}

// Valider choix localisation tournoi
function locationValid() {
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    location6.parentElement.appendChild(errorLocations);
    errorLocations.style.display= "block";
    errorLocations.innerHTML = "Veuillez renseigner un tournoi auquel participer.";
    return false;
  }
  else {
    errorLocations.style.display = "none";
  }
  return true;
};
 
// Valider les conditions d'utilisation
function conditionsValid() {
  if(!conditions.checked) {
    document.getElementById("conditions").parentElement.appendChild(errorConditions);
    errorConditions.innerHTML = "Veuillez accepter les conditions d'utilisation.";
    return false;
  }
  else {
    errorConditions.style.display= "none";
  }
  return true;
};

//////////////////////////////////////////
// Evenement des inputs du formulaires //

// Evenement input prénom
first.addEventListener('change', (event) => {
  event.preventDefault();
  firstValid();
});

// Evenement input nom
last.addEventListener('change', (event) => {
  event.preventDefault();
  lastValid();
});

// Evenement input email
email.addEventListener('change', (event) => {
  event.preventDefault();
  emailValid();
});

// Evenement input birthdate
birthdate.addEventListener('change', (event) => {
  event.preventDefault();
  birthdateValid();
});

// Evenement input quantity
quantity.addEventListener('change', (event) => {
  event.preventDefault();
  quantityValid();
});

// Evenement input location
locations.addEventListener('change', (event) => {
  event.preventDefault();
  locationValid();
});

// Evenement input conditions
conditions.addEventListener('change', (event) => {
  event.preventDefault();
  conditionsValid()
});


// Evenement au submit du formulaire
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  if(!first.value) {
    first.parentElement.appendChild(errorFirst);
    first.style.border="2px solid #e54858"
    errorFirst.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!last.value) {
    last.parentElement.appendChild(errorLast);
    last.style.border="2px solid #e54858"
    errorLast.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!email.value) {
    email.parentElement.appendChild(errorEmail);
    email.style.border="2px solid #e54858"
    errorEmail.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!birthdate.value) {
    birthdate.parentElement.appendChild(errorBirthdate);
    birthdate.style.border="2px solid #e54858"
    errorBirthdate.innerHTML = "Ce champ ne doit pas être vide.";
  }
  if(!quantity.value.match(regexQuantity)) {
    quantity.parentElement.appendChild(errorQuantity);
    quantity.style.border="2px solid #e54858"
    errorQuantity.innerHTML = "Veuillez un nombre entre 0 et 99";
  }
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    location6.parentElement.appendChild(errorLocations);
    errorLocations.style.display= "block";
    errorLocations.innerHTML = "Veuillez renseigner un tournoi auquel participer.";
  }
  if(!conditions.checked) {
    conditions.parentElement.appendChild(errorConditions);
    errorConditions.innerHTML = "Veulliez accepter les conditions d'utilisation";
  }

  // If all conditions are valid 
  if (firstValid() && lastValid() && emailValid() && birthdateValid() && quantityValid() && locationValid() && conditionsValid()) {
   //formWrapper.style.display = 'none';
    confirmaValidation.style.display = 'block';
    form.style.display ="none";
    form.reset();
  } 

});
