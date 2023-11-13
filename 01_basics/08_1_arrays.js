let arr=[1,2,3,4,5]
console.log(arr)
let arr1=new Array(2,3,4,5,6)
console.log(arr1)


console.log(arr.push(8))  //add elemt to last
console.log(arr.pop())  //removes last element
console.log(arr[2]);
arr.unshift(9)
console.log(arr);  //unshif parameter wali vaue ko sbse phle add kr deta h
arr.shift();   //shif remove kr deta h 0 index wali val ko
console.log(arr)
 
console.log(arr1.includes(3))  //return array me exist krta h ya ni
console.log(arr1.indexOf(3))

const newarra=arr.join();
console.log(newarra);  //join convert the array value to string
console.log(typeof(newarra))

//************SLICE AND SPLICE*********** */
//splice operation original array ko change kr deta h but slice does not refelect chnages in original array

//slice
let or=[1,2,3,4,5]
let ar1=or.slice(1,3);  
console.log(or);   //[1,2,3,4,5]  does not chnage the original index
console.log(ar1);   //[2,3]  it will print from index 1 to 2
//slice(m,n)  it will print from index m to n-1 


//splice
let or1=[0,1,2,3,4,5,6]
let ar2=or1.splice(1,3);
console.log(or1)  //[ 0, 4, 5, 6 ]  reflect the chnage in original array it removes value from index m to n splice(m,n)
console.log(ar2)  //[1,2,3]  splice(m,n)  ony print value from index m to n



