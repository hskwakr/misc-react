let firstName = "Jane";
let lastName = "Jacobs";
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = "Save Profile";
    // TODO: show inputs, hide content
    show(firstNameInput);
    show(lastNameInput);
    hide(firstNameText);
    hide(lastNameText);
  } else {
    editButton.textContent = "Edit Profile";
    // TODO: hide inputs, show content
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
  // TODO: update text labels
  updateFirstName();
  updateLastName();
  updateHello();
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

function updateFirstName() {
  firstNameText.textContent = firstNameInput.value;
}

function updateLastName() {
  lastNameText.textContent = lastNameInput.value;
}

function updateHello() {
  helloText.textContent =
    "Hello " + firstNameInput.value + " " + lastNameInput.value + "!";
}

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
