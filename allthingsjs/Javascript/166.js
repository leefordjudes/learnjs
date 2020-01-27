"use strict";

var objProto = {
  greet(){ console.log(this.greeting); }
}

const greeting3 = function(greeting){
  let obj = Object.create(objProto);
  obj.greeting = greeting;
  return obj;
};

var greet3 = greeting3('hello world');

var btn = document.querySelector('#btn').addEventListener('click',greet3.greet);


