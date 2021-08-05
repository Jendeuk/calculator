// Hente DOM
const btnAdd = document.querySelector("#add");
const btnMinus = document.querySelector("#minus");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const n1 = document.getElementById("txtNr1");
const n2 = document.getElementById("txtNr2");
const output = document.getElementById("print");

// Arrow function
const add = (nr1, nr2) => nr1 + nr2;
const minus = (nr1, nr2) => nr1 - nr2;
const multiply = (nr1, nr2) => nr1 * nr2;
const divide = (nr1, nr2) => nr1 / nr2;
// Hjelpefunksjon for å printe utskritft
const writeResult = (result) => (output.innerHTML = result);

// Legger til eventlisteners
btnAdd.addEventListener("click", () => {
    const result = add(parseInt(n1.value), parseInt(n2.value));
    writeResult(result);
});
btnMinus.addEventListener("click", () => {
    const result = minus(parseInt(n1.value), parseInt(n2.value));
    writeResult(result);
});
btnMultiply.addEventListener("click", () => {
    const result = multiply(parseInt(n1.value), parseInt(n2.value));
    writeResult(result);
});
btnDivide.addEventListener("click", () => {
    const result = divide(parseInt(n1.value), parseInt(n2.value));
    writeResult(result);
});
