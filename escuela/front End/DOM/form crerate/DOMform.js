// const form1 = document.querySelector('#Monkey')

// form1.addEventListener('submit',function (event){
//  event.preventDefault(); 
//     alert('Submitted Form')
// })

//  document.querySelector('a').addEventListener('click',function(evt){
//      evt.preventDefault();
//  })

// ---------------------------------\
const form = document.querySelector('#logoform')
const brandInput=document.querySelector('input[name="brandname"]')
const colorInput =document.querySelector('input[name="color"]')
const rangeInput =document.querySelector('input[name="range"]')
const result =document.querySelector('#result')



form.addEventListener('submit',function(e){
    e.preventDefault();
    const newLogo = makeLogo(brandInput.value,colorInput.value,rangeInput.value)
    
result.appendChild(newLogo)
    })

    function makeLogo(brand,color,range){
const logo =document.createElement('h2');
logo.innerText=brand;
logo.style.color=color;
logo.style.fontSize=range +'px';
return logo
    }