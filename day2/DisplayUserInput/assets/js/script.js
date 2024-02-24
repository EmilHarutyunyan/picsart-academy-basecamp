const displayText = () => {
  const inputText = document.querySelector(".input-text");
  const paragraphText = document.querySelector(".text-paragraph");
  if (inputText.value !== "") {
    paragraphText.innerHTML = inputText.value;
    inputText.value = "";
  }
};
