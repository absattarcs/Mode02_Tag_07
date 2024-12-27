// Function random number specified range
function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random between 1 and 12 for salesMonth
const salesMonth: number = generateRandomNumber(1, 12);
let quarter: string;

console.log(`Sales Month: ${salesMonth}`);

//Quarter based on salesMonth using switch-case
switch (salesMonth) {
    case 1:
    case 2:
    case 3:
        quarter = '1. Quartal';
        break;
    case 4:
    case 5:
    case 6:
        quarter = '2. Quartal';
        break;
    case 7:
    case 8:
    case 9:
        quarter = '3. Quartal';
        break;
    case 10:
    case 11:
    case 12:
        quarter = '4. Quartal';
        break;
    default:
        quarter = 'Invalid month';
}

console.log(`Quarter: ${quarter}`);

// Generate a random number between 1000 and 10000 for totalSales
const totalSales: number = generateRandomNumber(1000, 10000);
let salesEvaluation: string;

console.log(`Total Sales: ${totalSales}`);

//sales evaluation based on totalSales using switch-case
switch (true) {
    case (totalSales >= 1000 && totalSales <= 2500):
        salesEvaluation = 'schlecht';
        break;
    case (totalSales >= 2501 && totalSales <= 5000):
        salesEvaluation = 'mittelmäßig';
        break;
    case (totalSales >= 5001 && totalSales <= 7500):
        salesEvaluation = 'hoch';
        break;
    case (totalSales >= 7501 && totalSales <= 10000):
        salesEvaluation = 'unglaublich';
        break;
    default:
        salesEvaluation = 'Invalid sales amount';
}

console.log(`Sales Evaluation: ${salesEvaluation}`);
