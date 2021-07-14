
// Exercises
function fizzBuzz(input) {
    if(typeof input === 'number') {
        restThree = input % 3;
        restFive = input % 5;

        if((restThree === 0) && (restFive === 0)) {
            return 'FizzBuzz';
        } else if(restThree === 0) {
            return 'Fizz';
        } else if(restFive === 0) {
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


function reverseString(str) {
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
        console.log(reverse);
    }
}
reverseString('Hello World!');


function celsius2Fahrenheit(value) {
    return (value * 9 / 5) + 32;
}
console.log(celsius2Fahrenheit(0));
console.log(celsius2Fahrenheit(10));
console.log(celsius2Fahrenheit(100));


const listContainer = document.querySelector('[data-lists]');
const listForm = document.querySelector('[data-new-list-form]');
const listInput = document.querySelector('[data-new-list-input]');

let todos = []

function clearList() {
    while(listContainer.hasChildNodes()) {
        listContainer.removeChild(listContainer.firstChild)
    }
}

function renderList() {
    clearList();
    todos.forEach(function(item) {
        const el = document.createElement('li')
        el.classList.add('item')
        el.id = item.id
        el.innerText = item.value
        listContainer.appendChild(el)
    })
}

function createItem(item) {
    return {'id': Date.now(), 'value': item}
}

listForm.addEventListener('submit', function(e) {
    e.preventDefault();
    listInputValue = listInput.value;

    if(listInputValue === null || listInputValue === '' ) return

    todos.push(createItem(listInputValue));
    console.log(todos);

    listInput.value = null;

    renderList();
})

