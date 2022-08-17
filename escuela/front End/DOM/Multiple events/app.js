// const removeButton =document.querySelectorAll('li button')
// const form =document.querySelector('#addfriend')
// const  input=document.querySelector('#firstname');
// const ul =document.querySelector('#friendlist')



// for(let btn of removeButton){
//     btn.addEventListener('click',function(e){
//       e.target.parentElement.remove();
      
//     })
// }


// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const newF =document.createElement('li');
//     const newB=document.createElement('button');
//     newB.addEventListener('click',function(e){
//         e.target.parentElement.remove();
//             })
//     newB.innerText='Remove'
   
//     newF.innerText=input.value;
//     input.value='';
//     ul.appendChild(newF);
//     newF.appendChild(newB)

// })



//Delegate 
const form =document.querySelector('#addfriend')
const  input=document.querySelector('#firstname');
const ul =document.querySelector('#friendlist')
ul.addEventListener('click',function(e){
    if(e.target.tagName==='BUTTON'){
    e.target.parentElement.remove()
    }
})




form.addEventListener('submit',function(e){
    e.preventDefault();
    const newF =document.createElement('li');
    const newB=document.createElement('button');
        newB.innerText='Remove'
   
    newF.innerText=input.value;
    input.value='';
    ul.appendChild(newF);
    newF.appendChild(newB)

})