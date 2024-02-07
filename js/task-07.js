// Напиши скрипт,
// який реагує на зміну значення
// input#font - size - control(подія input) і
// змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

// button.style.fontSize = "24px";

const refs = {
    inputValue: document.querySelector("#font-size-control"),
    textContent: document.querySelector("#text"),
};

refs.textContent.style.fontSize = `${refs.inputValue.value}px`;

function setFontSize(e) {
    refs.textContent.style.fontSize = `${e.target.value}px`;
}

refs.inputValue.addEventListener("input", setFontSize);
