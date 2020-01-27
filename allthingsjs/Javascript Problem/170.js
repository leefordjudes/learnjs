// 170.JavaScript Problem: Replace All Occurrences of a String
const str = 'The array in Javascript is quite flexible. You can find arrays all over. Array is an important data structure in Javascript';


//It replaces only the first occurrence
let newStr = str.replace('array','object');

//Method 1
//Using regular expression with global flag: g 
//and a case insensitive flag: i
let regStr = str.replace(/array/gi,'object');

//Method 2
//step 1
let spltStr1 = str.split('array');
//step 2
let spltStr2 = str.split('array').join('object');
//step 3
let spltStr3 = str.split(/array/i).join('object');


