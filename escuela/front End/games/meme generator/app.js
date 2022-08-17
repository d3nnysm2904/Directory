const imgUrl = document.querySelector("#text");
const buttonCreate = document.querySelector("#img-file");

const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const containerPic=document.querySelector('#container-pic')
const memeImg = document.querySelector("#meme-img");
buttonCreate.addEventListener("click", function createImg(e) {
  e.preventDefault();

  const newImg = document.createElement("img");
  const topT = document.createElement("p");
  const bottomT = document.createElement("p");
  newImg.setAttribute("src", imgUrl.value);
 
  newImg.classList.add("newImg");
  bottomT.innerText = bottomText.value;
  bottomT.classList.add("bottomT");
  topT.innerText = topText.value;
  topT.classList.add("topT");
  
  const ctx=memeImg.getContext('2d');
  ctx.drawImage(newImg,10,10)

  memeImg.getContext("2d")
  memeImg.appendChild(newImg);
  memeImg.appendChild(topT);
  memeImg.appendChild(bottomT);
 
  
});
// const memeImg = document.getElementById("myCanvas");

// var ctx = canvas.getContext("2d");

// var img = document.getElementById("scream");

// ctx.drawImage(img, 10, 10);