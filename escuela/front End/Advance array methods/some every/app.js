const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

words.some(function(val) {
    return val.length > 10
})

words.some(function(val) {
   return val.includes('thyroid')
   //is the same as saying 
   //return word.indexOf('thyroid')!==-1  this is saying that if this word is included hen return true
})


//exercise 

btn =document.querySelector('button')

btn.addEventListener('click',function(e){
    e.preventDefault()
    let inp =document.querySelectorAll('input[type=checkbox]')
const allCheeck=Array.from(inp).every(function(val){
    return val.checked
    
})
if (allCheeck){
    document.body.style.backgroundColor = 'pink'
}else{alert('All input must be checked!')}

})