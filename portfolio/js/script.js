const pages = document.querySelectorAll(".page");
const sectionButtons = document.querySelectorAll(".section-button");
let currentPage = 0;

function handleHashChange() {
  if (location.hash) {
    let theName = location.hash.slice(1);
    pages.forEach((element) => {
      if (element.classList.contains("visible")) {
        element.classList.remove("visible");
      }
    });
    document.querySelector(`.${theName}`).classList.add("visible");

    sectionButtons.forEach((element, index) => {
      element.classList.remove("selected");
      if (element.innerText.toLowerCase() === theName) {
        element.classList.add("selected");
        currentPage = index;
      }
    });
    updateHash(currentPage);
  } else {
    document.querySelector(`.about-me`).classList.add("visible");
    history.replaceState({}, "", `/portfolio/#about-me`);
    sectionButtons[0].classList.add("selected");
  }
}

handleHashChange();

window.addEventListener("hashchange", handleHashChange);

function updateHash(index) {
  history.pushState(
    {},
    "",
    `/portfolio/#${sectionButtons[index].innerText.toLowerCase()}`
  );
  document.title = `${sectionButtons[index].innerText.toLowerCase()}`;
}

sectionButtons.forEach((element, index) => {
  sectionButtons[index].addEventListener("click", () => {
    currentPage = index;
    highlightButton(index);
    updateHash(index);
    handleHashChange(index);
  });
});

function highlightButton(index) {
  sectionButtons.forEach((element) => {
    element.classList.remove("selected");
  });
  sectionButtons[index].classList.add("selected");
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
    case "j":
      if (currentPage + 1 === sectionButtons.length) {
        currentPage = 0;
      } else {
        currentPage++;
      }
      highlightButton(currentPage);
      event.preventDefault();
      changeTitle(currentPage);
      updateHash(currentPage);
      break;
    case "ArrowUp":
    case "k":
      if (currentPage === 0) {
        currentPage = sectionButtons.length - 1;
      } else {
        currentPage--;
      }
      highlightButton(currentPage);
      event.preventDefault();
      changeTitle(currentPage);
      updateHash(currentPage);
      break;
  }
});

function changeTitle(index) {
  const title = document.getElementById("current-page");
  title.innerText = sectionButtons[index].innerText;

  pages.forEach((element) => {
    if (element.classList.contains("visible")) {
      element.classList.remove("visible");
    }
  });

  pages[index].classList.add("visible");
}
