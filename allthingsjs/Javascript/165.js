"use strict";

class Greeting1 {
  constructor(greet) {
    this.greeting = greet;
    this.greet = this.greet.bind(this);
  }
  
  greet(){
      console.log(this.greeting);
  }
  
};

const Greeting2 = function(greet){
  this.greeting = greet;
  this.greet = ()=>console.log(this.greeting);
};

const Greeting3 = function(greeting){
  return {
    greet(){
      console.log(greeting);
    } 
  }
};


var greet1 = new Greeting1('Greeting1');
var greet2 = new Greeting2('Greeting2');
var greet3 = Greeting3('Greeting3');

document.querySelector('#gbtn').addEventListener('click',greet1.greet);
document.querySelector('#ggbtn').addEventListener('click',greet2.greet);
document.querySelector('#gggbtn').addEventListener('click',greet3.greet);


//factory function
const factoryFun = function(newNum){
  let num = 100;
  return {
    sum(){ console.log('FactoryFun: '+num * newNum);}
  };;
}

var ffun = factoryFun(5);
//ffun.sum();
document.querySelector('#ffbtn').addEventListener('click',ffun.sum);