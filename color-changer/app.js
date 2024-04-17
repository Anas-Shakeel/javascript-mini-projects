// Get the buttons from the DOM
const buttons = document.querySelectorAll(".button");

// Get the body
const body = document.querySelector("body");

// Add a click event listener to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Set the body's bgColor equal to button's id {hex color code}
        body.style.backgroundColor = button.id;
    });
});
