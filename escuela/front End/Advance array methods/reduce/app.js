let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
});

/*
  2
  6
  12
  20
  30
*/

const words =['hello','I','love','you']

  const result = words.reduce(function(acum, next ){
    console.log(acum ,next)
    return acum +next
})



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

//Adding a second parameter 10

let evens1 =[2,4,6,8,10]

evens1.reduce(function(acum,next){
return acum + next
},10)


//the results are 
//12
//16
//22
//30
//40


const finalsScores =[92,95,96,97,99]