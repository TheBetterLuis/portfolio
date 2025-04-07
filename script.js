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
}
