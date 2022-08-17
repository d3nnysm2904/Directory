//alert("it's Working!");

//if want something explicit printed out we have to use method console.log this print something to the console 

//console.log(3 + 4);
//console.error('oh noo!!!!');

//if(1===1){console.log('it"s true ')}



//example 3

// let num=38 ;
// if(num % 2 !==0){
//     console.log("odd number!")
// }

//performance review 
//3 superstar
//2 meets expectations 
//1 needs improvement 
//else wtf 

// let rating =0;
// if(rating===3){
//     console.log("You are a superstar!")
// }

// else if (rating ===2 ){
//     console.log('meets expectations')
// }

// else if (rating ===1){
//     console.log('needs improvement ')
// }

// else{
//     console.log('WTF!!')
// }

// //another example 
// let highScore =1000;
// let userScore=8909000;

// if(userScore >= highScore){
//     console.log(`Congrats you made it to the top , NEW HIGH SCORE OF ${userScore}`);highScore =userScore 
// }


// else {
//     console.log(`Good Game.Your score did not beeat the high score of ${highScore}`)
// }

// else (userScore < highScore){
    //console.log('Keep tryng ')
//}


    //NESTING 

  //  let password ='HelloKitty'


    // if (password.length >= 6 ) {
    //    if(password.indexOf(' ') ===-1){
    //        console.log("VAlid Password!")
    //    }
    //    else {
    //        console.log("password is long but no space")
    //    }
    // }
    // else {
    //     console.log("password Must be longer!")
    // }

    // let numb =Math.random()  random toss coin 

    // if(numb < 0.5){
    //     console.log ('HEADS')
    // }
    // else(console.log('tails'))

    // let password = 'KRATOS1234'

    // if(password.indexOf(' ')==-1){
    //     if(password.length >=6)
    //     console.log('Valid')
    // }
    // else(console.log('no '))
    
// let score =60;

// if(score >=90) {
//     console.log('Amazing');
// }
//  else if(score >=80 ){
//     console.log('You get B');
// }
// else if (score>=70 ){
//     console.log('You get C');
// }

// else{
//     console.log('F')
// }

let password = 'TacoTuesday'

if(password.length >=6 && password.indexOf (' ') ===-1){
    console.log('Valid password')
}
else{console.log('Not valid')}



let day= 2 

if(day =1){
    console.log('monday')
}
else if(day =2){
    console.log('tuesday')
}
else if(day =3){
    console.log('wednesday')
}
else if(day =4){
    console.log('thursday')
}
 //better way

switch (day) {
    case 1 :
    console.log('Monday');
    break
    case 2 :
    console.log('Tuesday');
    break
    case 3 :
    console.log('Wedsnady');
    break
    case 4 :
    console.log('Thursday');
}

let bh=[1,2,3,4,5,6,]

const colors = [
    ['red','blue'],
    ['orange','yellow'],
    [1,2,3,4]
];
colors[1][1]//yellow