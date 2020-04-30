"use strict";

var objProto = {
  greet(){ console.log(greeting); }
}

const greeting1 = function(greeting){
  let obj = Object.create(objProto);
  obj.greeting = greeting;
  console.log(obj);
  return obj;
};

var greet1 = greeting1('hello world');

var btn = document.querySelector('#btn').addEventListener('click',greet1.greet);


