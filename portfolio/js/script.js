const sectionButtons = document.querySelectorAll(".section-button");
sectionButtons[0].classList.add("selected");
let currentPage = 0;

sectionButtons.forEach((element, index) => {
  sectionButtons[index].addEventListener("click", () => {
    currentPage = index;
    highlightButton(index);
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
      break;
  }
});
