const showHide = (btn) => {
  const contentDiv = document.querySelector(".content");
  if (btn.innerText === "Hide") {
    contentDiv.style.display = "none";
    btn.innerText = "Show";
  } else {
    contentDiv.style.display = "block";
    btn.innerText = "Hide";
  }
};
