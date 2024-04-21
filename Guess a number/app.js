// Default number of guesses player could make!
const DEFAULT_GUESS_LIMIT = 10;

// Get the previous & remaining guesses containers
const pre_guesses = document.querySelector("#pre-guesses-container");
const rem_guesses = document.querySelector("#rem-guesses");

// Get the input fields
const guess_input = document.querySelector("#guess-input");
const submit_button = document.querySelector("#submit");

// Get the messagebox
const message_box = document.querySelector("#message");

// Get the main div
const main_div = document.querySelector(".main");

// Displays a `message` for `duration` seconds, then hides it!
function message_popup(message = "This is a message", status = "normal") {
    // Do the following, only if messagebox is hidden
    if (message_box.classList.contains("hide")) {
        // Show the message-box
        message_box.classList.remove("hide");
    }

    // ? Remove all the classes first
    message_box.classList.remove("normal");
    message_box.classList.remove("success");
    message_box.classList.remove("danger");
    message_box.classList.remove("error");

    // Set the status class
    message_box.classList.add(status);
    // Set the message
    message_box.innerHTML = message;
}

function hide_message() {
    message_box.classList.add("hide");
}

// This methods checks the guess! returns 1, 0, -1 {greater, equal, lesser}
function check_guess(guess, number) {
    if (guess > number) {
        return 1;
    } else if (guess < number) {
        return -1;
    } else {
        return 0;
    }
}

// This method validates a guess
function validate_guess(guess) {
    if (isNaN(guess) || guess > 100 || guess <= 0) {
        return false;
    }

    return true;
}

function reset_pre_guesses() {
    // Clear the previous guesses
    pre_guesses.innerHTML = "";
}

function add_pre_guess(guess, status) {
    // Add a guess in previous guesses
    let span = document.createElement("span");
    span.classList.add("guess-box");
    span.classList.add(status);
    span.innerHTML = guess;

    pre_guesses.appendChild(span);
}

function reset_rem_guesses() {
    rem_guesses.innerHTML = DEFAULT_GUESS_LIMIT;
}

function subtract_rem_guesses() {
    rem_guesses.innerHTML = Number(rem_guesses.innerHTML) - 1;
}

function reset_guess_input() {
    guess_input.value = "";
}

function end_game() {
    // Disable the fields
    reset_guess_input();
    submit_button.setAttribute("disabled", "true");
    guess_input.setAttribute("disabled", "true");
}

// Entry point of the game
function start_game() {
    // Reset the previous guesses
    reset_pre_guesses();
    // Reset the remaining guesses
    reset_rem_guesses();
    // Reset the input
    reset_guess_input();

    // Generate a random number between 1 and 100
    const RANDOM_NUMBER = Math.floor(Math.random() * 100 + 1);

    // Current Guess number
    let guess_number = 1;

    // Add event handler to submit-btn
    submit_button.addEventListener("click", () => {
        if (guess_number >= DEFAULT_GUESS_LIMIT) {
            // Maxed Out! No more guesses, End the game
            subtract_rem_guesses();
            end_game();
            message_popup("You Lost!", "error");
            return;
        }
        // Get the guess from guess-input
        let guess = Number(guess_input.value);

        // Check if guess is valid
        if (validate_guess(guess)) {
            const check_val = check_guess(guess, RANDOM_NUMBER);
            if (check_val === 0) {
                // Guess is correct
                add_pre_guess(guess, "success");
                message_popup(`${RANDOM_NUMBER} Indeed`, "success");
                end_game();
            } else {
                // Guess is incorrect
                if (check_val === 1) {
                    // guess is greater
                    message_popup("Too High!", "danger");
                } else {
                    // guess is lesser
                    message_popup("Too Low!", "danger");
                }

                // Do the stuff upon incorrect guess
                reset_guess_input();
                add_pre_guess(guess, "error");
                subtract_rem_guesses();

                // Increment Guess number
                guess_number++;
            }
        } else {
            message_popup(`Invalid Guess! ${guess}`, "error");
            reset_guess_input();
        }
    });
}

// Load the game
start_game();
