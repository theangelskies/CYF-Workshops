

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;



// Before running code, answer the following - write down your answers:
// Fri 29 Sep 21:49

// a) how many function calls are there in this file?
// There are 2 function calls in this file: slice is called 2 times.

// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
// macTimeDisplay will evaluate to "Fri 29 Sep 21:49". The slice method is used to extract the first three characters from the day and month strings, resulting in "Fri" and "Sep". The template literal then combines these sliced values with the date and time to form the final string.

//Run the code!
console.log(macTimeDisplay);

// Fri 29 Sep 21:49
