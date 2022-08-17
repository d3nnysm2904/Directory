/* Selecting elements  */
// same as jQuery()
$("ul");
/* this will select all uls */
// just like document.querySelectorAll
//this give u an object
$("h1").get(); //this gives an array instead of an obj
$("h1").get(0); //first h1
$("ul li"); //all li inside ul
$("*"); //everything in the page

$("h1 ").text(); //get the text inside h1
$("h1").text("Volcanooo"); //changin text inside to volcanooo

$("li").html(); //get the first li of the page
// $("li").html("lol"); //changes all li to lol

$("a").attr("href"); //this act like getAttribute
//$("a").attr("href", "google.com"); //this acts like setAttribute

const objImg = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reunion_2004_1.jpg/440px-Reunion_2004_1.jpg",
  alt: "lava",
};

$("img").attr(objImg); //this selects all img and changes all hrfef

$("inputs").eq(0); //gets index of whatever we are selecting

$("inputs").val(); //gets the value from inputs
$("inputs").val("something "); //changes the value of input

//css
$("a").css("color"); //retrieves the color
$("a").css("color", "yellow"); //changes color to yellow

// classes  method
$("h1").addClass("highligth"); //add a class to h1 there is only one but if more add to all

$("h1").removeClass("highlight"); //removes class
$("h1").toggleClass("highligth"); //on and of

//Method chaining
//jQuery return obj so allow to chain

const $h1 = $("h1");

$h1
  .addClass("highligth")
  .css("background-color", "teal")
  .css("font-size", "40px")
  .text("Chaining is fun");

//Jquery methods traversal

const specialLi = $("li").eq(3); //selects an index
specialLi.next(); //selects the next li
specialLi.prev(); //selects the previos

specialLi.parent(); //get the parent the ul

specialLi.children(); //gets the children elements
specialLi.children("a"); //loooks for anchor tags inside li

$("ul").find("a"); //it find all anchor tags

//jQuery creating_appending_removing elemnts

$("ul").append("<li>I AM NEW </li> ");

$("li").prepend('<input type ="checkbox"/>');

$("<h1>Hello</h1>").css("color", "orange").appendTo("p");

$("li").after("<bold>Hi</bold>");

//jQuery events

//this is like addEventListener
// $("input").click(function () {
//   alert("Clicked input");
// });

//same as up
$("h1").on("click", function () {
  console.log("another click");
});

//delegation
$("img").on("mouseleave", function () {
  console.log(this.src);
});

$("img").on("mouseenter", function () {
  // this.css("border", "1px solid blue") doesent work;
  $(this).css("border", "10px solid red");
});

//button at the end
$("#add-input").on("click", function () {
  $("form").append('<input type="text"/>');
});

//event delegation , even thoug the new input are created, this eventlistener is listening to all inputs after the form
$("form").on("focus", "input", function () {
  $(this).val("Changed value");
});

//jQuery animations effects

//function $(this).remove inside fadeOut is because if remove is chained to faddeOut , there is no transition
// $("img").on("click", function () {
//   $(this).fadeOut(3000, function () {
//     $(this).remove();
//   });
// });
//fadeIn

$("img").on("click", function () {
  $(this).animate(
    {
      opacity: 0,
      width: "50px", //do not animate width (poor perfomance)
      // transition: "5s",
    },
    3000,
    function () {
      $(this).remove(s);
    }
  );
});
