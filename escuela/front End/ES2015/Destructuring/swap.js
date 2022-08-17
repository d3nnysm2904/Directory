//**************************************
// SWAPPING VARIABLES USING DESTRUCTURING
// **************************************

let delicious = 'Mayonnaise'; //THIS IS WRONG! MAYO IS NASTY!
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [ delicious, disgusting ];
// [ disgusting, delicious ] = both;

// Swaps the variables in one line!
[ disgusting, delicious ] = [ delicious, disgusting ];
