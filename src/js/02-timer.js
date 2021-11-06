// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.

// Элементы интефрейса
// В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.

// Библиотека flatpickr
// Используй библиотеку flatpickr для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса. Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Библиотека ожидает что её инициализируют на элементе input[type="text"], поэтому мы добавили в HTML документ поле input#datetime-picker.

// Вторым аргументом функции flatpickr(selector, options) можно передать необязательный объект параметров. Мы подготовили для тебя объект который нужен для выполнения задания. Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.

// Выбор даты
// Метод onClose() из обьекта параметров вызывается каждый раз при закрытии элемента интерфейса который создает flatpickr. Именно в нём стоит обрабатывать дату выбранную пользователем. Параметр selectedDates это массив выбранных дат, поэтому мы берем первый элемент.

// Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
// Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
// Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.

// Отсчет времени
// При нажатии на кнопку «Start» скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.

// Количество дней может состоять из более чем двух цифр.
// Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// 💡 Не будем усложнять. Если таймер запущен, для того чтобы выбрать новую дату и перезапустить его - необходимо перезагрузить страницу.

// Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.

// Форматирование времени
// Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты. Обрати внимание, что она не форматирует результат. То есть, если осталось 4 минуты или любой другой составляющей времени, то функция вернет 4, а не 04. В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов. Напиши функцию addLeadingZero(value), которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.

// Библиотека уведомлений
// ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysCount: document.querySelector('.value[data-days]'),
  hoursCount: document.querySelector('.value[data-hours]'),
  minutesCount: document.querySelector('.value[data-minutes]'),
  secondsCount: document.querySelector('.value[data-seconds]'),

  datePicker: document.querySelector('#datetime-picker'),
};

let selectedDate = {};
let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      preventDateBeforeNow();
    } else {
      refs.startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', startCountdown);

flatpickr('#datetime-picker', options);

function preventDateBeforeNow() {
  Notiflix.Notify.failure('Please choose a date in the future');
}

function startCountdown() {
  refs.startBtn.disabled = true;
  refs.datePicker.disabled = true;

  setCounterUi();

  timer = setInterval(setCounterUi, 1000);
}

function setCounterUi() {
  finishCoountdown();

  refs.daysCount.textContent = convertMs(selectedDate - Date.now()).days;
  refs.hoursCount.textContent = convertMs(selectedDate - Date.now()).hours;
  refs.minutesCount.textContent = convertMs(selectedDate - Date.now()).minutes;
  refs.secondsCount.textContent = convertMs(selectedDate - Date.now()).seconds;
}

function finishCoountdown() {
  if (convertMs(selectedDate - Date.now()).seconds === '00') {
    clearInterval(timer);
  }
}

// --------------
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second),
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
