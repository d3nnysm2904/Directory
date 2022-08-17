document.addEventListener('mousemove',function(e){
 
let r = Math.round(e.pageX*255/window.innerWidth)
let b =Math.round(e.pageY*255/window.innerWidth)
const color=`rgb(${r},0 , ${b})`

document.body.style.backgroundColor=color;

})