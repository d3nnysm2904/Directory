let numbers =['1','2','3']

  const num =numbers.map(function(value, index ,array){
    return value*10
})//it returns ['10','20','30']

const todos = [
	{
		id       : 1,
		text     : 'walk the dog',
		priority : 'high'
	},
	{
		id       : 2,
		text     : 'walk the chickens',
		priority : 'medium'
	},
	{
		id       : 3,
		text     : 'feed the cats',
		priority : 'low'
	},
	{
		id       : 4,
		text     : 'put out the fire in my garage',
		priority : 'very high'
	}
];

const todoText = todos.map(function(todo) {
	return todo.text;
}); //["walk the dog", "walk the chickens", "feed the cats", "put out the fire in my garage"]


//array.from makes an array out of nodes 
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
	return a.href;
});

// ***************************
// WRITING OUR VERSION OF MAP:
// ***************************

function myMap(arr, callback) {
	const mappedArray = [];
	for (let i = 0; i < arr.length; i++) {
		const val = callback(arr[i], i, arr);
		mappedArray.push(val);
	}
	return mappedArray;
}

const priorityMap = myMap(todos, function(todo) {
	return todo.priority;
}); //["high", "medium", "low", "very high"]

const repeatedStrings = myMap([ 'a', 'b', 'c', 'd', 'e' ], function(str, idx) {
	return str.repeat(idx);
}); //["", "b", "cc", "ddd", "eeee"]