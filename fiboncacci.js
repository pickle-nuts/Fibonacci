/*Create the calculation for fibonacci into a loop that drops off A and replace it w B 
while B is replaced w the current index value in order to create a new sum*/
var fib = function(num){
  var a = 0, b = 1, f = 1;
  for (var i = 2; i < num; i++){
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

//Create a loop to create an array of Fibonacci numbers in between 1-100//
for(var x = 1; x <= 12; x++){
  console.log(fib(x));
}