const name="Manas"
const age=23
console.log(`hello my name is ${name} and age is ${age}`);

//to declare string 2nd method
const gamename=new String("manas")
//console.log(gamename)

//console.log(gamename.toUpperCase());
//console.log(gamename.length);
//console.log(gamename);
//console.log(gamename[0]);
//console.log(gamename.charAt(2));
console.log(gamename.indexOf('n'));
//SUBSTRING:
const newstring=gamename.substring(0,4); //mana
console.log(newstring);

//SLICE takes negative values also but substring does not
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);
// o/p -> [ 'Lemon', 'Apple' ]

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(-9, -1);
console.log(citrus);
// o/p -> [ 'Banana', 'Orange', 'Lemon', 'Apple' ]

const fruis = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citru = fruis.slice(1, 3);
console.log(citru);
//o/p -> [ 'Orange', 'Lemon' ]

 /*
 The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
array.slice(start, end)
if negative no. is present it count from last last index start with -1 and does not include the end  index value
if positive is present then count from begining and begining index start from 0 and does not include the end index value
 */


//TRIM METHOD: TRIM REMOVES STARTING AND END SPACES
const tr="    manas   ";
console.log(tr);   //o/p ->    manas   
console.log(tr.trim());  //op -> manas [removes all whitesaces]

//REPLACE:  name.replace('jo replace krna h','jisse krna h');
const url="hello%dmanas";
console.log(url.replace('%d','-'));  // o/p -> hello-manas

//includes -> tells ki particular keywod h ya ni
console.log(url.includes("hello"));  // o/p ->true

//split
const namme="manas-anjali-ruchi";
console.log(namme.split('-'));  //o/p -> [ 'manas', 'anjali', 'ruchi' ]