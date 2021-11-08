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

// v1-(let remainTime global & func onClose in options)-------------------
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const refs = {
//   startBtn: document.querySelector('button[data-start]'),
//   datePicker: document.querySelector('#datetime-picker'),
//   daysCount: document.querySelector('.value[data-days]'),
//   hoursCount: document.querySelector('.value[data-hours]'),
//   minutesCount: document.querySelector('.value[data-minutes]'),
//   secondsCount: document.querySelector('.value[data-seconds]'),
// };
// const {
//   startBtn,
//   datePicker,
//   daysCount,
//   hoursCount,
//   minutesCount,
//   secondsCount,
// } = refs;

// let selectedDate = null;
// let remainTime = null;
// let countdown = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: Date.now(),
//   minuteIncrement: 1,
//   onClose,
// };

// flatpickr('#datetime-picker', options);

// startBtn.disabled = true;
// startBtn.addEventListener('click', startCountdown);

// function onClose(selectedDates) {
//   if (selectedDates[0] < Date.now()) {
//     preventDateBeforeNow();
//   } else {
//     startBtn.disabled = false;
//     selectedDate = selectedDates[0];
//   }
// }

// function preventDateBeforeNow() {
//   Notiflix.Notify.failure('Please choose a date in the future');
// }

// function startCountdown() {
//   startBtn.disabled = true;
//   datePicker.disabled = true;

//   countdown = setInterval(updateCounter, 1000);

//   updateCounter();
// }

// function updateCounter() {
//   remainTime = selectedDate - Date.now();

//   updateCounterUi();
//   finishCoountdown();
// }

// function updateCounterUi() {
//   daysCount.textContent = convertMs(remainTime).days;
//   hoursCount.textContent = convertMs(remainTime).hours;
//   minutesCount.textContent = convertMs(remainTime).minutes;
//   secondsCount.textContent = convertMs(remainTime).seconds;
// }

// function finishCoountdown() {
//   if (remainTime < 1000) {
//     clearInterval(countdown);
//   }
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second),
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// v2-(more autonomous?)--------------------------------------
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  datePicker: document.querySelector('#datetime-picker'),
  daysCount: document.querySelector('.value[data-days]'),
  hoursCount: document.querySelector('.value[data-hours]'),
  minutesCount: document.querySelector('.value[data-minutes]'),
  secondsCount: document.querySelector('.value[data-seconds]'),
};
const {
  startBtn,
  datePicker,
  daysCount,
  hoursCount,
  minutesCount,
  secondsCount,
} = refs;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose,
};

let selectedDate = null;
let countdown = null;

flatpickr('#datetime-picker', options);

startBtn.disabled = true;
startBtn.addEventListener('click', startCountdown);

function onClose(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    preventDateBeforeNow();
  } else {
    startBtn.disabled = false;
    selectedDate = selectedDates[0];
  }
}

function preventDateBeforeNow() {
  Notiflix.Notify.failure('Please choose a date in the future');
}

function startCountdown() {
  startBtn.disabled = true;
  datePicker.disabled = true;

  countdown = setInterval(updateCounter, 1000);

  updateCounter();
}

function updateCounter() {
  let remainTime = selectedDate - Date.now();

  updateCounterUi(remainTime);
  finishCoountdown(remainTime);
}

function updateCounterUi(remainTime) {
  daysCount.textContent = convertMs(remainTime).days;
  hoursCount.textContent = convertMs(remainTime).hours;
  minutesCount.textContent = convertMs(remainTime).minutes;
  secondsCount.textContent = convertMs(remainTime).seconds;
}

function finishCoountdown(remainTime) {
  if (remainTime < 1000) {
    clearInterval(countdown);
  }
}

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
