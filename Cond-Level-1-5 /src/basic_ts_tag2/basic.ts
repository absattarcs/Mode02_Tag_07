

function getWeekday(): void {
    //enter a number from 1 to 7
    const input: string | null = window.prompt("Please insert a number from 1 to 7");

    // Convert input to number
    const weekdayAsNumber: number = Number(input);

    // Variable weekday string
    let weekdayAsString: string;

    // Switch weekday based on the number
    switch (weekdayAsNumber) {
        case 1:
            weekdayAsString = 'Montag';
            break;
        case 2:
            weekdayAsString = 'Dienstag';
            break;
        case 3:
            weekdayAsString = 'Mittwoch';
            break;
        case 4:
            weekdayAsString = 'Donnerstag';
            break;
        case 5:
            weekdayAsString = 'Freitag';
            break;
        case 6:
            weekdayAsString = 'Samstag';
            break;
        case 7:
            weekdayAsString = 'Sonntag';
            break;
        default:
            console.error("Weekday must be between 1 and 7");
            return;
    }

    //weekday string to the console
    console.log(weekdayAsString);
}

//display the weekday
getWeekday();
