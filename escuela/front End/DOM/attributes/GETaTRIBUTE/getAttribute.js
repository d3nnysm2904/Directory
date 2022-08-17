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