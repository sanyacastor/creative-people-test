const timeInput = document.querySelector(".slider__input--time");
const amountInput = document.querySelector(".slider__input--amount");
const timeField = document.querySelector(".slider__value--time");
const amountField = document.querySelector(".slider__value--amount");

const creditPersent = document.querySelector("#creditPersent");
const monthlyAmount = document.querySelector("#mouthlyPayment");

timeInput.style.background = `linear-gradient(90deg, rgb(254, 230, 0) 48%, rgb(225, 225, 227) 48%)`;
amountInput.style.background = `linear-gradient(90deg, rgb(254, 230, 0) 21%, rgb(225, 225, 227) 21%)`;

function normalizeValue(val, max, min) {
  return ((val - min) / (max - min)) * 100;
}

function calculateAmount() {
  monthlyAmount.innerText =
    Math.floor((amountInput.value / timeInput.value) * 1000) + "₽";
}

function calculatePercent() {
  creditPersent.innerText =
    (10 + (timeInput.value / amountInput.value) * 10).toFixed(2) + "%";
}

function timeInputChangeHandler(e) {
  const value = normalizeValue(e.target.value, e.target.max, e.target.min);
  timeField.innerText = `${e.target.value} мес.`;
  timeInput.style.background = `linear-gradient(90deg, rgb(254, 230, 0) ${value}%, rgb(225, 225, 227) ${value}%)`;

  calculatePercent();
  calculateAmount();
}

function amoutnInputChangeHandler(e) {
  const value = normalizeValue(e.target.value, e.target.max, e.target.min);
  amountField.innerText = `${e.target.value * 1000} ₽`;
  amountInput.style.background = `linear-gradient(90deg, rgb(254, 230, 0) ${value}%, rgb(225, 225, 227) ${value}%)`;

  calculatePercent();
  calculateAmount();
}

timeInput.addEventListener("input", timeInputChangeHandler);
amountInput.addEventListener("input", amoutnInputChangeHandler);

const calcTitle = document.querySelector(".calc__title");
const calcSubtitle = document.querySelector(".calc__subtitle");


function changeTitles(width) {
  if (width >= 1400) {
    calcTitle.innerText = "Возьмите дополнительный кредит";
    calcSubtitle.innerText = "Кредит на любые цели. Получите решение за 2 минуты"
  } else {
    calcTitle.innerText = "Дополнительный кредит на любые цели";
    calcSubtitle.innerText = "Получите решение за 2 минуты"
  }
  console.log('ss')
}

window.addEventListener("resize", (e) => changeTitles(e.target.innerWidth));

window.addEventListener('DOMContentLoaded', ()=>changeTitles(window.innerWidth))


