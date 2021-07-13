function fizzBuzz(input) {

    if(typeof input === 'number') {
        restThree = input % 3;
        restFive = input % 5;

        if((restThree == 0) && (restFive == 0)) {
            return 'FizzBuzz';
        } else if(restThree == 0) {
            return 'Fizz';
        } else if(restFive == 0) {
            return 'Buzz';
        } else {
            return input;
        }
    } else {
        return 'It is not a number';
    }

}

console.log(fizzBuzz('A')); // not a number
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(27)); // Fizz
console.log(fizzBuzz(17)); // 17
console.log(fizzBuzz(100)); // Buzz