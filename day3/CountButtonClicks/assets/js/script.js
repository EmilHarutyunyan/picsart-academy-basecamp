let count = 0;
const addCount = () => {
  const clickCount = document.querySelector(".click-count");
  count++;
  clickCount.innerText = `Click count - ${count}`;
};
