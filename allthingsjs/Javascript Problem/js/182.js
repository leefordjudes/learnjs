'use strict';

let phrase = 'First number is 32, and second number is 100 and then 15.25 and then 20 as the Last number.';

let reg = /\d+\.*\d*/g;

let result = phrase.match(reg);

for (let val of result) {
  console.log(Number(val));
}