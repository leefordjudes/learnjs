// Method 1
const sum1 = function() {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
};

console.log(sum1(1,2,3,4,5,6,7,8,9,0,11,12,13,14,15));

// Method 2
const sum2 = (...args) => {
  return args.reduce((val, sum)=> val + sum, 0);
}

console.log(sum2(1,2,3,4,5,6,7,8,9,0,11,12,13,14,15));