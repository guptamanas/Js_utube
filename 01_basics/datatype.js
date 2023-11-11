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