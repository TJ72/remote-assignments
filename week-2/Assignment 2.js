// Object
/*
In JavaScript, there are many different sets of syntax for creating objects. In the code below,
function parameters are encapsulated into an object, try using at least two ways to create a
proper object as a parameter of the calculate function.
*/


function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// 1. Using object literal syntax
let args = {
    n1: 3,
    n2: 4,
    op:'+'
}

// 2. Using the "new" keyword
// a)  Using the "new" keyword with'in-built Object constructor function
let args = new Object()
args.n1 = 3;
args.n2 = 4;
args.op = '+';

// b) Using "new" with user defined constructor function
function args_(num1, num2, op) {
    this.n1 = num1;
    this.n2 = num2;
    this.op = op;
}

let args = new args_(3, 4, '+');

// 3. Using ES6 classes to create objects
class ArgGenerator {
    constructor(num1, num2, op) {
        this.n1 = num1;
        this.n2 = num2;
        this.op = op;
    }
}

let args = new argGenerator(3, 4, '+');
