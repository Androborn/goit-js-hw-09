// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

// Библиотека уведомлений
// ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.

// v1-(parseInt & const promise & const values)-----------
// import Notiflix from 'notiflix';

// const form = document.querySelector('.form');

// form.addEventListener('submit', startGenerator);

// function startGenerator(e) {
//   e.preventDefault();

//   let { delay, amount, step } = form;
//   delay = parseInt(delay.value, 10);

//   for (let position = 1; position <= amount.value; position += 1) {
//     createPromise(position, delay);
//     delay += parseInt(step.value, 10);
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   const values = { position, delay };

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(values);
//       } else {
//         reject(values);
//       }
//     }, delay);
//   });

//   promise
//     .then(values => {
//       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(values => {
//       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
// }

// v2-(shorter & more readable?)--------------------------
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', startGenerator);

function startGenerator(e) {
  e.preventDefault();

  let { delay, amount, step } = form;
  delay = +delay.value;

  for (let position = 1; position <= amount.value; position += 1) {
    createPromise(position, delay);
    delay += +step.value;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  })
    .then(() => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
