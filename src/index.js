function isValidEmail(email) {
  const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailChar.test(email);
}

function ratioCheck() {
  var ratioButtons = document.getElementsByName("radioGroup");

  for (var i = 0; i < ratioButtons.length; i++) {
    if (ratioButtons[i].checked) {
      return true;
    }
  }
  alert("Please check if you are/aren't a dell employee");
  return false;
}

function checkboxCheck() {
  var checkButtons = document.getElementsByName("checkboxGroup");

  for (var i = 0; i < checkButtons.length; i++) {
    if (checkButtons[i].checked) {
      return true;
    }
  }
  alert("Please check your role");
  return false;
}

const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameField = document.querySelector("#name");
  if (nameField.value === "") {
    alert("Please, type your name.");
    nameField.focus();
    return false;
  }

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

  alert("Feedback form submited sucessfully");
  window.location.href = "login.html";
});

function abrirModal() {
  document.getElementById("modal-container").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal-container").style.display = "none";
}
