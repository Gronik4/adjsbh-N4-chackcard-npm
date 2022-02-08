import { methodLuna, validating } from './js/hendler';

const btns = document.getElementById('btns');
const btnr = document.getElementById('btnr');

btns.addEventListener('click', hendlerSub);
btnr.addEventListener('click', hendlerRes);

function hendlerSub(e) {
  e.preventDefault();
  const input = document.getElementById('formInput');
  const outputValid = document.getElementById('p');
  const outpRes = document.getElementById('res');
  const regexpLetter = /[\p{Alpha}\p{M}\p{Pc}\p{Join_C}]/igu;
  const regexpDigit = /\d/ig;
  const arrLt = input.value.match(regexpLetter);
  const arrNC = input.value.match(regexpDigit);

  if (input.value === '') {
    outpRes.innerHTML = 'Заполните поле';
    return;
  }
  if (arrLt) {
    outputValid.innerHTML = 'Не валидно';
    outpRes.innerHTML = 'В поле должны быть только цифры';
    return;
  }
  if (!((arrNC.length > 11) && (arrNC.length < 20))) {
    outputValid.innerHTML = 'Не валидно.';
    outpRes.innerHTML = 'Нет карт с номером такой длины.';
  }
  if (!(methodLuna(arrNC))) {
    outputValid.innerHTML = 'Не валидно.';
    outpRes.innerHTML = 'Нет карт с таким номером.';
  } else {
    outputValid.innerHTML = 'Валидно.';
    const classC = validating(arrNC);
    if (classC) {
      document.querySelector(`.${classC}`).style.opacity = 1;
      outpRes.innerHTML = `Ваша карта - ${classC}.`;
    } else {
      outpRes.innerHTML = 'Платежная система Вашей карты не определяется этой фомой';
    }
  }
}

function hendlerRes() {
  const outputValid = document.getElementById('p');
  const outpRes = document.getElementById('res');
  outputValid.innerHTML = '';
  outpRes.innerHTML = '';
  document.querySelectorAll('.img_item').forEach((item) => { item.style.opacity = 0.2; });
}
