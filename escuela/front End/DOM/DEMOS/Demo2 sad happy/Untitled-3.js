const h1 =document.querySelector('h1');

setInterval(function () {
    if(h1.classList.contains('big')){
        h1.innerText='SADNESS'
    }else{h1.innerText='HAPPY'}
    h1.classList.toggle('big')
    h1.classList.toggle('small')
},1000)


function rgb (){
    const r =Math.floor(Math.random()*256)
    const g =Math.floor(Math.random()*256)
    const b  =Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
    }

const span = document.querySelectorAll('.hello')


setInterval (function(){
    for(let spans of span){
        spans.style.color=rgb();
        spans.style.fontSize='200px'
    }
},1000)