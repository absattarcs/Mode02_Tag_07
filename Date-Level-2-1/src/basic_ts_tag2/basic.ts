// Function to format date with leading zeros
function formatWithLeadingZeros(value: number): string {
    return value < 10 ? '0' + value : value.toString();
}

// Get the current date
const currentDate: Date = new Date();
const day: number = currentDate.getDate();
const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const year: number = currentDate.getFullYear();

// Format the date as tt-mm-jjjj
const dateDash: string = `${formatWithLeadingZeros(day)}-${formatWithLeadingZeros(month)}-${year}`;
document.getElementById('date-dash')!.innerHTML = `${dateDash}`;

// Format the date as tt/mm/jjjj
const dateSlash: string = `${formatWithLeadingZeros(day)}/${formatWithLeadingZeros(month)}/${year}`;
document.getElementById('date-slash')!.innerHTML = `${dateSlash}`;

// Get the current time in local format
const localTime: string = currentDate.toLocaleTimeString();
document.getElementById('time-local')!.innerHTML = `${localTime}`;

// Get the current time in UTC format
const utcTime: string = currentDate.toUTCString().split(' ')[4]; // Extract the time part
document.getElementById('time-utc')!.innerHTML = `${utcTime}`;
