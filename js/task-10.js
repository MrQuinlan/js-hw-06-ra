// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає
// один параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const refs = {
    inputValue: document.querySelector("input"),
    createBtn: document.querySelector("[data-create]"),
    destroyBtn: document.querySelector("[data-destroy]"),
    boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
    let boxesArr = [];
    let size = 20;

    for (let i = 0; i < amount; i += 1) {
        size += 10;
        boxesArr.push(
            `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
        );
    }

    refs.boxes.innerHTML = boxesArr.join("");
    refs.inputValue.value = "";
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

refs.createBtn.addEventListener("click", () =>
    createBoxes(refs.inputValue.value)
);

refs.destroyBtn.addEventListener("click", () => {
    refs.boxes.innerHTML = "";
    // refs.inputValue.value = "";
});
