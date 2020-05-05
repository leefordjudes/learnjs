// Method 1
const symbl0 = Symbol();
console.log(symbl0);
const symbl1 = Symbol("symbol description");
console.log(symbl1);
console.log(symbl1.toString());
console.log(typeof symbl1);

let obj = {
  name: 'Steve',
  [symbl1]: new Date()
};

console.log(obj);

for (let i in obj) {    // not loop symbol
  console.log(i);       //name
  console.log(obj[i]);  //Steve
}
console.log(obj[symbl1]); // Tue May 05 2020 10:01:18 GMT+0530 (India Standard Time)
console.log(Object.keys(obj)) // shows only name, [symbl1] not shown

const symbl2 = Symbol.for("Object Data");
const symbl3 = Symbol.for("Object Data");

let obj2 = {
  name: 'Steve',
  [symbl2]: new Date()
};
console.log(Symbol.keyFor(symbl2)) // Object Data
console.log(symbl2 === symbl3) // returns true
// console.log(obj2[symbl3]); // Tue May 05 2020 10:07:48 GMT+0530 (India Standard Time)

let obj3 = {
  name: 'Lynette',
  [Symbol.for("Object Data")]: new Date(),
}
console.log(obj3[symbl2]); //Tue May 05 2020 10:11:21 GMT+0530 (India Standard Time)
console.log(obj3[symbl3]); //Tue May 05 2020 10:12:04 GMT+0530 (India Standard Time)
