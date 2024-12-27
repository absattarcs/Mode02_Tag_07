// Function to generate a random number between 1 and 10
function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

// Generate a random number between 1 and 10
const randomNumber: number = generateRandomNumber();
console.log("The program has chosen a number between 1 and 10.");

// Prompt the user to guess the number
const userGuessString: string | null = window.prompt("Guess the number (between 1 and 10):");

// Convert the user's guess to a number
const userGuess: number = Number(userGuessString);

// Check if the user's guess is correct and output the result
if (userGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log(`Sorry, you guessed wrong. The correct number was ${randomNumber}.`);
}
