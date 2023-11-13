let arr1=[1,2,3,4]
let arr2=[5,6,7,8]

/*arr1.push(arr2)
let farr=arr1.concat(arr2)
console.log(farr);

console.log(farr[5])


arr1.push(arr2);
console.log(arr1)
console.log(arr1[4][1])  

*/
let arr3=[8,9,2,3,4]
//spread operator  it will also combine multiple arrays
const finalarr=[...arr1,...arr2,...arr3];
console.log(finalarr.length)    


console.log(Array.from("Manas"))  //it will convert manas to array type
console.log(Array.isArray("Manas"))  //  to check is manas is array or not
console.log(Array.isArray([1,2,3]))