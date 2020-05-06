let scores = {
  quiz1: 90,
  quiz2: 10,
  quiz3: 0,
  quiz4: 50,
  quiz5: 80,
  quiz6: 20
};

let arr = Object.entries(scores);
console.log(arr);

let student = {
  student: {
    firstName: 'Steven',
    lastName: 'Hancock'
  },
  attempts: ['1/15/2020','2/28/2020','3/2/2020'],
  quiz1: 90,
  quiz2: 10,
  quiz3: 0,
  quiz4: 50,
  quiz5: 80,
  quiz6: 20
}
let arr2 = Object.entries(student);
console.log(arr2);
console.log(Object.fromEntries(arr2));

let arr3 = [1,2,3,4,5];
//console.log(Object.fromEntries(arr3)); // throws error as 178.js:31 Uncaught TypeError: Iterator value 1 is not an entry object

let arr4 = [[1,2],[3,4],[5,6]];
console.log(Object.fromEntries(arr4));