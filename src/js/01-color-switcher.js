// В HTML есть кнопки «Start» и «Stop».

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
const { startBtn, stopBtn, body } = refs;

let colorChanger = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  colorChanger = setInterval(setBodyColor, 1000);
}

function stopColorChange() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(colorChanger);
}

function setBodyColor() {
  return (body.style.backgroundColor = getRandomHexColor());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
