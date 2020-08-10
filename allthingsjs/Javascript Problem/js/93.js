'use strict';

let phrase = 'First number is 32, and second number is 100. Here is the Last number 15.';

let reg = /\d+/g;

let result = phrase.match(reg);

console.log(result);

for (let val of result) {
  console.log(parseInt(val));
}