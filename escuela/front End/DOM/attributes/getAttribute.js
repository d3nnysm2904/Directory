//this will get the very first input
const input =document.querySelector('input')

input.getAttribute('type')//text
input.getAttribute('placeholder')// "How Many Muffins"

const imgs =document.querySelectorAll('img')

//for(let img1 of imgs){
   //console.log(img1.getAttribute('src'))
   //}

input.setAttribute('placeholder', 'I changed the placeholder')

const src =imgs[0].getAttribute('src') 

for(let img of imgs ){
img.setAttribute('src',src)    
}


const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title')

const h2 = document.querySelector('h2');
h2.setAttribute('class', 'big');

const form =document.querySelector('form input');

form.value = 'i Want 10 muffins'

//this is selecting the input type range in the html form the one with the min max at beggining 
const range =document.querySelector('input [type="range"]')

range.value=5

//------------------------------------------
//to change the class it can be 
//const todo =document.querySelector('li')
//todo.className += ' completed'//u need to create an space 



function toggleAllTodos() {
    const todos = document.querySelectorAll('li');
  
    for (let li of todos) {
      li.classList.toggle('completed');
    }
  }
  
  const h1 = document.querySelector('h1');
  
  setInterval(function () {
    if (h1.classList.contains('big')) {
      h1.innerText = "SAD";
    } else {
      h1.innerText = "HAPPY"
    }
    h1.classList.toggle('big');
    h1.classList.toggle('small');
  }, 1000)


  todo.classList.add('hello')//this will add a class to the todo class

  todo.classList.remove('hello')

  todo.classList.toggle('completed')//adds an takes class of completed 
