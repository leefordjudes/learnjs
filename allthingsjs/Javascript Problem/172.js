const obj1 = {name:'james',age:35,eyes:'blue'};
const obj2 = {name:'james',age:35,eyes:'blue'};
const obj3 = {name:'james',age:35,eyes:'blue',scores:[90, 80]};
const obj4 = {name:'james',age:35,eyes:'blue',scores:[90, 80]};

//shallow compare
const hasSameDataObj = function(obj1,obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if(obj1Keys.length === obj2Keys.length){
    return obj1Keys.every(key => obj2.hasOwnProperty(key) && obj1[key]===obj2[key]);
  };
  return false;
};

const deepCompare = function(obj1,obj2){
  if(JSON.stringify(obj1) === JSON.stringify(obj2))
  return true;
  return false;
}

console.log(hasSameDataObj(obj1,obj2)); //returns true; - it has only primary type
console.log(hasSameDataObj(obj3,obj4)); //returns false; - it has reference type
console.log(deepCompare(obj2,obj3)); //returns false;
console.log(deepCompare(obj3,obj4)); //returns true;
