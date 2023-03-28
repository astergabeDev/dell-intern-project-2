const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const allFields = document.querySelectorAll(".login-input");
  allFields.forEach((field) => {
    if (field.value.trim() === "") {
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  });

  const emptyFields = document.querySelectorAll(".login-input.error");
  if (emptyFields.length > 0) {
    return false;
  }
  var input = document.getElementById("birthdate").value;
  var date = new Date(input);

  if (isNaN(date.getTime())) {
    dateError.innerHTML = "Please, select a valid birthdate.";
    return false;
  }

  var today = new Date();
  if (date > today) {
    dateError.innerHTML = "Please, select a birthdate prior today.";
    return false;
  } else {
    dateError.innerHTML = "";
  }
  var pass = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPassword").value;
  var passError = document.getElementById("passError");

  if (pass !== confirmPass) {
    passError.innerHTML = "Passwords do not match!";
    return false;
  } else {
    passError.innerHTML = "";
  }
  alert("Registration done successfully!");
  window.location.href = "index.html";
  return true;
});

function clearForm() {
  document.getElementById("cadastroForm").reset();
  document.getElementById("username").value = "";
}

function updateUsername() {
  var firstNameInput = document.getElementById("firstName").value;
  var lastNameInput = document.getElementById("lastName").value;
  var usernameInput = document.getElementById("username");

  usernameInput.value = (firstNameInput + lastNameInput)
    .toLowerCase()
    .replace(/\s+/g, "");
}
var birthdateInput = document.getElementById("birthdate");
var dataErro = document.getElementById("dataErro");

birthdateInput.addEventListener("input", validarData);
