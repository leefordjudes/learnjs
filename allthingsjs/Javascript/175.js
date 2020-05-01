let arr = [5,10,15,20,25];

// Way 1 : while loop
console.log('Way 1 : while loop');
let i =0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Way 2 : do while loop
console.log('Way 2 : do while loop');
i = 0;  // if we initialize i=6, then do while loop runs atleast one time
do {
  console.log(arr[i]);
  i++;
}while (i < arr.length);


// Way 3: for loop
console.log('Way 3: for loop');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Way 4: for in loop
console.log('Way 4: for in loop');
for (let i in arr) {
  console.log(arr[i]);
}

// Way 5: for of loop
console.log('Way 5: for of loop')
for (let i of arr) {
  console.log(i);    // note this.
}

// Way 6: forEach method - asynchronous
console.log('Way 6: forEach method - asynchronous');
arr.forEach((i) => {console.log(i)});


// Way 7: Using Symbol Iterator
console.log('Way 7: Using Symbol Iterator');
let it = arr[Symbol.iterator]();
let nextVal = it.next();
while(!nextVal.done) {
  console.log(nextVal.value);
  nextVal = it.next();
}
/*
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/
