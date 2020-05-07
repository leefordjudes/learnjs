const number = document.getElementById('number');
const multiplier = document.getElementById('multiplier');
const result = document.getElementById('result');

const doMultiplication = function() {
  let num = parseFloat(number.value), mult = parseInt(multiplier.value);
  result.value = num * mult;
};

number.addEventListener('input', doMultiplication);
multiplier.addEventListener('change',doMultiplication);
