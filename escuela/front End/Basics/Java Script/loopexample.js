// const myStudents = [
//     {firstName :'denny',
//     lastName: 'Sanchez',
//     grades :100
//     },

//     {firstName:'Yaki',
//     lastName:'obando',
//     grades:40
//     },

//     {
//         firstName:'jenny',
//         lastName:'mosquera',
//         grades:95
//     }
// ]

// total = 0
// for (i=0 ; i <myStudents.length;i++){
//     let student = myStudents[i];
//     total+= student.grades;
    
    
// }
// console.log(total)

//NESTED LOOPS
// for( i = 1 ; i<=10;i++){
// console.log('outer loop',i);
// for(let j= 10;j>=0;j -=2){
//     console.log('  inner loop',j)
// }
// }


// const gameBoard = [
//     [4,32,8,4],
//     [64,8,32,2], 
//     [8,32,16,4],
//     [2,8,4,2]
// ]; 
// let totalScore =0

// for(let i = 0 ; i < gameBoard.length; i++){
//    let row =gameBoard[i];
// //    console.log([row])
//    for(let j =0; j < row.length ; j++){
//        totalScore+= row[j]
//     // console.log(row[j]);
//    }
// }
//while loop

// for( let i=0;i<=10;i++){
//     console.log(i)
// }
// let num =0;
// while(num<10){
//     console.log(num);
//     num++;
// }
// while(
//     {}
// )

// let j=0;

// const target = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);
// while(guess!==target){
//     console.log(`target: ${target}   guess: ${guess}`);
//     console.log(guess);
//     guess = Math.floor(Math.random()*10);

// }
// console.log(`target: ${target}    guess: ${guess}`);
//  console.log('congrats ')

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


// const magicSquare =[
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ];

// for(let i =0; i <magicSquare.length;i++){
//     let row1 =magicSquare[i];
//     let sum =0;
//     for(let j =0 ; j < row1.length;j++){
//         sum+= row1[j]
//     }
// console.log(`${row1}summed to ${sum}`)
// }

// let numbers =10
// for(i=0;i<=10;i++){
//     console.log(i)
// }

// let j =0;
// while (j <=10){
//     console.log(j);
//     j++;
// }

let num1 =0 
for(i=10;i>=0;i--){
    console.log(i)
}