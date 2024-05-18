function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3;
        }
    });
}

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage
const numbers = [10, 21, 35, 46, 59];
const processedNumbers = processArray(numbers); // [3, 4, 9, 16, 15]
const strings = ["hello", "world", "this", "is", "test"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
console.log(formattedStrings); 
