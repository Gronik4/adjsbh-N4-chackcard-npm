export function methodLuna(number) {
  const num = number.slice();
  const checkDigit = num.pop();
  const chackSet = num.reverse();
  const setChack = [];
  for (let i = 0; i < chackSet.length; i += 1) {
    if (i % 2 === 0) {
      if (chackSet[i] * 2 < 9) {
        setChack.push(chackSet[i] * 2);
      } else {
        setChack.push(chackSet[i] * 2 - 9);
      }
    } else { setChack.push(chackSet[i]); }
  }
  const chackSum = setChack.reduce((sum, current) => sum * 1 + current * 1, 0);
  const expectDigit = chackSum % 10 === 0 ? chackSum % 10 : 10 - (chackSum % 10);
  if (checkDigit[0] * 1 === expectDigit) { return true; }
  return false;
}

export function validating(numb) {
  if (numb[0] * 1 === 4) { return 'Visa'; }
  if (numb[0] * 1 === 2) { return 'Mir'; }
  if (numb[0] * 1 === 5) { return 'MasterCard'; }
  if (numb[0] * 1 === 6) { return 'Maestro'; }
  return false;
}
