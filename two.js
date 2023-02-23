// Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below

//Version 1
// days.forEach(day => {
//     const dayAbbreviation = day.slice(0,2);
//     dayAbbreviations.push(dayAbbreviation);
// })

days.forEach(day => {dayAbbreviations.push(day.slice(0,2));})