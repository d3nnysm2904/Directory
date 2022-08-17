//objects 
//OBJECTS ARE COLLECTIONS OF PROPERTIES 
//PROPERTIES ARE A KEY VALUE PAIR
//THATER THAN ACCESSING DATA USING A INDEX, WE USE CUSTOM KEYS  

//   { } ---> object literal
//everyy key is made into an string
const object = {
    object1 : 1,
    object2 :2 ,  
    object3 :3 ,  
    object4 :'four' ,
     45     :'fourty five', 
    '75 trombones': 'great song '

   //keys   :value
}

object.object4//four 
object[45]//fourty five it turns 45 into a string 


const pallete ={
    red : '#eb4d4b',
    yellow:'#f9ca24',
    blue:'#30336b'

}

let mysteryColor = 'yellow'

pallete[mysteryColor]//#f9ca24

const userReviews ={};


userReviews['denny45'] =4.0;//this will update the const userReviews
userReviews.yetzi98=5.0//will update as well 

userReviews['denny45']+=2;//denny45 now is 6.0

userReviews.yetzi98++//YETZI98 IS NOW 6.0

//arrays+objects 

const student = {
    firstName :'David',
    lastName: 'Jones',
    strenghts:['music,art'], //array i
exams :{       //---->OBJECT 
    midterm:93,
    final:88
}
};
const avg =(student.exams.midterm + student.exams.final)/2;// SUMA EL PARENTESIS Y DESPUES DVIDE POR 2 
student.strenghts[1]//GIVES U 'art' array

let produce =[
    {
        product:'eggs',
        price:1.99,
        quantity:'dozen'
    },
    {
        product: 'bread',
        price:3.29,
        quantity:1
    } ,

    { product: 'Milk',
      price:2.99,
      quantity:1

    }
]
produce[0].price + produce[1].price//this add prce of egg and price of bread 

let num =[1,2,3,4]
let mystery =[1,2,3,4]
let moreNum = num;

//They look the same but refer to difffrents arrays
 num===mystery//false

 //these two reference the  exact same array 
num===moreNum//true 


const user ={
    username : 'Hello',
    email: 'd3nnysm',
    notificacions :[]

}
if(!user.notificacions.length){//same as user.notificacions.length===0
    console.log('works')
}

