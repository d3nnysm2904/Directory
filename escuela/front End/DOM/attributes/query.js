//this is for the console

document.getElementById('gallery');//this retrieve an htm element 
//document.getElementById('muffin-form');
document.querySelector('#submit')//will give id 

document.querySelector('h2')// 

document.querySelector('.section-title')//class

document.querySelector('h3.section-title')//only h3 with class of section-title

document.querySelector('input')//first input 

document.querySelector('input[type="text"]')// will give me input type text 

document.querySelector('input[type="range"]')

document.querySelectorAll('hr')//selects all hr

document.querySelectorAll('body > hr')//selects all hr descendent of body 

document.querySelectorAll(':not(p)')//will select everting that is not a paragraph 

document.querySelectorAll('h2:nth-of-type(1)')// will give me first h2 of the page 

const form = document.querySelectorAll('form')// creates a variable that allow us to acces independent html elemnts  inisde in this case form 

document.querySelector('button')

const h1 = document.querySelector('h1')

h1.innerText = 'GO away '


//an h1 wiht id of pic
const img = document.querySelector("#pic")