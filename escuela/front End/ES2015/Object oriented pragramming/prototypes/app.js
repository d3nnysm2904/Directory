//array.prototype
//set.prototype

Array.prototype.push = function (val) {
  console.log(`so u want to add ${val} ??`);
}; //so this changed the push method in console

const num = [1, 2, 3];

num.push(9); //so u want to add 9 ??

//this is not reccomnended to do , is mostly for polyfills

//polyfills is there is a newer method and there is not spport for the browser u just use prototype

// function Triangle(a, b) {
//   (this.a = a),
//     (this.b = b),
//     (this.getArea = function () {
//       return (this.a * this.b) / 2;
//     }),
//     (this.getHypotenuse = function () {
//       return Math.sqrt(this.a ** 2 + this.b ** 2);
//     });
// }

function Triangle(a, b) {
  (this.a = a), (this.b = b);
}

Triangle.prototype.getArea = function () {
  return (this.a * this.b) / 2;
};

Triangle.prototype.getHypotenuse = function () {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
};
//this add a mhetod in the console , the browser
