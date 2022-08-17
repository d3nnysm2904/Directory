//try and catch 


//create a function that doesnt exist
///functionThatdoesNotExist();
//in the console the function that dont exist stops at 5 and nothing else runs  
//console.log('did we make it ')


//so we do this 
//this runs the function that doesent exist and with cath gets the error or whatever happened 



try{//place the code that you wpold like to try and run
    functionThatDoesNotExist();
} catch(error)//the parameter doesent have to be created but if does will hold the parameter error 
{//if an error ocurs , run whatever code is inside like the console.log 
    console.log('sometehing went wrong',error)
}

console.log('it went thru ')

//this trow an error in the console that says 'what just happened?!?
throw 'what just happened?!?';

//try and catch creates block scope, so if u define a variable inside using let or const it will only exist in that block ; the parameter catch is optional but higly reccomende because catch the error and info about it 


//this function accepts an object like this{ firstName :Denny, lastName :Sanchez} and returns 'hello D.S' in the console  
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
