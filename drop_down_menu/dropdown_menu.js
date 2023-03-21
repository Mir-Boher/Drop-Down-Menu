const optionMenu = document.querySelector(".select-menu");
const searchPart = optionMenu.querySelector(".search-part");
const options = optionMenu.querySelectorAll(".option");
const searchText = optionMenu.querySelector(".search-text");

searchPart.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((e) => {
  e.addEventListener("click", () => {
    let selectedOption = e.querySelector(".option-text").innerText;
    console.log(selectedOption);
    searchText.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});
