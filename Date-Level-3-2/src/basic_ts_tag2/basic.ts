import { format, differenceInYears, differenceInHours, differenceInSeconds } from 'date-fns';



const startDate = new Date('1970-01-01');
const now = new Date();


console.log('Unterschied in Jahren:', differenceInYears(now, startDate));
console.log('Unterschied in Stunden:', differenceInHours(now, startDate));
console.log('Unterschied in Sekunden:', differenceInSeconds(now, startDate));


const myBirthday = new Date('1990-12-20T12:40:00');


const currentAge = differenceInYears(now, myBirthday);
console.log('Mein aktuelles Alter:', currentAge);


const dateInPast = new Date('2007-04-07');
const ageIn2007 = differenceInYears(dateInPast, myBirthday);
console.log('Mein Alter am 07.04.2007:', ageIn2007);


