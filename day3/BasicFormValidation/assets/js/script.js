document
  .querySelector("#form-valid")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let name = formData.get("name");
    let email = formData.get("email");
  

    document.querySelector(".name-error").innerText = "";
    document.querySelector(".email-error").innerText = "";

    if (name.trim() === "") {
      document.querySelector(".name-error").innerText = "Empty";
    }
    if (email.trim() === "") {
      document.querySelector(".email-error").innerText = "Empty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.querySelector(".email-error").innerText =
        "Enter a valid email address";
    }

    if (name.trim() !== "" && emailRegex.test(email)) {
      alert(`Name and Email: ${name}, ${email}`);
    }
  });
