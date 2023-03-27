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

  var senha = document.getElementById("password").value;
  var confirmSenha = document.getElementById("confirmPassword").value;
  var senhaErro = document.getElementById("senhaErro");

  if (senha !== confirmSenha) {
    senhaErro.innerHTML = "Passwords do not match!";
    return false;
  } else {
    senhaErro.innerHTML = "";
    window.location.href = "index.html";
    alert("Registration done successfully!");
    return true;
  }
});

function limparFormulario() {
  document.getElementById("cadastroForm").reset();
  document.getElementById("username").value = "";
}
function validarData() {
  var birthdate = new Date(birthdateInput.value);
  var hoje = new Date();

  if (birthdate > hoje) {
    dataErro.innerHTML = "The birth date needs to be prior today";
  } else {
    dataErro.innerHTML = "";
  }
}
function atualizarUsername() {
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
