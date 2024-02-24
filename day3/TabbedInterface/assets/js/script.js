const tabsData = [
  {
    id: 1,
    title: "Tab 1",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Tab 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, possimus.",
  },
  {
    id: 3,
    title: "Tab 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio, tempora error facilis in officia?",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let tabsWrapper = document.querySelector(".tabs-wrapper");
  let tabContent = document.querySelector(".tab-content");

  window.openTab = (id) => {
    const getTab = tabsData.find((tab) => id === tab.id);
    if (getTab) {
      tabContent.style.opacity = 0; // Set opacity to 0 before changing content
      setTimeout(() => {
        tabContent.innerHTML = `<p>${getTab.description}</p>`;
        tabContent.style.opacity = 1; // Set opacity to 1 after changing content
      }, 500); // Wait for the transition duration before changing the content
    }
  };
  tabsData.forEach((tab) => {
    tabsWrapper.innerHTML += `<button onclick="openTab(${tab.id})">${tab.title}</button>`;
  });
});
