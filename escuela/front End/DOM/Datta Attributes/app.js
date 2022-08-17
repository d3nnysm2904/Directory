const ul =document.querySelector('#cars')

ul.addEventListener('click',function(e){
    //console.log(e.target.getAttribute('data-id'))
   const selectElement=e.target;
    console.log('see all data attributes',selectElement.dataset);
    console.log('see one data attribute',selectElement.getAttribute('data-model'));
    console.log('see one atribute',selectElement.dataset.year);
    selectElement.dataset.year = "2020";
    e.target.dataset.sold='true'
})