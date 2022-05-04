// Unary Operators	Name	Meaning
// +x	Convert a value into a number
// -x	Convert a value into a number and negate it
// ++x	Operator (Prefix)	Add one to the value
// –x	Operator (Prefix)	Subtract one from the value
// x++	Operator (Postfix)	Add one to the value
// x–	Operator (Postfix)	Subtract one from the value


//test1

let x = "25";
console.log(x);
console.log(typeof (x)); // output string

console.log(x);
console.log(typeof (+x)); // output number


//test2

let person = {
    name: 'John',
    toString: function () {
        return '25';
    },
};

console.log(+person);
console.log(typeof (person));
console.log(typeof (+person));


//test3 -> 

person = {
    name: 'John',
    toString: function () {
        return '25';
    },
    valueOf: function () {
        return '30';
    },
};

console.log(+person);
console.log(typeof (person));
console.log(typeof (+person));

//test4 - change value of true and false in numbers

let f = false,
    t = true;

console.log(+t);
console.log(+f);