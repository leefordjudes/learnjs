// let bool1 = false; // true, false, some values are truthy values.
let bool1 = undefined; // empty string, 0, null, undefined, NaN
if (bool1) {
  console.log('There is some truthy value, no need to check bool1 === true');
} else {
  console.log('There is some falsely value, no need to check bool1 === false')
}

let responseText = '';
console.log('Result: '+responseText && `This is the response: ${responseText}`);

let score = 0;
let finalMessage;

if (score > 60) {
  finalMessage = 'Congratulations! You passed.';
} else {
  finalMessage = 'Please retake the course.';
}

console.log(finalMessage);
score = 65;
let finalMessage1 = (score > 60) ? 'Congratulations! You passed.' : 'Please retake the course.';
console.log(finalMessage1);
