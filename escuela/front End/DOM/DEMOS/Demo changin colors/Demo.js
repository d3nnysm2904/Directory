function randomRgb(){
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    return `rgb(${r},${b},${g})`
    
    }
    

// const h1= document.querySelector('h1');

// h1.style.color=randomRgb();
// h1.style.fontSize='200px';
// setInterval(function(){
//     h1.style.color=randomRgb();
// },500) 

const allSpan =document.querySelectorAll('.letter')



setInterval(function(){
    for(let letter of allSpan){
        letter.style.color=randomRgb();
        letter.style.fontSize='200px'
    }
},500)


function randomColor(){
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    return `rgb(${r},${b},${g})`
}

const h12 =document.querySelectorAll('.yaki')

setInterval(function(){
    for(let h2 of h12){
        h2.style.color=randomColor()
    }
},500)

