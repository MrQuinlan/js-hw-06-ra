// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login - form повинна відбуватися
// відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля,
// виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.

const formEl = document.querySelector(".login-form");

function onFormSubmit(e) {
    const userData = {};

    if (!e.target.email.value || !e.target.password.value) {
        e.preventDefault();
        return alert(
            !e.target.email.value ? "email required!" : "password required!"
        );
    }

    userData[e.target.email.name] = e.target.email.value;
    userData[e.target.password.name] = e.target.password.value;

    console.log(userData);
    e.preventDefault();
    formEl.reset();
}

formEl.addEventListener("submit", onFormSubmit);
