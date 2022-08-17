//we create a function that makes body purple
function purpleBody() {
  document.body.style.backgroundColor = "purple ";
}

//abnother function that wen we type a color makes the body that color
function colors(color) {
  document.body.style.backgroundColor = color;
}
//select the button with id of red an passe the function colors on event click
const btn = document.querySelector("#red");

btn.addEventListener("click", function () {
  colors("red");
});

//adding a click and double click to button yellow and violet
const violetClick = document.querySelector("#violet");

violetClick.addEventListener("dblclick", function () {
  //document.body.style.backgroundColor='violet'
  colors("violet");
});

const h1 = document.querySelector("h1");
violetClick.addEventListener("click", function () {
  h1.style.color = "cyan";
  colors("yellow");
});

//load events
//this is to leave the script tag up top and run the java inside the DOmcontentloaded
document.addEventListener("DOMContentLoaded", function () {
  const bnt = document.querySelector("#load");

  bnt.addEventListener("click", function () {
    console.log("Clicked");
  });
});

//this will  wait for the web to complletly load
windows.addEventListener("load", function () {
  console.log("loaded");
});

//event object

const p = document.querySelector("#par");
p.addEventListener("click", function (e) {
  console.log(e, pageX);
});

p.addEventListener("mousedown", function (e) {
  console.log(e, type);
});
