//Conditional Logic 
A list of comparison operators


< less than
<= less than or equal to
> greater than
>= greater than or equal to
Be careful when using relational operators (i.e. less than, greater than, etc) on things that aren’t numbers!

== vs ===
Checks for equality of value, but not equality of type.
It coerces both values to the same type and then compares them.
This can lead to some unexpected results!
Use === and !==

=== strict equality
== equality
!== strict inequality
!= not equal
---------------
Boolean Logic 

FALSE VALUES :
FALSE
0
' '
NULL
UNDEFINED 
NaN
----
EVERYTHING ELSE IS TRUE 
 ----------------

 LOGICAL OPERATORS 
 &&-and
 ||-or
 !-not

 examples
 &&:--AND;needs all sides to be true 
let password = 'Taco Tuesday'

if(password.lenght >=6 && password.indexOf (' ') !==-1){
    console.log('Valid password')
}
else{console.log('Not valid')}
----------------------------
||--OR;needs one to be true 

let age =76 
if(age<6 || age>=65){
    console.log('free tickets ')
}
else{'10$'}

-------
!--NOT;expresion returns false if is true 

!null//true\
!45//false

operators precedence 
NOT(!) HAS HIGHER PRECEDENCE THAN AND (&&) and (&&) HAS MORE PRECEDENCE THAN OR(||)
!> && >||  
FOR PREFERENCE USE PARENTHESIS ()

----------------------------------
let day =1

if(day =1){
    console.log('monday')
}
else if(day =2){
    console.log('tuesday')
}
else if(day =3){
    console.log('wednesday')
}
else if(day =4){
    console.log('thursday')
}

easy way 

switch (day){
    case 1 :
    console.log('Monday')
    case 2 :
    console.log('Tuesday')
    case 3 :
    console.log('Wedsnady')
    case 4 :
    console.log('Thursday')
}

-------------------------
Ternary operators 
this only works with an yes or no 
if 
else 

let num =7 
if (num===7){
    console.log("true")
}
else{
    'false'
}
//this is the ternary syntax same as above 

num===7 ? console.log("true");console.log("bad")

//another example 

let status ='offline' 

let color;
if(status==='offline'){
    color='red';
}
else{
    color='green'
}

//other way

let color = status ==='offline' ? 'red':'green'



