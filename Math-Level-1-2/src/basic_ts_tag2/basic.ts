// Function to round a number using Math.round()
function roundNumber(num: number): number {
    return Math.round(num);
}

// Example numbers to round
const num1: number = 4.7;
const num2: number = 3.3;
const num3: number = 5.5;

// Round the numbers and log the results
console.log(`Rounded value of ${num1} is ${roundNumber(num1)}`);
console.log(`Rounded value of ${num2} is ${roundNumber(num2)}`);
console.log(`Rounded value of ${num3} is ${roundNumber(num3)}`);
