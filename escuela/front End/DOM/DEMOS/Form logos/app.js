const form =document.querySelector('#formlogo');
const nameLogo =document.querySelector('input[name="namelogo"]');
const colorInput=document.querySelector('input[name="color"]');
const range =document.querySelector('input[name="size')
const result =document.querySelector('#result')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newLogo = makeLogo(nameLogo.value,colorInput.value,range.value)

result.appendChild(newLogo)
});

function makeLogo(name,color,size){
    const logo = document.createElement('h2');
    logo.innerText=name;
    logo.style.color=color;
    logo.style.fontSize=size +'px';
return logo
}