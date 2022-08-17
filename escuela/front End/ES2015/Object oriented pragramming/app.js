//Object review
let o1 = {};

let o2 = Object(); //same thing

let color = "teal";

const obj = {};
obj.color = "#3723ff"; //{color:"#3723ff"}
//obj['color']='#37233ff same thing

obj[color] = "#3723ff"; //{teal:"#3723ff"}

//method
Object.keys(obj); //{color; teal}
Object.values(obj); //{"#3723ff";"#3723ff"}
Object.entries(obj); //[["color"."#3723ff"],['teal'.'#3723ff']]

//to itirate
for (let [k, v] of Object.entries(obj)) {
  console.log(k, v); //color #3723ff  teal #3723ff
}

//methods review this is also called whenn a function is added as a value to a key

//storing functions
let ol = {};
ol.sayHi = function () {
  return "HI";
};
ol.sayHi(); //'HI'

//the function is predefined
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const myMath = {};
myMath.add = add; //myMath.add(2,2)=4
myMath.multiply = multiply; //myMath.multiply(2,3)=6

const myMath1 = { add, multiply }; //myMath.add(2,2)=4;;//myMath.multiply(2,3)=6

//inline
const myMath2 = {
  mult: function (x, y) {
    return x * y;
  },

  power: (x, y) => x ** y,

  add(x, y) {
    return x + y;
  },

  square(x) {
    return x * x;
  },
};

function getHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

function getArea(a, b) {
  return (a * b) / 2;
}

let side1 = 4;
let side2 = 3;
let = side3 = getHypotenuse(side1, side2);

//this

let triangle = {
  a: 4,
  b: 3,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

//'this' refers to the object '
