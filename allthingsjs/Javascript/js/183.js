'use strict';

let arr1 = [30, 50, 80, 95, 100, 60, 70];
let arr2 = [30, 50, 80, 95, 100, 60, 70];
let arr3 = [30, 50, 80, 95, 100, 60, 70];
let arr4 = [30, 50, 80, 95, 100, 60, 70];
let arr5 = [30, 50, 80, 95, 100, 60, 70];

while(arr1.length > 0) {
  arr1.pop();
}

while(arr2.length > 0) {
  arr2.shift();
}

arr3.splice(0, arr3.length);

arr4 = []; // fast and having some issues on some suitition
arr5.length = 0; // safe and fast and best

console.log('arr1,arr2,arr3,arr4,arr5');
console.log(arr1,arr2,arr3,arr4,arr5);

let arr6 = [30, 50, 80, 95, 100, 60, 70];
let copyArr6 = arr6; // copy reference

copyArr6.push(85);

console.log('arr6,copyArr6');
console.log(arr6,copyArr6); // both has pushed 85 as last element

arr6 = []; // only remove the reference of arr6, and not copyArr6
console.log('arr6,copyArr6');
console.log(arr6,copyArr6); // arr6 empty, and copyArr6 has elements


let arr7 = [30, 50, 80, 95, 100, 60, 70];
let copyArr7 = arr7; // copy reference

copyArr7.push(85);

console.log('arr7,copyArr7');
console.log(arr7,copyArr7); // both has pushed 85 as last element

arr7.length = 0;

console.log('arr7,copyArr7');
console.log(arr7,copyArr7); // both are empty





