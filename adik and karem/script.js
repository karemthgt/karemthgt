 // Уведомление
 function showNotification() {
    alert("Привет! Надеемся, вам понравится игра от karemthgt и adikk_production:)");
}

// Игра "Угадай число"
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const feedback = document.getElementById('feedback');

    if (!userGuess) {
        feedback.textContent = "Пожалуйста, введите число.";
        feedback.style.color = "red";
        return;
    }

    if (userGuess == randomNumber) {
        feedback.textContent = "Поздравляем! Вы угадали число!";
        feedback.style.color = "green";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Загаданное число больше.";
        feedback.style.color = "#0984e3";
    } else {
        feedback.textContent = "Загаданное число меньше.";
        feedback.style.color = "#d63031";
    }
}