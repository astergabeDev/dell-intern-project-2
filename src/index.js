function isValidEmail(email) {
  // Expressão regular para verificar se o formato do e-mail é válido
  const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailChar.test(email);
}

function ratioCheck() {
  var ratioButtons = document.getElementsByName("radioGroup");
  console.log(ratioButtons);

  for (var i = 0; i < ratioButtons.length; i++) {
    if (ratioButtons[i].checked) {
      console.log(ratioButtons);
      return true;
    }
  }
  alert("Please check if you are/aren't a dell employee");
  console.log(ratioButtons);
  return false;
}

function checkboxCheck() {
  var checkButtons = document.getElementsByName("checkboxGroup");

  for (var i = 0; i < checkButtons.length; i++) {
    if (checkButtons[i].checked) {
      return true;
    }
  }

  // nenhum botão foi selecionado
  alert("Please check your role");
  return false;
}

const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede que o formulário seja enviado

  // Validação do campo de nome
  const nameField = document.querySelector("#name");
  if (nameField.value === "") {
    alert("Please, type your name.");
    nameField.focus();
    return false;
  }

  // Validação do campo de e-mail
  const emailField = document.querySelector("#email");
  if (!isValidEmail(emailField.value)) {
    alert("Please, type a valid email.");
    emailField.focus();
    return false;
  }
  if (!ratioCheck()) {
    return false;
  }
  if (!checkboxCheck()) {
    return false;
  }

  // Se chegou aqui, o formulário foi validado com sucesso
  alert("Feedback form submited sucessfully");

  // Redireciona o usuário para a página de sucesso
  //window.location.href = 'sucesso.html';
});

function validarForm() {
  var senha = document.getElementById("password").value;
  var confirmSenha = document.getElementById("confirmPassword").value;
  var senhaErro = document.getElementById("senhaErro");

  if (senha !== confirmSenha) {
    senhaErro.innerHTML = "As senhas não coincidem!";
    return false;
  } else {
    senhaErro.innerHTML = "";
    return true;
  }
}

function limparFormulario() {
  document.getElementById("cadastroForm").reset();
  document.getElementById("username").value = "";
}

var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var usernameInput = document.getElementById("username");

firstNameInput.addEventListener("input", atualizarUsername);
lastNameInput.addEventListener("input", atualizarUsername);

function atualizarUsername() {
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;

  usernameInput.value = (firstName + lastName)
    .toLowerCase()
    .replace(/\s+/g, "");
}

var birthdateInput = document.getElementById("birthdate");
var dataErro = document.getElementById("dataErro");

birthdateInput.addEventListener("input", validarData);

function validarData() {
  var birthdate = new Date(birthdateInput.value);
  var hoje = new Date();

  if (birthdate > hoje) {
    dataErro.innerHTML =
      "A data de aniversário não pode ser posterior ao dia de hoje!";
  } else {
    dataErro.innerHTML = "";
  }
}
