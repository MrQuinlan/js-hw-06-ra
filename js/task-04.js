// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue,
// в якій буде зберігатися поточне значення лічильника та
// ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
    btn: document.querySelector("#counter"),
    dialValue: document.querySelector("#value"),
};

let counterValue = 0;

function makeCounter(e) {
    if (e.target.textContent === "-1" && counterValue > 0) {
        counterValue -= 1;
    }

    if (e.target.textContent === "+1") {
        counterValue += 1;
    }
    refs.dialValue.textContent = `${counterValue}`;
}

refs.btn.addEventListener("click", makeCounter);
