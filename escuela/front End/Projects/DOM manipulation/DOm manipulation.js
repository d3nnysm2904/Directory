//question 1
document.getElementById('container')

//question 2

document.querySelector('#container')

//question 3

document.querySelectorAll('.second')

//question 4

const ol =document.querySelector('ol .third')

//question 5

const section =document.querySelector('#container')
section.innerText='hello'

//question 6
const main = document.querySelector('.footer')

main.className+='main'

//question 7

main.classList.remove=('main')

//question 8

const newLi =document.createElement('li')

//question 9
newLi.innerText='four'

//question 10

const ul =document.querySelector('ul')
ul.append(newLi)

const allLi = document.querySelectorAll('ol > li')

for(let li of allLi){
    li.style.backgroundColor='green'
}

//question 12 
const remove = document.querySelector('.footer')

remove.remove()