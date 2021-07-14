// Aula 02
// Template String ` `
// Interpolation in template String `text ${variable}`

let variable = 'some text';
console.log(`printing variable: ${variable}`);

// Aula 03
// Ternary / Conditional Operator
// condition ? true : false

function conditional(value) {
    return value === 0 ? 'zero' : 'not zero';
}

console.log(`1 is ${conditional(1)}`);
console.log(`0 is ${conditional(0)}`);

let value = 0;
let a = value === 0 ? 'zero' : 'not zero';
console.log(a);

value = 10;
a = value === 0 ? 'zero' : 'not zero';
console.log(a);