// const removeButton =document.querySelectorAll('li button')
// const form =document.querySelector('#addfriend')
// const  input=document.querySelector('#firstname');
// const ul =document.querySelector('#friendlist')

// for(let btn of removeButton){
//     btn.addEventListener('click',function(e){
//         e.target.parentElement.remove();
    
//     })
// }

// form.addEventListener('submit',function(e){
// e.preventDefault();
// const newF =document.createElement('li');
// const newB =document.createElement('button');

 
// // newB.addEventListener('click',function(e){
// //     e.target.parentElement.remove() 
// // })
// newF.innerText=input.value;
// input.value='';
// newB.innerText='Remove';

// ul.appendChild(newF)
// newF.appendChild(newB)

// })

const form =document.querySelector('#addfriend')
const  input=document.querySelector('#firstname');
const ul =document.querySelector('#friendlist')

ul.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();

    }  else if (e.target.tagName ==="LI"){
        // e.target.classList.toggle('best');
        e.target.classList.add('best')
        const heart =document.createElement('span')
        heart.innerHTML='&hearts;';
        e.target.prepend(heart)
    }

})

   
form.addEventListener('submit',function(e){
    e.preventDefault();
    const newli=document.createElement('li');
    const newB = document.createElement('button');
newli.innerText=input.value;
input.value=''
newB.innerText='Remove';

ul.appendChild(newli);
newli.appendChild(newB)
})