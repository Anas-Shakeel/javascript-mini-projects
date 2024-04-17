// Get time & date element
const time_element = document.querySelector("#time");
const date_element = document.querySelector("#date");

// Set the Time
setInterval(function () {
    let datetime = new Date();
    time_element.innerHTML = datetime.toLocaleTimeString();
}, 1000);

// Set the Date {avoid setting the date every second, SAVE RESOURCES!!!}
let datetime = new Date();
date_element.innerHTML = datetime.toDateString().replace(" ", ", ");
