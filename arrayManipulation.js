function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3;
        }
    });
}

// Example usage
const exampleArray = [1, 2, 3, 4, 5];
console.log(processArray(exampleArray));