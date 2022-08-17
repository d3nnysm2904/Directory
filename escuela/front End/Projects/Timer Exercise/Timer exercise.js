//I had problems creating the first function look up the solution and created a similar one, instead of countdown, i did countUp 

function countdown(num){
    let count =setInterval(function(){
        num--;
        if(num<=0){
            clearInterval(count)
            return console.log('done')
        }else {
            console.log(num)
        }
    },1000)

}

function countUp(num){
    let count =setInterval(function(){
        num++;
        if(num>=10){
            clearInterval(count)
            console.log('we made it')
        }else{console.log(num)}
    },1000)
}

//Same here
function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }




function randomNum(){
   let num;
   let time=0
 
   let random =setInterval(function(){
    let num= Math.floor(Math.random()*10 +1);
       time++;
       if(num>=10){
           clearInterval(random)
           console.log(`It took ${time} /trytries`)
       }else{console.log(num)}
   },1000)
}