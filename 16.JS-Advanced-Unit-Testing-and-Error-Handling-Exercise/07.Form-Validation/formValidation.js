function validate() {
  const companyField = document.getElementById("companyInfo");
  const companycheck = document.getElementById("company");
  const form = document.getElementById("registerForm");

  companycheck.addEventListener("change", () => {
    if (companycheck.checked) {
      companyField.style.display = "block";
    } else {
      companyField.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userNameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rePasswordInput = document.getElementById("confirm-password");
    const companyNumerInput = document.getElementById("companyNumber");
    const validField = document.getElementById("valid");

    const userPattern = /^[a-zA-Z0-9]+$/gm;
    const passwordPattern = /^[\w]+$/gm; 
    const emailPattern = /.*@.*\..*/gm;

    let userNameIsValid = false;
    let passIsValid = false;
    let rePassIsValid = false;
    let emailIsValid = false;
    let companyNumberIsValid = false;

    if (
      userPattern.test(userNameInput.value) &&
      userNameInput.value.length >= 3 &&
      userNameInput.value.length <= 20
    ) {
      userNameIsValid = true;
    }

    if (emailPattern.test(emailInput.value)) {
      emailIsValid = true;
    }

    if (
      passwordPattern.test(passwordInput.value) &&
      passwordInput.value.length >= 5 &&
      passwordInput.value.length <= 15 &&
      passwordInput.value === rePasswordInput.value
    ) {
      passIsValid = true;
      rePassIsValid = true;
    }

    if (companycheck.checked) {
      if (companyNumerInput.value >= 1000 && companyNumerInput.value <= 9999) {
        companyNumberIsValid = true;
      }
    } else{
        companyNumberIsValid = true; //  companyNumberIsValid = false; няма занчение дали е true или false
    }

    if (
      userNameIsValid &&
      passIsValid &&
      rePassIsValid &&
      emailIsValid &&
      companyNumberIsValid
    ) {
      validField.style.display = "block";
    } else {
      validField.style.display = "none";
    }

    if (!userNameIsValid) {
      userNameInput.style.borderColor = "red";
    } else {
      userNameInput.style.border = "none";
    }
    if (!passIsValid) {
      passwordInput.style.borderColor = "red";
    } else {
      passwordInput.style.border = "none";
    }
    if (!rePassIsValid) {
      rePasswordInput.style.borderColor = "red";
    } else {
      rePasswordInput.style.border = "none";
    }

    if (!emailIsValid) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.border = "none";
    }
    if (!companyNumberIsValid) {
      companyNumerInput.style.borderColor = "red";
    } else {
      companyNumerInput.style.border = "none";
    }
  });
}
