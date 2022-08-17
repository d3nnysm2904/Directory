//all this in the console

//const h1 = document.querySelector('h1')

//h1.style.color ='orchid'

//const mainHeading = document.querySelector('h1')
//mainHeading.style.background-color  this will give an error 

//maingHeading.style.backgroundColor //it has to be camelCase

const h1 = document.querySelector('h1')

h1.style.color='orchid'


h1.style.backgroundColor='yellow'

h1.style.margingLeft='400px'



//CHANGING MULTIPLE ELEMNTS 
//Remember all this is in the DOM 

const listItems =document.querySelectorAll('li');
for(let listItem of listItems){
    listItem.style.color='green'
}

const h2s =document.querySelectorAll('h2');

for (let allH2s of h2s){
    allH2s.style.backgroundColor='pink';
}

const imgs = document.querySelectorAll('img')

for(let img of imgs){
    img.style.width='200px';
    img.style.border='2px solid green'

}

