
function calculateTaxes(income) {
    if(!Number.isFinite(income)){
      throw new Error('invalid income')
    }
      if (income > 30000) {
        return income * 0.25;
      } else {
        return income * 0.15;
      }
    }
    
    console.log(calculateTaxes(500))
  
  function removesDuplicates(values){
  return [...new Set(values)]
  }
  
  function removeDupes(values){
    const arr = [...new Set(values)];
    if(typeof values === 'string') return arr.join('')
    return arr
  }
  
  function remove (arr ,val){
    return arr.filter((el)=>{
      el !==val
    })
  } 
  
  // const names =[];
  
  // let nameInput =document.getElementById('nameInput')
  
  // function submitForm(){
  //   names.push(nameInput.value)
  // }