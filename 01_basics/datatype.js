/* TYPES OF DATATYPE:
1) PRIMITIVE -> String,Number,Boolean,BigInt,Symbol,undefined,null
2) NON PRIMITIVE (REFERENCE) -> Array,Objects,Functions
*/

//Primitive datatypes ---
const score=100
const screval=100.3

const islog=false
const outtemp=null;
let userid;  //it defined it as undefined
let userrid=undefined;

const id = Symbol('123')  //symbol is used to give the unique identity or it gives the unique value even the same no. or string is passed 
const anotherid=Symbol('123') 

//console.log(id == anotherid) //gives false because both are not equal because of symbol

//console.log(typeof(userrid))

//Non Primitive
const arr=["shaktiman","doga","arjun"];

let obj={
    Name:"Manas",
    age:22,
}

const myfunc =function()
    {
       console.log("Hello World");
    }

    console.log(typeof(myfunc))


    /*
    Typeof val      Result
    Undefined       undefined
    Null            object
    Boolean          boolean
    String           string
    Function         function
    Array            object
    Object           object
    Symbol           symbol
    */

    //**************************************** 
    /* Two types of memory used:
    1) Stack Memory -> always used by primitive datatypes
    2) Heap Memory -> always used by non primitive datatypes

    In STACK memory always copy milta h means agar hm koi chnages kte h to copy wale chnage hote h original wala as it is rhte h 
    But in case of HEAP it gives reference do on chnaging the new one it also reflects the value of old 
    */
   //stack memory example: 
    let myoldname="aman"
    let newname=myoldname
    newname="manas"

    console.log(myoldname); // o/p- aman
    console.log(newname);   // o/p-manas
//it will create a copy of myoldname as assign it to newname as newname chnages hence it does reflect the value of myoldname this is how stack memory works

//IN case of HEAP memory:
let obj1={Name:"ruchi",
          Age:25};
let obj2=obj1;
obj1.Name="anjali"
console.log(obj1.Name);
console.log(obj2.Name);
console.log(obj1.Age);
console.log(obj2.Age);
 //As it uses heap memory do it creates a refrence of obj1 as both obj1 and obj2 poibts to same memory location so when we change obj2 then it also reflects the values of obj1 because it is changing in memory.
