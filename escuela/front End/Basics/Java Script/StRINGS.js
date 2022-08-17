STRINGS are textual values and we wraped them in quotes
ex=
let firstName ="Ziggy";
or
let secondName ='Saggy ' ; //be consistent with quotes 

firstName+lastName//"ZiggySaggy" or 'ZiggySaggy' depending on the type of quotes used 
firstName +"" + lastName//"Ziggy Saggy"
let fullName = "Ziggy"+""+"Saggy"//fullName equals to  "Ziggy Saggy "

"de"+ 1 //equals "de1"

typeof is to recognise string or number or other things not there yet 

we can use quotes inside quotes 
example: 'he said' "hahah" :

Strings are indexed -each character has a corresponding index (positional number) FIRST CHARACTER IS 0 
C H I C K E N
0 1 2 3 4 5 6   LOWEST  INDEX IS 0 AND BIGGER FOR ONLT N IS 6 

EVERY STRING HAS A PROPERTY CALLED LENGTH 
"HELLO".LENGTH
5

TO ACCESS INDIVIDUAL  CHARACTERS OF INDICES(PLURAL OF INDEX) we use square brackets []

let mySong ="Surfin' USA"
mySong[0]
"S"
mySong[1]
u 
mySong[2]
r 
and so on 
mySong.length//11 the length is always one greater than the last index 

mySong[11] is undefined means there is nothing 



let gibberish ="akfbsadhfvjsdvfjsaf" //if i wanted to acceses the last character i could do :
gibberish[gibberish.length-1] this would give me they last index 
--------------------------------------------------------------------------------
Methods

strings come with a set of built-in methods, wich are actions that can be performed on or with that particular string 

we can do things like 
searching withing a string 
replacing parts of a string 
Changing case(upper/lowercase)

Example 

let msg ="you are so grounded mr"

string.methods()
msg.toUpperCase()//equals "YOU ARE SO GROUNDED MR" - THIS IS A NEW STRING REMEMBER STRINGS IN JAVA SCRIPT ARE INNMUTABLE MEANING THE VARIABLE CANNOT BE CHANGED 
if we wanted to save that to the variable :
msg =msg.toUpperCase()//msg="YOU ARE SO GROUNDED MR"
----------------------------------------------------------------
ANOTHER METHOD IS TRIM 

let greeting ='    leave     me    alone   plz '
greeting.trim()//'leave me alone plz' 

also we can do 
let color = '       purple'
color.trim().toUpperCase()//'PURPLE' with no spaces and uppercased  
---------------------------------------------------
DIFFERENT SET OF STRING.METHODS(ARG)
--------------------------------------------------

indexOf-will tell u where in a string a given string occurs, a sub index 

example 
let tvShow ='catdog'
tvShow.indexOf('cat')//0
tvShow.indexOf('dog')//3
tvShow.indexOf('z')//-1 meaning not found 
--------------------------------------------------------------------
next method is string.slice 

slice takes slices of a existing string and gives u pieces of it 

let str='supercalifragilisticexpialdocious'
str.slice(0,5)//super  its starts at 0 and end at 4 1 less index 

let money = '$50.60'
money.slice(1)//'50.60'
--------------------------------------------------------------------
Methods Replace it replaces 

'baseball is entertaining'.replace('entertaining','ok')// 'baseball is ok'

const age="5"+"4"="54"
-----------------------------------------------------------------------
STRING ESCAPES -combinations of characters that have different meaning withing a string 

// \n-newline --"HELLO\nGOODBYE"->"HELLO
//                                GOODBYE"
// \'-single quote-- 'he said I ain\'t happy'->'he said I ain't happy'

// \"-double quote-- 'he said\"I aint happy'=>'he said" I aint happy" '

// \\-backslash--> "\\"->"\"
 --------------------------------------------------------------------------

 STRING TEMPLATE LITERALS 
 template literals are string that allow embedded expresions, wich will be evaluated and then turned into resulting string 
`${}`  ---> back-ticks wich are above TAB, and then ${}

 `i counted ${3 + 4 } sheep`;//' i counted 7 sheep 

another example
let animeal ='pig'
let sound= 'oink '
`${animal} says ${sound}` ---> 'pig says oink'
---
let item='cucumber';
let price='1.99';
let quantity='4'
`You bougth ${quantity} ${item}, total price:$${price*quantity}'; --->"You bougth 4 cucumbers, total price:$7.96 


let colorResponse = prompt("what is your favorite color?");
console.log("Your favorite color is " + colorResponse);









