// function sustract(x,y){
//     return x - y
// }

// function product (x,y){
//     return x * y
// }

// function printDay (num){
//     let date={
//         1: "monday",
//         2: "tuesday",
//         3: "wedsnday",
//         4: "thursday",
//         5: "friday",
//         6: "saturday",
//         7: "sunday",
//     } ;
//     return date[num]
// }

// function lastElement(arr){
//   return arr[arr.length-1]
// }

// function numberCompare(x,y){
//     if(x==y){
//         return 'numbers are equal'
//     }
//     if(x>y){
//         return 'First is greater'
//     }
//     if(x<y){
//         return 'Second is greater'
//     }
    
// }


// function singleLetterCount(str1, letter){
//     let Count = 0;
//     for(let i=0; i< str1.length; i++){
//       if(str1[i].toLowerCase() === letter.toLowerCase()){
//         Count++;
//       }
//     }
//     return Count;
//   }

//   function multipleLetterCount(str){
//     str = str.toLowerCase();
//     let finalObj = {};
//     for(let i =0; i< str.length; i++){
//       if (finalObj[str[i]] === undefined){
//         finalObj[str[i]] = 1;
//       } else {
//         finalObj[str[i]]++;
//       }
//     }
//     return finalObj;
//   }

//   function arrayManipulation(arr, command, position, val){
//     if(command === 'remove'){
//       if(position === 'end'){
//         return arr.pop();
//       }
//         return arr.shift();
//     }
//     else if(command === 'add'){
//       if(position === 'end'){
//         arr.push(val)
//         return arr;
//       }
//       arr.unshift(val)
//       return arr;
//     }
//   }

//   function isPalindrome(str){
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
//     // for(let i =0; i<str.length/2; i++){
//     //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
//     //     return false;
//     //   }
//     // }
//     // return true;
//   }

//   function RPS(){

//     function determineComputer(num){
//       if(num <= .33) return "rock";
//       else if(num <= .66) return "paper";
//       return "scissor";
//     }
  
//     let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
//     let computerChoice = determineComputer(Math.random());
  
  
//     let answers = ["rock", "paper", "scissor"];
  
//     if(!userChoice || answers.indexOf(userChoice) === -1){
//       return "Please select a valid option";
//     }
  
//     if(userChoice === computerChoice) return "Tie!";
  
//     if(userChoice === "rock" && computerChoice === "paper") {
//       return "You lose, computer picked " +  computerChoice;
//     }
//     if(userChoice === "paper" && computerChoice === "scissor") {
//       return "You lose, computer picked " +  computerChoice;
//     }
//     if(userChoice === "scissor" && computerChoice === "rock") {
//       return "You lose, computer picked " +  computerChoice;
//     }
  
//     return "You win! Computer picked " +  computerChoice;
//   }\

//   function logicalColors(x,y){
//       if(x===true){
//           return 'Red'
//       }
//       if(y!==true){
//           return 
//       }
//   }



// function max(arr){
//     let max =arr[0];
//     for(let num of arr){
//       if(num>max){
//           max=num
//       }  
//     }return max
// }

// function removeNumbers(str){
//     let newStr ='';
//     for(let char of str){
//         [['1','2','3','4','5','6','7','8','9','0']]
//         //is a number?

//     }

// }

// let hi= 'hi'

// for (let i=50;i>=0;i--){
//   console.log(i)
// }


//  const purchase =[11,22,33,44,55,66,77];
//  let total =0;
//  for(let char of purchase){
//    total+=char;
//    console.log(char)
//  }
// console.log(total)

// 

// function up(){
//   console.log('kjkhjgjhfjgf')
//   // console.log('kdsdasdasdasdjhfjgf')
// }

// for (let i=0;i <50;i++){
//   up();
// }

//  function rollDice(){
//    let roll =Math.floor(Math.random()*6)+1;
//  console.log(`Rolled ${roll}`)  

//  }
  




// function coin (){
//   let roll =Math.floor(Math.random()*2)+1;
//   if(roll===1){
//     console.log('Head')
//   }
//    else{console.log('Tails')}
// }


// function greet (person){
//    console.log(`Hello ${person }`)
// }

//  function rollDice(){
//       let roll =Math.floor(Math.random()*6)+1;
//    console.log(`Rolled ${roll}`)  
//   }

//    function trowDice(numRoll){
//      for( i = 0; i <numRoll; i++){
//        rollDice();

//      }
    
//    }
//    for( let chars of 'adjfkdsjfbdk'){
//        console.log(chars)
//      }

// function name (parameter ){
//   console,log(num* num)

// }

// function sum (x,y){
//   return x+y
// }

// function isValidPassword (password,username ){
//   if(password.length < 8){
//     return false; 
//   }
//   if(password.indexOf(' ') !==-1){
//     return false;
//   }
//   if(password.indexOf(username) !==-1){
//     return false; 
//   }return true 
// }


// function avg (arr){
//   let total=0;

//   for(let num of arr){
//     total +=num
//   }
//   return total / arr.length;

// }

// function ha (str){
//   for (let num of str ){
    
//   }
// }
function isValidPassword(username,password){
 if ((password.length < 8)||(password.indexOf(' ')!==-1)||(password.indexOf(username)!==-1)){
   return false
 }
  return true 
}

function avg(num){
  let total =0
  for( let idx of num ){
total+=num
  }return total / num.length
}

function isPangram (sentence){
  for(let abc of 'qwertyuiopasdfghjklzxcvbnm' ){ if(sentence.indexOf(abc)===-1){
    return false}
  
    
  }return true
}

function getCard (){
const values =['2','3','4','5','6','7','8','9','10','j','q','k','a'];
const  idx =Math.floor(Math.random()* values.length)
const value= values[idx]

const cards = ['heart','spades','diamonds','club'];
const idxCard =Math.floor(Math.random()*cards.length)
const card = cards[idxCard];
return {value:value,card:card}
}

function pick (arr){
  const idx = Math.floor(Math.random()*arr.length);
  return arr[idx];
}