let words ='thyroid'


let arrStr=Array.from(words) //creates array from string 



 arrStr.some(function(val) {
     return val.includes('thyroid')
//     //is the same as saying 
//     //return word.indexOf('thyroid')!==-1  this is saying that if this word is included then return true
  })

 typeof 4 //number 

 .checked //this verify is input type checkbox is checked 



 let num = (1234556)

 let numToString=   num.toString()//convert numbers into string 
 const numArr =Array.from(String(num),Number) //this does the same but 

 let splitArr =   numToString.split('')//split number into diferrent arrays check console 

 let obj={
   object1:'this is 1',
   object2:'this is 2',
   object3:'this is 3',
   object4:'this is 4'
 }


//  For-In Loop (JavaScript Language Basics)

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
//   }


 let obj1 = obj['object1']
 let obj2 =obj.object2

 for(let char in obj ){
    console.log(char)
 }

 let colors =['blue','red','green']

 for (let char in colors){
   console.log(char)
 }




 var arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

 function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
      console.log(val[key])
    return val[key] === searchValue;
  })
}


let food =[
'bread',
'egg',
'flour',
'butter',
'cheese',
'corn starch']

food.includes('egg')//true 
food.includes('fish')//false 
food.includes('corn')//false has to be specific 'corn starch'
food.includes('egg',4)//false ; is asking if egg is after index of 4




//indexOf
food.indexOf('egg')//1
food.indexOf('water')// -1

food.indexOf('flour')!==-1  //this means if flour is in the array food 

let num2=['1','2','3','4','5']

num2.slice(0,2)//['1','2']


//OBJ
//making the string an object with each letter and how manny time are they repeated 

let str = 'loolaapalusa'
//object to push 
const obj3 ={}
//we do a for loop 
for(let char of str){
 //if the character is not in the obj3 the we add 
  if(obj3[char]){
obj3[char]++
  }
  else{obj3[char]=1}
}




//-------------------------------------------------------------
//ternary operator   only works with booleans truew or false 
// let status ='offline' 

// let color= if(status ==='offline'){
//     color='red';
// }
// else{
//     color='green'
// }

// //other way

// let color = status ==='offline' ? 'red':'green'
// const midScores =[70,80,76,90,78,45,87,56,98,76]
// midScores.reduce(function(min, nextScore){
//     if ( nextScore > min){
//         return nextScore
//     }
//     else{return min}
// })

//this is the same as writing the code up 

const midScores =[70,80,76,90,78,45,87,56,98,76]
midScores.reduce(function(min, nextScore){
    return nextScoremin ? nextScore : min
})
//-------------------------------------------------------------------


const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

average // 39.37

//Simple object to array 

let arr=[]
let objj={a:1,a:2}
arr.push(objj)//this push the entire object 
arr.push(objj['a'])//this push the string '1'
arr.push( { "key" : obj["key"]})//this creates a new object 


obj["arr"] = arr[1]
arr.push(obj["a"])


// The Array.every () method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not. The Array.some () method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not.