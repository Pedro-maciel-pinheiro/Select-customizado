lucide.createIcons();

let select = document.querySelector(".select"),
  selectdValue = document.getElementById("selected-value"),
  optionsViewButton = document.getElementById("options-view-button"),
  inputsOptions = document.querySelectorAll(".option input");

inputsOptions.forEach((input) => {
  input.addEventListener("click", (event) => {
    selectdValue.textContent = input.dataset.label;

    const isMouseOrTouch =
      event.pointerType == "mouse" || event.pointerType == "touch";

    isMouseOrTouch && optionsViewButton.click();
  });
});

// let menu = document.querySelector('#options');
// function openmenu() {
//     var element = document.querySelector("#options");
//     element.classList.toggle("options-2");}
