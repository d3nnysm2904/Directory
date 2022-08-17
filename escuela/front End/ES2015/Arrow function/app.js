//Arrow funnctions 



//function declaration

function greet(){
    
}

//function definition  

// const add  =function(x,y){
//     return x+y
// }


//arrow function

const add = (x,y)=>{
    return x + y
}

let arr =[1,2,3]

arr.forEach(function(val,idx,array){
    console.log(val,idx,array)
})

//this is the same 
let arr1=[1,2,3]

arr1.forEach((val,idx,array) => { 
    console.log(val,idx,array)

})

[2,4,56,79,67].reduce((acc,next)=>{
   return Math.max(acc,next)
})

//**********************
//ARROW FUNCTIO SHORTCUTS
//**********************


//if i had only one parameter 

[1,2,3].forEach((n)=>{
    console.log(n*2)
})

// is like this 

[1,2,3].forEach( n=>{
    console.log(n*2)
})


//implicit return this only works if u have only have a single expression 

let num =[1,2,3]

num.map((n)=>{
    if(num % 2===0){
        return 'even'
    }return 'odd'
})

num.map(n=> n % 2===0 )// this return evens 

num.filter((num)=> num % 2===0 ? 'even':'odd' )

// [ 1, 5, 7, 9, 10, 12, 13, 15 ].map((n) =>
// 	if (n % 2 === 0) {
// 		 'even';
// 	}
// 	 'odd';
// );
[ 1, 5, 7, 9, 10, 12, 13, 15 ].map((n) => (n % 2 === 0 ? 'even' : 'odd'));

const dailyRainTotals = [
	[ 1.2, 0.35, 2.2 ],
	[ 1.7, 0.6, 0.1 ],
	[ 2.5, 0.9, 1.5 ]
];
// dailyRainTotals.map((hourlyRainTotals) => {
// 	return hourlyRainTotals.reduce((sum, inchesOfRain) => {
// 		return sum + inchesOfRain;
// 	});
// });
dailyRainTotals.map((hourlyRainTotals) =>
	hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain) 

);
 


// const double = (n) => {
// 	return n * 2;
// };

// **********************
// Arrow Function Gotchas
// **********************
// const makeMath = (num) => {
// 	return {
// 		square : num * num,
// 		double : num * 2
// 	};
// };

// USE PARENS TO IMPLICITLY RETURN AN OBJECT:
const makeMath = (num) => ({
	square : num * num,
	double : num * 2
});

// THE KEYWORD 'THIS' BEHAVES DIFFERENTLY!
const cat = {
	name : 'Bubs',
	eat  : function() {
		console.log(this);
		return `${this.name} chows down`;
	},
	meow : () => {
		console.log(this);
		return `${this.name} says MEOW!!!`;
	}
};
