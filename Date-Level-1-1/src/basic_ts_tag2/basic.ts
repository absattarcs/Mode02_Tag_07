// Create the date objects with the specified values
const date1: Date = new Date("September 2, 2019 09:00:00");
const date2: Date = new Date(0);
const date3: Date = new Date(31556908800);
const date4: Date = new Date(86400000);

// Display the dates using innerHTML
document.getElementById('date1')!.innerHTML = `Date 1:  ${date1}`;
document.getElementById('date2')!.innerHTML = `Date 2:  ${date2}`;
document.getElementById('date3')!.innerHTML = `Date 3:  ${date3}`;
document.getElementById('date4')!.innerHTML = `Date 4:  ${date4}`;
