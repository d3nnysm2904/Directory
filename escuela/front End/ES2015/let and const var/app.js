var musician='anuel'//this is in the global scope window 

//we can use 
window.song 

//how var behaves inside a function 

//var song only exist inside the function 
function artist (){
    if(true){
        var song ='bebe'//this one goes away
        var song ="bebecita "
    }
    console.log(song)
}

//--------------let can be reassigned but not redeclared (unlike var)
let x = 10
//let x = 99  // cant do this 

//What is a code block 
//esentially any pair of curly braces (outside of object syntax) except object literal 

{
    //this is a code block 
    let x =5;
    var y= 6
}

console.log(x)//Reference error :x is not defined 

console.log(y)
//6

let mood = 'great'

function getMood(num){
    let mood ='fantastic'
    if(num<3){
        console.log('bad')
    } 
}

//const 
console.log(chickens) //this will run 
var chickens =[1,2,3,4,5,6,]


console.log(let1)//this dont run

let let1 =[3243]