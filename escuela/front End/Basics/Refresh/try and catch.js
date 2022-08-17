// //JAVASCRIPT DEBUGGER
// //1-adding 'breakpoint'

// function myFunction (){
//     let x  =1;
//     debugger;//will always stop here
//     //rest of code follows
// }


//  // try / catch
// // are block levels wich means that we can make a -->let msg =1 <--in both try and catch
// // functionThatDoesNotExist;
//  console.log('did we make it')

  try{
     functionThatDoesNotExist();
   
  } catch(err){
      console.log('something went wrong ')
      console.log(err)
      }

function displayInital (user){
    let firstNameLetter = user.firstName[0].toUpperCase()
    let lastNameLetter = user.lastName[0].toUpperCase()
    return `hello ${firstNameLetter}.${lastNameLetter}`

}
//same function with try / catch

function displayInital (user){
    let firstNameLetter; 
let lastNameLetter ;
try{ let firstNameLetter = user.firstName[0].toUpperCase()
    let lastNameLetter = user.lastName[0].toUpperCase()

}catch(e){
    return 'Invalid input'
    console.log(e)
}
return `hello ${firstNameLetter}.${lastNameLetter}`
}


 
//MAKING YOUR OWN ERRORS 
//YOU CAN ACTUALLY CREATE YOUR OWN ERRORS IN JS USING 'THROW' KEYWORD 

console.log('an error is coming');
throw 'what just happened?!?';
console.log('did we make it')

//Throwing better errors
//Instead of just using the throw keyword, you can make a new Error object using the new keyword.
//
console.log("an error is coming....");


//ERROR OBJECT USING THE 'NEW' KEyWORD  
try {
    throw new Error("i am the error  !");
}catch(e){
    console.log('there was a problem ')
    console.dir(e)
}


try {
  throw new typeError ("Oh no!");
} catch (err) {
  console.log("what kind of error?", err.name);
  console.log("what is the message?", err.message);
  console.log("where did it happen?", err.stack);
}



function getMonthname (mon){
    if(typeof mo !=='number'){
        throw new DateError('Month number must be a number')
    }
    mo = mo-1;
    let months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Sep','Oct','Nov','Dec']
if(months[mon]!==undefined){
    return months[mon];}
    else{
        throw new UserException ('InvalidMonthNumber')
    }


}

function func (){
return function (x,y){
    return x + y 
}
}