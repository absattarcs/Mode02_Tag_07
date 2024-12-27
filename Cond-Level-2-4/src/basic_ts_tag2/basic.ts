//with if/else condition finding greater number 
console.log("Finding greater number with if and else");
function generateRandomNumber(min: number, max: number): number { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  const number1: number = generateRandomNumber(1, 77); 
  const number2: number = generateRandomNumber(1, 77);
   console.log(`Number 1: ${number1}`);
    console.log(`Number 2: ${number2}`); 
    if (number1 === number2) { 
        console.log('Was für ein Zufall');
     } 
     else if (number1 > number2) {
         console.log('Erste Zahl größer');
         } 
         else {
             console.log('Zweite Zahl größer');
             }


             console.log("Finding greater number wiht switch case");
             //same value with switch cases finding greater numebr
             function findingGreatNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nummer1: number = findingGreatNumber(1, 77);
const nummer2: number = findingGreatNumber(1, 77);

console.log(`Number 1: ${nummer1}`);
console.log(`Number 2: ${nummer2}`);

switch (true) {
    case nummer1 === nummer2:
        console.log('Was für ein Zufall');
        break;
    case nummer1 > nummer2:
        console.log('Erste Zahl größer');
        break;
    case nummer1 < nummer2:
        console.log('Zweite Zahl größer');
        break;
    default:
        console.log('Unexpected condition');
}
