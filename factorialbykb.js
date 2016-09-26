
const factorial = function(x) 
if (x===0 || x===1 ) 
return 1;
return x*(factorial(x-1));
}
console.log(factorial(5));
   