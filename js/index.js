'use strict'

const INPUTS = document.querySelectorAll('.registration__input_required input')
const LABELS = document.querySelectorAll('.registration__input_required label')

function checkValid(input) {
  if (
    input.type === 'tel' &&
    /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(input.value)
  ) {
    return true
  }
  if (input.id === 'name' && /^[а-яёА-ЯЁ]{2,15}$/.test(input.value)) {
    return true
  }
  return false
}

INPUTS.forEach((input, i) => {
  input.addEventListener('input', function () {
    LABELS[i].style.display = this.value == '' ? 'inline' : 'none'
    !checkValid(this)
      ? input.classList.add('invalid')
      : input.classList.remove('invalid')
  })
})

const SELECTS = document.querySelectorAll('.registration__select div')
const SELECTS_BODY = document.querySelectorAll('.select-body')

SELECTS.forEach((select, i) => {
  select.addEventListener('click', function () {
    SELECTS_BODY[i].classList.toggle('show')
  })
  SELECTS_BODY[i].addEventListener('click', function (e) {
    SELECTS[i].textContent = e.target.textContent
    this.classList.remove('show')
  })
})
