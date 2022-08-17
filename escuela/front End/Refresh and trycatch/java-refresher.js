// must know
//look up truthiness and falseness in java 

const num1 = +'13'//---> converts into number 
const num2 = parseInt('135.995')//----> 135 gets rid of numbers after . it doesnt round 
const num3= parseFloat('135.995')//---> 135.995

const num4 = String(15);
const num  = 15 .toString();
console.log(num4);//----> '15'
console.log(typeof num4)//---->string


//7 is false
//!7 is false 
//!!7 ---> is true


let matrix =[
    ['a','b','c'],
    ['c,','d','f'],
    ['g','h','k']
]

for(let i=0; i<matrix.length;i++){
    let subArr = matrix[i];
    console.log(subArr);
    for(let j=0 ; j<subArr.length; j++){
        console.log(subArr[j])
    }
}



let arg ='Hi';
let obj ={};

console.log(obj.arg)
//obj.arg ='there' => {arg:'there'}
//obj[arg]='there' =>{Hi:'there'}

//reference types look up java 


function greet(){
    let msg ='hi'
    console.log(msg)
}
const person = {
    name: 'Denny',
    age:25,
    talk:greet //-->function greet 
}

function printReceipt(product,qty,price){
    return `${product} * ${qty} = ${qty * price}`
}


const wife ={
    name:'Yetzi',
    age:20,
    color:'India'
}

for(let key in wife){
    //console.log(key)
    console.log(`${key}->${wife[key]}`)
}

let colors = ['red','green','blue']
for(let char in colors){
    console.log(char)
}

function enoughMoney(price,qty,balance){
    let subtotal = math.round(qty * price*100)/100;
    if(subtotal <= balance){
        return 'You have enough money'
    }return 'You dont have enough money '
} 

let grades =[99,98,76,54,66,90,81]
let sum = 0 
for (let i=0 ; i <grades.length; i++){
    sum+=grades[i]
}
let avg =sum/grades.length








