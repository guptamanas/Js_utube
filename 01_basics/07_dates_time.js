//date will be print from 1 jan 1970 and date is object type

let date = new Date()
console.log(date)
console.log(date.toDateString());
console.log(date.toString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(typeof(date))  //it is object type

//to create our own date
let mydate=new Date(2023,0,12)   //month  start from 0  jan 12 2023
console.log(mydate.toDateString())

console.log(date.now())  //gives date in ms from 1 jan 1970 upto now