//ARRAYS
//it collects different strings in one value 

//arrays of numbers 
let students =[5,6,7,8,9]

//array of string 
let name =['Denny', 'Yetzi', 'jenny']

//empty array 
let empty =[]

//a mixed array 
let stuff =[6,'name', null] 

//index arrays 
let num =[1,2,3,4,5,]
//num.length()//4
num[0]//1
num[1]//2
num[2]//3
num[3]//4

num[num.length-1]//gives u the last 

//MODIFYING ARRAYS 
num[2]="TWO"//NOW IN THE ARRAYS 2 IS "TWO"
num[5]= '6' //OR num[num.length-1]// THIS ADD AN ARRAY TO THE END 
// MORE SIMPLE WAY TO ADD ARRAYS 
 num[num.length]='7'

//ARRAYS METHODS
//PUSH--ADD TO THE END 
//POP--REMOVE FROM END 
//SHIFT--REMOVE FROM START
//UNSHIFT--ADD TO START 
let song =[
    'Hello'
    ,'bebe'
    ,'amor'
    ,'sexo ']

    song.push('Bebecita')//adds bebecita to arrays in console 
    song.pop()//eliminates Bebecita 
    song.unshift('song1','song2')//add to the begining several arrays  
    song.shift()//removes from the beggining 

    //---------------------------------------------
    //More methods 
    //concat--merge arrays 
    //includes --looks for a value false or true 
    //indexOf--u already know 
    //join--creates a string from arr
    //reverse --reverses an array
    //slice--copy portion of an arr
    //splice--remove/replace elemnts 
    //sort--sorts an array 

    let fruits =['apples','banana']
    let vegs =['tomate','orange']
    let meat = ['steak','chicken'] 
    let allFood = fruits.concat(vegs,meat);//orders matter
    
    allFood.includes('apples',0)//true

//----------------------------------------------
//REVERSE AND JOIN
    let leters =['R','E','S','P','E','C','T']
    leters.reverse()// gives us the reverse array
    leters.join('.')//gives us ['R.E.S.P.E.C.T'] ONE SINGLE ARRAY 


    //SLICE
    let animals =['shark','salmon','whale','bear','lizard']

    animals.slice(0,3);//[shark,salmon,whale ]
    animals.slice(2);//[whale ,bear ,lizard ]
    animals.slice()//makes copy 

    //splice
    Array.splice(
        {index where to start},
        {how many items to remove},
        {items to add}
      );
    let animals1 =['shark1','salmon1','whale1','bear1','lizard1']
    animals1.splice(1,0,'octopus1')//adds octopus1 between shark1 and salmon1  
animals1.splice(2,2)//ELIMINATES BEAR1 AND LIZARD1 AND GIVES A   
//------------------------------------------------------------

//SORT
let abc = ['b','a','c','d']
abc.sort()//[a,b,c,d]

let numb=[3,50,10,1000,56]
numb.sort()//3,10,1000,50,56

//NESTED ARRAYS 
const colors =[
    ['red','blue']
    ['orange','yellow']
    [1,2,3,4]
]
colors[1][1]//yellow
