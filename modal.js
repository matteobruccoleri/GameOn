// DOM Elements
const icon = document.querySelector(".icon");
const navbar = document.querySelector(".main-navbar");
const navbarClose = document.querySelector(".navbar-close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");
const messageValidation = document.querySelector(".message-validation");
const messageValidationBtnClose = document.querySelector(".message-validation_close");
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name="location"]');
const conditions = document.getElementById("checkbox1");

// Ajoute la class open à main-navbar
function openNavbar() {
  navbar.classList.add("open");
}
// Enlève la class open à main-navbar
function removeNavbar() {
  navbar.classList.remove("open"); 
}

// Ouvre la navbar
icon.addEventListener("click", openNavbar);
// Ferme la navbar
navbarClose.addEventListener("click", removeNavbar);

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
}
// close modal form
function closeModal() {
  modalBgContent.classList.add("closed");
  setTimeout(() => {
    modalbg.style.display = "none";
  }, 800);
}

// Regex (expression régulière)
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexQuantity = /^[1-9]{0,1}[0-9]$/g;

// Message d'erreur des inputs
const message = {
  name: "Ce champ doit contenir minimum 2 caractères.",
  name2: "Ce champ ne doit pas contenir de caractères spéciaux.",
  email: "Veuillez renseigner une adresse email.",
  email2: "Veuillez renseigner une adresse email valide.",
  birthdate: "Vous devez avoir plus de 18 ans pour participer.",
  birthdate2: "Veullez renseigner une date de naissance valide.",
  birthdate3: "Veullez renseigner une date de naissance.",
  quantity: "Veuillez renseigner un nombre entre 0 et 99.",
  locations: "Veuillez renseigner un tournoi auquel participer.",
  conditions: "Veuillez accepter les conditions d'utilisation."
}

// Ajoute l'erreur
function addError(element, message) {
  element.parentElement.setAttribute('data-error-visible', 'true');
  element.parentElement.setAttribute('data-error', message);
  if(first || last || email || birthdate || quantity) {
    element.style.border ="2.5px solid #e54858";
  }
};

// Enlève l'erreur
function removeError(element) {
  element.parentElement.removeAttribute('data-error-visible');
  element.parentElement.removeAttribute('data-error');
  if(first || last || email || birthdate || quantity) {
    element.style.border ="none";
  }
};

// Vérifie first
function checkFirst(first, message) {
  if (first.value.length < 2) {
    addError(first, message.name);
    return false;
  }
  if(!first.value.match(regexName)) {
    addError(first, message.name2);
    return false;
  } else {
    removeError(first);
  }
  return true;
};

// Vérifie last
function checkLast(last, message) {
  if (last.value.length < 2) {
    addError(last, message.name);
    return false;
  }
  if(!last.value.match(regexName)) {
    addError(last, message.name2);
    return false;
  } else {
    removeError(last);
  }
  return true;
};

// Vérifie email
function checkEmail(email, message) {
  if(!email.value) {
    addError(email, message.email);
    return false;
  }
  if(!email.value.match(regexEmail)) {
    addError(email, message.email2);
    return false;
  } else {
    removeError(email);
  }
  return true;
}

// Vérifie birthdate
function checkBirthdate(birthdate, message) {

  const birthdateValue = new Date(birthdate.value);
  const currentDate = new Date();
 
  //Calcule la différence entre la date actuelle et la date de naissance
  const difference_currentDate_birthdate = currentDate - birthdateValue;
  // Convertissez la différence en années                     // nombre de millisecondes dans une année
  const differenceInYears = difference_currentDate_birthdate / (1000 * 60 * 60 * 24 * 365); 
 
  if (differenceInYears < 18) {
    addError(birthdate, message.birthdate)
    return false;
  }
  if (differenceInYears > 130) {
    addError(birthdate, message.birthdate2)
    return false;
  }
  if (!differenceInYears) {
    addError(birthdate, message.birthdate3)
    return false;
  } else {
    removeError(birthdate);
  }
  return true;
}

// Vérifie quantity
function checkQuantity(quantity, message) {
  if(!quantity.value.match(regexQuantity)) {
    addError(quantity, message.quantity);
    return false;
  } else {
    removeError(quantity);
  }
  return true;
};

// Vérifie locations
function checkLocations(locations, message) {
  let isChecked =  [...locations].some((location) => location.checked );
  if (!isChecked) {
    addError(locations[0], message.locations);
  } else {
    for (let location of locations) {
      removeError(location);
    }
  }
  return isChecked;
}

// Vérifie conditions
function checkConditions(conditions, message) {
  if(!conditions.checked) {
    addError(conditions, message.conditions);
    return false;
  } else {
    removeError(conditions);
  }
  return true;
};

// Ajoute un évenement aux inputs du formulaire
first.addEventListener('change', () => {checkFirst(first, message)});
last.addEventListener('change', () => {checkLast(last, message)});
email.addEventListener('change', () => {checkEmail(email, message)});
birthdate.addEventListener('change', () => {checkBirthdate(birthdate, message)});
quantity.addEventListener('change', () => {checkQuantity(quantity, message)});
for (let location of locations) {location.addEventListener('change', () => {checkLocations(locations, message)});}
conditions.addEventListener('change', () => {checkConditions(conditions, message)});

// Ajoute un évenement au submit du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isCheckedFirst = checkFirst(first, message);
  const isCheckLast = checkLast(last, message);
  const isCheckedEmail = checkEmail(email, message);
  const isCheckBirthdate = checkBirthdate(birthdate, message);
  const isCheckQuantity = checkQuantity(quantity, message);
  const isCheckLocations = checkLocations(locations, message);
  const isCheckConditions = checkConditions(conditions, message);

  if (isCheckedFirst && isCheckLast && isCheckedEmail && isCheckBirthdate && isCheckQuantity && isCheckLocations && isCheckConditions ) {
    messageValidation.style.display = 'block';
    form.style.display = "none";
    form.reset();
  }
});
