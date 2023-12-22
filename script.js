document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("send-form");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const messageTextarea = document.getElementById("message");

  form.addEventListener("submit", function (event) {
      if (firstNameInput.value.trim() === "") {
         document.getElementById("error-firstname").innerText = "Please enter your first name";
         event.preventDefault();
      } else {
          document.getElementById("error-firstname").innerText = "";
      }

      if (lastNameInput.value.trim() === "") {
          document.getElementById("error-lastname").innerText = "Please enter your last name";
          event.preventDefault();
      } else {
          document.getElementById("error-lastname").innerText = "";
      }

      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(emailInput.value)) {
          document.getElementById("error-email").innerText = "Please enter a valid email address";
          event.preventDefault();
      } else {
          document.getElementById("error-email").innerText = "";
      }
      
      const phoneNumberPattern = /^\d+$/;
      if (!phoneNumberPattern.test(phoneNumberInput.value)) {
          document.getElementById("error-phonenumber").innerText = "Please enter a valid phone number (numbers only)";
          event.preventDefault();
      } else {
          document.getElementById("error-phonenumber").innerText = "";
      }
  });
});