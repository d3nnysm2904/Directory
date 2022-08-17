// function Triangle(a, b) {
//     (this.a = a), (this.b = b);
//   }

//   Triangle.prototype.getArea = function () {
//     return (this.a * this.b) / 2;
//   };

//   Triangle.prototype.getHypotenuse = function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   };

//instead of doing whats up there we do this

class Triangle1 {
  getArea() {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  display() {
    console.log(`I am a triangle with sides ${a},${b} and ${c}. `);
  }
}

//simple

class Triangle {
  greet() {
    console.log("Hello i am triangle");
  }
  display() {
    console.log(`Triangle wiht side of ${this.a} and ${this.b}`);
  }
}

const firstTry = new Triangle();

firstTry.a = 4;
firstTry.b = 3;
//firstTry.greet() = "Hello i am triangle"

//adding constructors
//Number.isFinite gives u wether is a number or not; a bolloean expresion
class Sum {
  constructor(a, b) {
    // if (!Number.isFinite(a) || a <= 0) {
    //   throw new Error("Number has to be biger than 0");
    // }
    // if (!Number.isFinite(b) || b <= 0) {
    //   throw new Error("Number has to be biger than 0");
    // }

    for (let num of [a, b]) {
      if (!Number.isFinite(num) || num <= 0) {
        throw new Error("Has to be a number greater than 0");
      }
    }
    this.a = a;
    this.b = b;
    //we dont return values in constructor
  }
  //this are the instance methods
  //Adding methods
  add() {
    return this.a + this.b;
  }
  mult() {
    return this.a * this.b;
  }
  avrg() {
    const { a, b } = this;
    return (a + b) / 2;
  }
  isBig() {
    return this.add() > 0; //this is a boolean that return true when bigger than 0 adn false when smaller than 0
  }
  display() {
    return "hello i am a instance method";
  }
}

const math1 = new Sum(4, 2);
// //math1.add() =6
//const math2 = new Sum(88, -7); //throws an error

//this creates a copie of Sum into NewSum
class NewSum extends Sum {
  constructor(a, b) {
    for (let num of [a, b]) {
      if (!Number.isFinite(num) || num <= 0) {
        throw new Error("Number has to be biger than 0");
      }
    }

    super(a, b);
    this.sum = a; //creates another key with the name 'sum' that is equal to the value of 'a'
  }
  display() {
    return "How are u" + " " + super.display();
  }
}

const newSum1 = new NewSum(9, 9);
