// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
};

function getName(e) {
    refs.nameOutput.textContent = e.target.value
        ? `${e.target.value}`
        : "Anonymous";
}

refs.nameInput.addEventListener("input", getName);
