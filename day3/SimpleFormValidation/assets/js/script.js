document
  .querySelector("#form-valid")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let email = formData.get("email");

    document.querySelector(".email-error").innerText = "";

    if (email.trim() === "") {
      document.querySelector(".email-error").innerText =
        "Please enter an email address";
      alert(`Please enter an email address`);
    }
  });
