function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  const isPassword = field.type === "password";

  field.type = isPassword ? "text" : "password";
  icon.src = isPassword
    ? "./assets/famicons--eye-sharp.svg"
    : "./assets/mdi--eye-off (1).svg";
  icon.alt = isPassword ? "Hide" : "Show";
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirm-password").value;

    if (name === "") {
      alert("Name cannot be empty.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayPassword").textContent = password;
    document.getElementById("submittedData").style.display = "block";

    this.reset();

    const eyeIcons = document.querySelectorAll(".toggle-eye");
    eyeIcons.forEach((icon) => {
      icon.src = "./assets/mdi--eye-off (1).svg";
      icon.alt = "Show";
    });

    document.getElementById("password").type = "password";
    document.getElementById("confirm-password").type = "password";
  });
