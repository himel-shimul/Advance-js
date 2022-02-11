const numbers = [4, 7, 5, 8, 3, 9]
output = [];
for (i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function square (element){
    return element * element;
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function(element){
    return element * element;
})

const result = numbers.map(x => x * x);

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5)

console.log(isThere);