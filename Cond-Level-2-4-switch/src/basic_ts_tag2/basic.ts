function getRandomSchoolGrade(): number {
    return Math.floor(Math.random() * 10) + 1;
}

const schoolGrade: number = getRandomSchoolGrade();

console.log(`School Grade: ${schoolGrade}`);

switch (schoolGrade) {
    case 1:
        console.log('sehr gut');
        break;
    case 2:
        console.log('gut');
        break;
    case 3:
        console.log('befriedigend');
        break;
    case 4:
        console.log('ausreichend');
        break;
    case 5:
        console.log('mangelhaft');
        break;
    case 6:
        console.log('ungenügend');
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Das ist keine gültige Schulnote.');
        break;
    default:
        console.log('Unexpected value.');
}
