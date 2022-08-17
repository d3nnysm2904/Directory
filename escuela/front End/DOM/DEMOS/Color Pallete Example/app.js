

const section =document.querySelector('#colors')

section.addEventListener('click',function(e){
  
  document.body.style.backgroundColor=e.target.dataset.hex
})

