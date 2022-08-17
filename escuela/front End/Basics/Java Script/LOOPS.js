//LOOPS
 //there are multiiple loops
 //for loop
 //while loops 
 //for.. of loop
// for ...in loop

//----------
//for loop

// for(
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// )
// start at 1       ;stop at 10   ;   add 1 each time 
for(let i =1;       i<=10        ;   i++){
    console.log('HELLO:',i )
}

let numbers =10
for(i=0;i<=10;i++){
    console.log(i)
}

let j =0;
while (j <=10){
    console.log(j);
    j++;
}

//INFINITE LOOPS 
// for(let i =20; i>=0;i++){
//     console.log(i);
// }BADDDDD!!!!!  

//----------------------

//FOR LOOPS + ARRAYS 

const animales =['lions','tiger','bears']

for(let i=0;i<animales.length;i++){
    console.log(i,animales[i]);
    //0 'lions'
    //1 'tiger'
    //2 'bears'
}

const examScore = [98,77,88,93,64,45];

for(let i= 0;i<examScore.length;i++) {
    console.log(i,examScore[i]);
}

const myStudents = [
    {firstName :'denny',
    lastName: 'Sanchez',
    grades :100
    },

    {firstName:'Yaki',
    lastName:'obando',
    grades:40
    },

    {
        firstName:'jenny',
        lastName:'mosquera',
        grades:95
    }
]
for(let o=0; o < myStudents.length;o++) {
     let estudiantes = myStudents[o];
     console.log(`${estudiantes.firstName} ${estudiantes.lastName} scored ${estudiantes.grades}`)
    //console.log(`${myStudent[i].firstName}`)
}


let total =0
for(i = 0;i<myStudents.length;i++){
    let student = myStudents[i];
    total += student.grade;
}
console.log(total)
//------------------
//NESTED LOOPS 

const gameBoard = [
    [4,32,8,4],
    [64,8,32,2], 
    [8,32,16,4],
    [2,8,4,2]
];
for(let i=0;i <gameBoard.length;i++){
   let row =gameBoard[i];
   for(let j =0; j < row.length ; j++){
       console.log(row[i],j)
   }
}

//while loop
let number =0;
while(number<10){
    console.log(num);
    number++;
}
// while(
//     {}
// )


const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(guess!==target){
    console.log(`target: ${target}   guess: ${guess}`);
    console.log(guess);
    guess = Math.floor(Math.random()*10);

}
console.log(`target: ${target}    guess: ${guess}`);
 console.log('congrats ')

 //while (some condition)
 //in the loop , update or attempt to make that condition false \


 //BREAK
//  const target = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);

// while(true){
//     if (target===guess)break;
//     console.log(`target: ${target}   guess: ${guess}`);
//     console.log(guess);
//     guess = Math.floor(Math.random()*10);
// }
// console.log(`target: ${target}    guess: ${guess}`);
//  console.log('congrats ')


//for or

//for(variable of iterable){ 
   // statment
//}

let subreddits =['soccer', 'futbol', 'baseball', 'basketball' ];

for(let i=0;i < subreddits.length;i++){
    console.log(subreddits[i]);
}
//same as above 
for(let sub of subreddits){
    console.log(sub)
}


const magicSquare =[
    [2,7,6],
    [9,5,1],
    [4,3,8]
];



for(let row of magicSquare){
    let sum=0;
    for(let num of row){
        sum+=num;
    }
    console.log(`${row}summed to ${sum}`)
}
// for(let i =0; i <magicSquare.length;i++){
//     let row =magicSquare[i];
//     let sum =0;
//     for(let j =0 ; j < row1.length;j++){
//         sum+= row[j]
//     }
// console.log(`${row}summed to ${sum}`)
// }

const word1 = ['mail', 'milk','bath','black'];
const word2 = ['box', 'shake','tub','berry']; 

for(let i =0; i < word1.length;i++){
    console.log ( `${word1[i]} ${word2[i]}`)
    }


    const movieReviews = {
        arrival      :9.6,
        Alien        :9,
        amelie       :8,
        'in brudges' :9,
        amadeus      :6,
        'Kill bill'  : 9.7,
         Coraline    :7

};
for(let movie of Object.keys(movieReviews)){
    console.log(movie,movieReviews[movie])
}

const rating = Object.values(movieReviews);
let total1 =0;
for( let r of rating){
    total1+=r;
}
let avg1= total1/rating.length;
console.log(avg1)