lucide.createIcons();

let select = document.querySelector('.select');
let selectdValue = document.getElementById('selected-value');
let optionsViewButton = document.getElementById('options-view-button');
let inputsOptions = document.querySelectorAll('.option input');

inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectdValue.textContent = input.dataset.label
  })
})

// let menu = document.querySelector('#options');
// function openmenu() {
//     var element = document.querySelector("#options");
//     element.classList.toggle("options-2");}




// const isMouseOrTouch =
// event.pointerType == "mouse" || event.pointerType == "touch";

// isMouseOrTouch && optionsViewButton.click();