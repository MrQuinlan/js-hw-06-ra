// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

// Для генерування випадкового кольору
// використовуй функцію getRandomHexColor.

const refs = {
    changeColorBtn: document.querySelector(".change-color"),
    colorHex: document.querySelector(".color"),
};

function onBcgColorChange(e) {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.colorHex.textContent = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

refs.changeColorBtn.addEventListener("click", onBcgColorChange);
