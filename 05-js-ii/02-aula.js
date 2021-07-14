// 02
// Template String ` `
// Interpolation in template String `text ${variable}`

let variable = 'some text';
console.log(`printing variable: ${variable}`);

// 03
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

// 04
// Arrow Functions
// argument => one line
// (arguments) => { more than one }

let media = (n1, n2) => (n1 + n2) / 2;
console.log(media(10, 9));

let mediaStatus = (n1, n2) => {
    let a = (n1 + n2) / 2;
    return a >= 7 ? 'aprovado' : 'reprovado';
};
console.log(mediaStatus(10, 9));
console.log(mediaStatus(0, 1));

// 05
// Spread ...object/array
// map, filter, reduce
let numeros = [];
for(let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log(numeros);
// usa spread para adicionar novos elementos ao array
numeros = [...numeros, 10, 11];
console.log(numeros);

// map => aplicar uma função em todos elementos
console.log(numeros.map(value => value * value));

// filter => filtrar elementos usando retorno de uma função
console.log(numeros.filter(value => value % 3 == 0));

// reduce
console.log(numeros.reduce((previous, current) => previous + current));
