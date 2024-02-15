// Отримання об'єктів заголовку та кнопки
const zagol = document.querySelector('h1');
const btn = document.querySelector('button');

// Функція, при натисканні кнопки значення заголовку ділиться на 3
btn.addEventListener('click', function() {
    zagol.textContent = parseInt(zagol.textContent) / 3;
});