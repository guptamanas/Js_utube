//object literals
//object  -> consist of keys and values inside {}

const student={
    name:"Manas",
    location:"noida",
    age:23,
    email:"manas.google.com"
}

console.log(student.email);  //way 1 to access
console.log(student["email"]) //way 2

//to create singleton object
const tinderuser=new Object()  //create empty object
console.log(tinderuser)

let user={}  //metod 2 of object creation

user.id="123ac"
user.name="manas"
user.age=12

console.log(user)

const std={
    email:"abc@gmail.com",
    age:23,
    full_name:{
        fname:"manas",
        lname:"gupta"
    },
    id:"234asd"
}

console.log(std.age)
console.log(std.full_name)
console.log(std.id);
console.log(std.full_name.fname)

//to concat 2 or more objects

let obj1={a:1,b:2,c:3}
let obj2={d:4,e:5,f:6}
let obj4={g:8}
let obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3)

//using spread operator we can concat

let fnl={...obj1,...obj2,...obj4}
console.log(fnl)

//to print all the keys of object use Object.keys(obj_name)

console.log(student)
console.log(Object.keys(student))

//gives values of all keys
console.log(Object.values(student))

//object destructing
const{location:loc}=student //const{type:shotname(optional)}=object_name
console.log(loc)