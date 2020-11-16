'use strict';

// demonstration of typeof for object
console.log('typeof {} is an ', typeof {}); // object
console.log('typeof [] is an ', typeof []); // object
console.log('typeof Array() is a ', typeof Array()); // object
console.log('typeof function test() {}; is a ', function test() {}); // f test() {}
console.log('typeof null is an ', typeof null); // object
console.log('typeof new Date() is an ', typeof new Date()); // object
console.log('typeof new RegExp() is an ', typeof new RegExp()); // object
console.log('typeof \'abcd\' is a ', typeof 'abcd'); // string
console.log('typeof 10 is a ', typeof 10); // number
console.log('typeof Symbol(\'desc\') is a ', typeof Symbol('desc')); // symbol
console.log('typeof true is a ', typeof true); // boolean
console.log('typeof undefined is a ', typeof undefined); // undefined
console.log('typeof NaN is a ', typeof NaN); // number

// -------------------------------------------------------------------------
function test() {console.log('done');}

const map = new Map();

const date = new Date();

const isObject = obj => obj === Object(obj);

const isObjectLike = val => val !== null && typeof val === 'object';

const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

//------------------------------------------------
console.log('!null', !null, '!!null', !!null); // true false
console.log('null', isObject(null), isObjectLike(null), isPlainObject(null)); // false false false
console.log('[]', isObject([]), isObjectLike([]), isPlainObject([])); // true true false
console.log('function', isObject(test), isObjectLike(test), isPlainObject(test)); // true false false
console.log('map', isObject(map), isObjectLike(map), isPlainObject(map)); // true true false
console.log('date', isObject(date), isObjectLike(date), isPlainObject(date)); // true true false
console.log('{}', isObject({}), isObjectLike({}), isPlainObject({})); // true true true




