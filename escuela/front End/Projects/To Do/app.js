const formAdd=document.querySelector('#newTodo button')
const inputAdd=document.querySelector('#todo1')
const ul =document.querySelector('ul')
const formR =document.querySelector('ul')

formAdd.addEventListener('click',function(e){
    e.preventDefault();
const newT = document.createElement('li')
const newB=document.createElement('button')
newT.innerText=inputAdd.value +  '     ';
newB.innerText='Remove'
ul.appendChild(newT)
newT.appendChild(newB)
localStorage.setItem('newt',newT.innerHTML)
});

formR.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
       
    } else if(e.target.tagName==="LI"){
e.target.style.textDecoration='line-through'
    }
})


