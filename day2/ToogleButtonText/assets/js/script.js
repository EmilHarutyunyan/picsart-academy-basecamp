const toggleText = (btn) => {
  if (btn.innerText === "Hello") {
    btn.innerText = "Goodbye";
  } else if (btn.innerText === "Goodbye") {
    btn.innerText = "Hello";
  }
};
