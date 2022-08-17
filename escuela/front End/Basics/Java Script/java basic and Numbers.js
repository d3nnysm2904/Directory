values and variables 
primitives types 
Number-numbers 
string-textual information
boolean-yes or no ;true or false 
null-
undefined

Number:
Javascript has One Number type :number 
positive number 
negative numbers 
whole number 
decimal numbers 
NaN-not a number 

simple operations 
50+5-addition
90-1-substraction
11111*7-multiplication
400/25-division
27%2-modulo 
2**3-2 a la 3 que es  =8 exponents 
1/0=infinity 

Variables : we can store a value and give it a name, so that we can 
recall it 
use it 
or change it later on
basic syntax:
let year= 365 

let hens = 4;
let rooster = 2;
hens=rooster//6 /this is saving a value 
---------------------------------
let hens=4
//now there is only 3 
hens-1//this is not changing the value 
hens;//still 4
hens=hens-1//this does 
hens//3
another way to change it 
hen=7   
hen//7 
or 
hen+=4//equals  11  ;we can do it with all operations 
//another examples 
let score =10;
let bonusMult=10
score*=bonusMult//equals 100 
-----------------------------
let counter = 1
counter++//equals 2

Let is an option for making a variable 
there is one other option 
a keyword called const stand for constant 
examle const year =365 but you cannot change the value of thee variable 

writing style 
camleCased:
instead of let person_age =70 //this is snakecased
is let personAge=70

----------------------------
booleans is true or false 

let age =true 
let teen = false 
const isWaterWet =true

variables can change type 
number to boolean and vsciversa but is poop 

------------------------------\
NULL :
INTENTIONAL ABSENCE OF ANY VALUE 
MUST BE ASSIGNED 


UNDEFINED:
VARIABLES THAT DO NOT HAVE AN ASSIGNED VALUE ARE UNDEFINED 
-----------------------------------------

MATH Object

Math.PI//3,141592653589793

//rounding a number:
Math.round(4.8)//5

//absolute value:
Math.abs(-456)//456

//Raises 2 to the power 5th:
Math.pow(2,5)//32

//removes decimal :
Math.floor(3.99999)//3

Math.random()//0.8407004257881006
-----------------------
Math.floor(Math.random() * 10 ) +1//random number times 10 plus 1

--------------------------
Use to parse strings into numbers,

parseInt//parseInt('24') -->24
parseInt//parseInt('24.987') -->24
parseInt//parseInt('24dayslater') -->24  ;if starts with number at beggining 
and
parseFloat//parseFloat('24.987')--->24.987
parseFloat//parseFloat('7')--->7
parseFloat//parseFloat('24days i ate )--->NaN

