const x= new Number(100);
console.log(x.toFixed(2)) //gives upto 2 decimal

const y=234.856   //235
console.log(y.toPrecision(3));

console.log(Math.abs(-4))
console.log(Math.round(5.8))
console.log(Math.ceil(2.5))
console.log(Math.floor(2.5))

console.log(Math.random())   //random by default gives the value from [0,1]
console.log((Math.random()*10)+1) //gives values btm [1,11]

//const min=10;
//const max=20;
//console.log(Math.floor(Math.random() * (max-min+1)) + min)   range of values btm 10 to 20
