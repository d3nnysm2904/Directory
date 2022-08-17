//intro to maps

//maps is kinf of like object but the difference is that the keys in map can be any data type

const myObj = {};

myObj["a"] = 1;

myObj[true] = "True";

//let say taht we want to put an obj inside newObj, we can

let key = {};

myObj[key] = "An object1";

let mystery = { mistery: 1 };

myObj[mystery]; // this gives the value of "An object1"

//creating array and object
const arr = [1, 2, 3];
const obj = {};

//to create map
//************************************ */
const myMap = new Map();

//*************************************** */
//to add key/value pair we use method set

myMap.set("key", "val");
myMap.set("7", 7);

//to get info out , to retrieve  value
myMap.get("key"); //val

//we cant do myMap.set([],'empty array)  same with obj
//instead

const empty = [];

myMap.set(empty, "empty array");

//adding functions

const add = (a, b) => a + b;
const mul = (a, b) => a * b;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mul, 0);

const bandData = [
  [3, "3 Doors Down"],
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];
const bandMap = new Map(bandData);

//to make this an array again just [...bandmap]

bandMap.has("four"); //true

bandMap.set(182, "Blink-182").set("twenty", "Matchbox Twenty");

bandMap.delete("twenty"); //it deletes

//to empty out the map we use clear
//bandMap.clear();

bandMap.keys(); //it gets all keys
[...bandMap.keys()]; //turns all keys into array

bandMap.values(); //gets the values
[...bandMap.values()]; //turns all values into array

bandMap.size; //the quantity of values in bandMap which is 5

//Looping in maps

// bandMap.forEach((val, key) => {
// 	console.log(key + '=>' + val);
// });

for (let [key, value] of bandMap) {
  console.log(key, "=", value);
}

for (let char of bandMap.keys()) {
  console.log(char);
}
