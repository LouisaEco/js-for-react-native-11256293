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

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Example usage
const numbers = [10, 21, 35, 46, 59];
const processedNumbers = processArray(numbers); 
const strings = ["hello", "world", "this", "is", "test"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

const originalNames = ["Louisa", "Raynard", "Seyram", "Eli", "Xorlali"];
const modifiedNames = ["LOUISA", "raynard", "SEYRAM", "eli", "Xorlali"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(processedNumbers); 
console.log(formattedStrings); // Output: ['hello', 'WORLD', 'this', 'IS', 'test']
console.log(userProfiles);