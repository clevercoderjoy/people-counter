const displayCounter = document.getElementById("count-el");
const btnIncrement = document.getElementById("increment-btn");
const saveCounter = document.getElementById("save-el");
const btnSave = document.getElementById("save-btn");
let counter = 0;

const incrementCounter = () => {
    counter += 1;
    displayCounter.textContent = `${counter}`;
}
btnIncrement.addEventListener("click", incrementCounter);

const saveCurrentCounter = () => {
    saveCounter.textContent += ` - ${counter}`;
    counter = 0;
    displayCounter.textContent = `${counter}`;
}
btnSave.addEventListener("click", saveCurrentCounter);