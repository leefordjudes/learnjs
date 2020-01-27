const arr = [5, 10, 15, 20, 25];
/*
for(var i=0; i<arr.length; i++){
    setTimeout(function(){
      console.log(`Index: ${i}, element: ${arr[i]}`);
    },2000);
}
*/
/*
for(var i=0; i<arr.length; i++){
  (function(){
    var j=i;
    setTimeout(function(){
      console.log(`Index: ${j}, element: ${arr[j]}`);
    },2000);
  })();
}

for(var i=0; i<arr.length; i++){
  var j=i;
  setTimeout(function(){
    console.log(`Index: ${j}, element: ${arr[j]}`);
  },2000);
}


for(var i=0; i<arr.length; i++){
  let j=i;
  setTimeout(function(){
    console.log(`Index: ${j}, element: ${arr[j]}`);
  },2000);
}
*/
for(let i=0; i<arr.length; i++){
  setTimeout(function(){
    console.log(`Index: ${i}, element: ${arr[i]}`);
  },2000);
}
