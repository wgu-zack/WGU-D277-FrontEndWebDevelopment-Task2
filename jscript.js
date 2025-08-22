document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (event) {
    if (email.value !== confirmEmail.value) {
      event.preventDefault();;
      alert("Email addresses do not match!");
    } 
    else {
      alert("Form submitted successfully!");
    }
  });
});
