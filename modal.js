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

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");
const messageValidation = document.querySelector(".message-validation");
const messageValidationBtnClose = document.querySelector(".message-validation_close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeForm.addEventListener("click", closeModal);
messageValidationBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display ="block";
  modalBgContent.classList.remove("closed");
  messageValidation.style.display = 'none';
  messageValidationBtnClose.style.display = 'none';
}

// close modal form
function closeModal() {
  modalBgContent.classList.add("closed");
  setTimeout(() => {
    modalbg.style.display = "none";
  }, 800);
}

// DOM Elements
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const locations = document.getElementById("locations");
const conditions = document.getElementById("checkbox1");

// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
const regexQuantity = /^[1-9]{0,1}[0-9]$/g;

// Créer un message d'erreur pour les inputs du formulaire
let messageFirst = document.createElement("p");
let messageLast = document.createElement("p");
let messageEmail = document.createElement("p");
let messageBirthdate = document.createElement("p");
let messageQuantity = document.createElement("p");
let messageLocations = document.createElement("p");
let messageConditions = document.createElement("p");

// Ajouter une classe au message d'erreur
const error = [messageFirst, messageLast, messageEmail, messageBirthdate, messageQuantity, messageLocations, messageConditions];

for (let i = 0; i < error.length; i++) {
  error[i].classList.add("error");
}

// Ajouter les messages d'erreur
function ErrorFirstAdd() {
  first.parentElement.appendChild(messageFirst);
  first.style.border ="2px solid #FF4E60";
  messageFirst.style.display = "block";
}
function errorLastAdd() {
  last.parentElement.appendChild(messageLast);
  last.style.border ="2px solid #FF4E60";
  messageLast.style.display = "block";
}
function errorEmailAdd() {
  email.parentElement.appendChild(messageEmail);
  email.style.border ="2px solid #FF4E60";
  messageEmail.style.display = "block";
}
function errorBirthdateAdd() {
  birthdate.parentElement.appendChild(messageBirthdate);
  birthdate.style.border ="2px solid #FF4E60";
  messageBirthdate.style.display = "block";
}
function errorQuantityAdd() {
  quantity.parentElement.appendChild(messageQuantity);
  quantity.style.border ="2px solid #FF4E60";
  messageQuantity.style.display = "block";
  messageQuantity.innerHTML = "Veuillez renseigner un nombre entre 0 et 99.";
}
function errorLocationAdd() {
  location6.parentElement.appendChild(messageLocations);
  messageLocations.style.display= "block";
  messageLocations.innerHTML = "Veuillez renseigner un tournoi auquel participer.";
}
function errorConditionsAdd() {
  document.getElementById("conditions").parentElement.appendChild(messageConditions);
  messageConditions.style.display= "block";
  messageConditions.innerHTML = "Veuillez accepter les conditions d'utilisation.";
}

// Enlever les messages d'erreur
function errorFirstRemove() {
  first.style.border ="none"
  messageFirst.style.display = "none";
}
function errorLastRemove() {
  last.style.border ="none"
  messageLast.style.display = "none";
}
function errorEmailRemove() {
  email.style.border ="none"
  messageEmail.style.display = "none";
}
function errorBirthdateRemove() {
  birthdate.style.border ="none"
  messageBirthdate.style.display = "none";
}
function errorQuantityRemove() {
  quantity.style.border ="none"
  messageQuantity.style.display = "none";
}

// Fonction de validation des inputs du formulaires //
function firstValid() {
  if (first.value.length < 2) {
    ErrorFirstAdd();
    messageFirst.innerHTML = "Ce champ doit contenir minimum 2 caractères.";
    return false;
  }
  if(!first.value.match(regexName)) {
    ErrorFirstAdd();
    messageFirst.innerHTML = "Ce champ ne doit pas contenir de caractères spéciaux";
    return false;
  }
  else {
    errorFirstRemove();
  }
  return true;
};

function lastValid() {
  if(last.value.length < 2) {
    errorLastAdd();
    messageLast.innerHTML = "Ce champ doit contenir minimum 2 caractères.";
    return false;
  }
  if(!last.value.match(regexName)) {
    errorLastAdd();
    messageLast.innerHTML = "Ce champ ne doit pas contenir de caractères spéciaux.";
    return false;
}
  else {
    errorLastRemove();
  }
  return true;
};

function emailValid() {
  if(!email.value) {
    errorEmailAdd()
    messageEmail.innerHTML = "Veuillez renseigner une adresse email.";
    return false;
  }
  if(!email.value.match(regexEmail)) {
    errorEmailAdd();
    messageEmail.innerHTML = "Veuillez renseigner une adresse email valide.";
    return false;
  }
  else {
    errorEmailRemove();
  }
  return true;
}

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
    errorBirthdateAdd();
    messageBirthdate.innerHTML = "Vous devez avoir plus de 18 ans pour participer.";
    return false;
  }
  if (differenceInYears > 130) {
    errorBirthdateAdd();
    messageBirthdate.innerHTML = "Veullez renseigner une date de naissance valide.";
    return false;
  }
  if (!differenceInYears) {
    errorBirthdateAdd();
    messageBirthdate.innerHTML = "Veullez renseigner une date de naissance.";
    return false;
  }
  else {
    errorBirthdateRemove();
  }
  return true;
}

function quantityValid() {
  if(!quantity.value.match(regexQuantity)) {
    errorQuantityAdd();
    return false;
  }
  else {
    errorQuantityRemove();
  }
  return true;
}

function locationValid() {
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {
    errorLocationAdd();
    return false;
  }
  else {
    messageLocations.style.display = "none";
  }
  return true;
};

function conditionsValid() {
  if(!conditions.checked) {
    errorConditionsAdd();
    return false;
  }
  else {
    messageConditions.style.display = "none";
  }
  return true;
};

// Evenement des inputs du formulaires
first.addEventListener('change', () => {
  firstValid();
});
last.addEventListener('change', () => {
  lastValid();
});
email.addEventListener('change', () => {
  emailValid();
});
birthdate.addEventListener('change', () => {
  birthdateValid();
});
quantity.addEventListener('change', () => {
  quantityValid();
});
locations.addEventListener('change', () => {
  locationValid(); 
});
conditions.addEventListener('change', () => {
  conditionsValid()
});

// Evenement au submit du formulaire
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  firstValid();
  lastValid();
  emailValid();
  birthdateValid();
  quantityValid();
  locationValid();
  conditionsValid();

  // Si tous les champs du formulaires sont valide
  if (firstValid() && lastValid() && emailValid() && birthdateValid() && quantityValid() && locationValid() && conditionsValid()) {
    messageValidation.style.display = 'block';
    messageValidationBtnClose.style.display ='block';
    form.style.display = "none";
    // Réinitiliser les champs du formulaires
    form.reset();
  }  
});
