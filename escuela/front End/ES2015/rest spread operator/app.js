function sum() {
	const args = Array.from(arguments);
	return args.reduce((sum, val) => {
		return sum + val;
	});
}
sum(4, 5, 6); //15
sum(98, 23, 1, 2, 1, 1, 1, 1, 1); //129

// NO ARGUMENTS OBJECT IN ARROW FUNCTIONS!
// const max = () => {
// 	console.log(arguments);
// };

const max = function() {
	const args = Array.from(arguments);
	return args.reduce((max, currVal) => {
		return currVal > max ? currVal : max;
	});
};


//rest /spread   ...

//rest ...

//when the 3 dots are part of a function definiton, we call the operator the 'rest' operator 

//it makes as many argument we put into an array 
function sum (...num){
    if(!num.length)return undefined 
    return num.reduce((acc,val)=>acc +val)
}

//collecting remainig arguments 

function oneOrmoreArguments(first,...more){
    console.log(first)

    more.forEach((arg)=>{console.log(arg)})
}


function makeFamily(parent1,parent2,...kids){
    return{
        parents:[parent1,parent2],
        children:kids.length ? kids : 0
    }
}

const filterByType =(type , ...values)=>{
    return values.filter((v)=>typeof v === type)
}

//-------------------SPREAD------------       
//we call it in a function makeFamily(...)

function takesFour(one,two,three,four){
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    
}

const names =['Jenny','Ado','Yaki','Denny']


takesFour(...names)
//Jenny
//Ado
//Yaki
//Denny

//when we callled in a function kind of does a foor loop in the array or whatever we pass 

//array literals 

const palette = [ 'lavender berry', 'sunflower yellow', 'orchid orange' ];

// const paletteCopy = palette.slice();
const paletteCopy = [ 'sky blue', ...palette, 'grass green' ];

const greenTeas = [ 'snow jasmine', 'fragrant leaf' ];
const oolongTeas = [ 'honey orchid', 'winter sprout' ];
const herbalTeas = [ 'african solstice', 'marshmallowroot' ];
const coffees = [ 'guatemala red cat', 'snow leopard blend' ];

const allTeas = [ ...greenTeas, ...oolongTeas, ...herbalTeas ];

const withCaffeine = [ ...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey' ];

const vowels = 'aeiou';
const vowelArr = [ ...vowels, 'sometimes y' ];

//we call it in a array [...something]







//we call it in a object{...obj}
const tea = {
	type   : 'oolong',
	name   : 'winter sprout',
	origin : 'taiwan'
};

const teaData = {
	steepTime : '30s',
	brewTemp  : 175,
	origin    : 'japan'
};

// const tea2 = { ...tea };

const teaTin = { ...tea, price: 22.99 };

// const newTea = { ...tea, name: 'golden frost' };
const newTea = { name: 'golden frost', ...tea }; //the value name was overwritten with the spread tea 

const fullTea = { ...tea, ...teaData };

const colors = [ 'red', 'orange', 'blue' ];
const dummyObj = { ...colors, ...'CAT' };



const shoppingCart = [
	{
		name     : 'honey orchid',
		quantity : 2,
		price    : 13.5
	},
	{
		name     : 'african solstice',
		quantity : 4,
		price    : 25.99
	}
];

const cartCopy = [ ...shoppingCart ];

//when we callled in a function kind of does a foor loop in the array or whatever we pass 