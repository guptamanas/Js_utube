"use strict"  //treat all js codes as newer version
console.log(3+1);
//alert(3+1);  //gives error because we are using node not browser in browser console it gives output as 4 but in node it does not work like that
console.log(typeof NULL);
let x="hello";
console.log(typeof("%"));

//typecasting
let y=31;
let z="31abc";
console.log(typeof(y));
console.log(typeof(z));
let a=Number(z)  //we are typecasting z string to Number
console.log(typeof(a));  
let b=String(y);  //typcasting number to string
console.log(typeof(b));
console.log(a);

let ss= "ss";
let conv=Boolean(ss);  //String,Number,Boolean
console.log(conv);

/*
Notes for conversion
 WHEN WE CONVERT ALL THIS TO NUMBER GIVES RESULT:
"33" -> 33 
"33abc" -> NAN
TRUE -> 1 AND FALSE->0
null-> 0 
undefined -> NAN

ON converting to String: 
true -> true
false -> false
23 -> 23
null -> null
undefined -> undefined

ON CONVERTING TO Boolean:
0 -> false
1 -> true
"" -> false;
"2" -> true
23 -> true

*/