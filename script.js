const footerLinks = document.querySelectorAll(".footer-link");

footerLinks.forEach((element, index) => {
  footerLinks[index].addEventListener("click", () => {
    highlightButton(index);
  });
});

function highlightButton(index) {
  footerLinks.forEach((element) => {
    element.classList.remove("selected");
  });
  footerLinks[index].classList.add("selected");
  changeCommand(index);
}

function changeCommand(number) {
  let message = "./";
  switch (number) {
    case 0:
      message += "about-me";
      break;
    case 1:
      message += "skills";
      break;
    case 2:
      message += "contact";
      break;
    default:
      message += "not-found";
      break;
  }
  const command = document.getElementById("command");
  command.innerHTML = message;
}
