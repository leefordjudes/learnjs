var i = 5;
var j = i++;
console.log('i: '+i+', j: '+j);
var k = ++i;
console.log('i: '+i+', j: '+j+', k: '+k);

var a = 5;
var b = a++ * 5;
console.log('a: '+a+', b: '+b);
var c = ++a * 5;
console.log('a: '+a+', c: '+c);

var w = 7;
var x = w++;  //x=7;then w=7+1
console.log('w: '+w+', x: '+x);
var y = (x++ % w); // y=7%8;so y=7,w=8;then x=7+1=>8
console.log('w: '+w+', x: '+x+', y: '+y);
var z = (++x % w); // x=8+1; then z=9%8=>1
console.log('w: '+w+', x: '+x+', y: '+y+', z: '+z);


