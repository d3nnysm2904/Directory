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

//constructor function

function Triangle(a, b) {
  (this.a = a),
    (this.b = b),
    (this.getArea = function () {
      return (this.a * this.b) / 2;
    }),
    (this.getHypotenuse = function () {
      return Math.sqrt(this.a ** 2 + this.b ** 2);
    });
}
//this is not an object , stil is a function so we do

const t1 = new Triangle(4, 3); //a:4,b:3

//'new' keyword
//when u call 'new ' in an function it creates a blank object {}  in the function and then in this object
//example  const t1
let t1Example = {
  a: 4,
  b: 3,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};
