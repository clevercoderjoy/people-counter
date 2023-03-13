const displayCounter = document.getElementById("count-el");
const btnIncrement = document.getElementById("increment-btn");
const saveCounter = document.getElementById("save-el");
const btnSave = document.getElementById("save-btn");
const resetCounter = document.getElementById("reset-counter");

let counter = 0;

const incrementCounter = () => {
    counter += 1;
    displayCounter.textContent = `${counter}`;
}
btnIncrement.addEventListener("click", incrementCounter);

const saveCurrentCounter = () => {

    if (counter !== 0) {
        saveCounter.textContent += ` - ${counter }`;
    } else {
        alert("counter is zero(0) Click the INCREMENT Button then save")
    }

}
const ResetCounterAsZero = () => {
    counter = 0;
    displayCounter.textContent = `${counter}`;
}

resetCounter.addEventListener("click", ResetCounterAsZero)
btnSave.addEventListener("click", saveCurrentCounter);