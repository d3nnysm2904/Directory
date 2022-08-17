function add (a,b){
    return a+b
}

const substract =function (a,b ){
    return a-b 
}

function multiply (a,b){
return a*b
}

function divide (a,b){
    return a / b
}


const math=[add,substract,divide,multiply]

//this functio allows me to add values for 'a' and 'b' and also add a function 
function doMath(a,b ,mathFunction){
    return mathFunction(a,b)
}

function doAllMath (a,b,mathFunction){
    for(let func of mathFunction){
        func(a,b);
        console.log(func(a,b))
    }
//in the console we pass doAllMath(5,5,math) and it will run all math operations 
}


//------------------------forEach---is an array methods 

const colors=['purple','green','red','blue'] 


colors.forEach(function (val,i){
    const cap =val.toUpperCase()
    console.log(cap,i)
})

//colors.forEach(console.log)  // it pass each value , with the index and the complete array 


let numArr=[10,20,30,40]
// it pass each value , with the index and the complete array 
numArr.forEach(function(value,index,array){  
    console.log(value,index)
})

const prices =[20.99,10.75,8.96, 7]
let total =0;

prices.forEach(function (val){
    total +=val
})
console.log (`this is the total ${total}`)

//this is better 
const price=[1,2,3,4,5]
let total1 =0 
for(let p of price){
    total1 +=p
}
console.log (`this is the total ${total1}`)


const array1 =['a','b','c','d']

//this is a callback 
function myForEach(array, func){
for (let arr of array){
    func(arr)
}
}