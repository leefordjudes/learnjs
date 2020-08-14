'use strict';

let privateObj = {
  secretNum: 3141,
  passPhrase: 'monkey jump core life time east dawn bird ramp cause crate give'
};

console.log(privateObj);

privateObj.secretNum = 3333;

console.log(privateObj);

const getPrivateObj = function() {
  let privateObj = {
    secretNum: 3141,
    passPhrase: 'monkey jump core life time east dawn bird ramp cause crate give'
  };
  return function() {
    return privateObj;
  }
}();

console.log(getPrivateObj.privateObj); //undefined, cannot read property privateObj

let obj = getPrivateObj();
console.log('obj: ',obj);
console.log('obj.secretNum: ',obj.secretNum);
obj.secretNum = 3333;
console.log('obj.secretNum: ',obj.secretNum);

const getPrivateObj1 = function() {
  let privateObj1 = {
    secretNum: 3141,
    passPhrase: 'monkey jump core life time east dawn bird ramp cause crate give'
  };
  return function() {
    return {...privateObj1};  // always it returns privateObj1 as new object with spread operator, and not returns the privateObj1's reference.
  }
}();

let obj1 = getPrivateObj1();
console.log('obj1: ',obj1);
console.log('obj1.secretNum: ',obj1.secretNum);
obj1.secretNum = 3333;
console.log('obj1.secretNum: ',obj1.secretNum);
let obj2 = getPrivateObj1();
console.log('obj2: ',obj2);
console.log('obj2.secretNum: ',obj2.secretNum);

