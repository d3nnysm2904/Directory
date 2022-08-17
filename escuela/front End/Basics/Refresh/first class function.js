function greet (){
    console.log('Hi How are u')
}

function diss(){
    console.log('u suck ')
}
function repeatThreeTimes (func){
    func();
    func();
    func()
}

function repeatNum (num,func){
   for( let i=0;i<num;i++){
       func()
   }
}

let funcs =[greet,diss];
//funcs[0] acces greet 
//funcs[1]() runnes the value 'u suck'

const myFuncs = function add(x,y){
    return x+y
}

function giveBirth (){
    return function cry (){
        return 'waaaahhh'
    }
}

function makeMultiplyfunc(num){
return function mult(x){
    return num * x
}
}
const quad = makeMultiplyfunc(4)

//SINGLE THREAD
// greet();
// alert('i am alert ')
// diss();

//web workers??

//setTimeout accepts a function 'to call' and a timer in miliseconds 

//greet()
//setTimeout(diss,3000)
//greet()

//setInterval(diss,2000)
//to stop clearInterval(1)

//anonymous function

diss();
setTimeout(function(){
    greet();
    greet()
},1000)

const printOne = function(){
    console.log(1)
}