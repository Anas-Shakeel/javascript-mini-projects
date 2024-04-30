// Returns a random color {hexcode of it}
function random_color() {
    const HEX_CHARS = "0123456789abcdef";

    let hex_code = "#";
    for (let i = 0; i < 6; i++) {
        hex_code += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
    }

    return hex_code;
}

function create_p(text) {
    let p = document.createElement("p");
    p.classList.add("text");
    p.innerHTML = text;
    return p;
}

const container = document.querySelector(".text-container");

// Get the text inside the contaienr
const text = container.querySelector(".text").innerHTML.trim();
const default_text_color = container.querySelector(".text").style.color;

// Clear the container
container.innerHTML = "";

// Populate it again with the text's words
let word_element = undefined;
text.split(" ").forEach((word) => {
    if (word !== "") {
        word_element = create_p(word.trim());

        // Add the hover effect event
        word_element.addEventListener("mouseover", (event) => {
            // Set a random color for the current word
            event.target.style.color = random_color();

            // Reset the color
            setTimeout(() => {
                event.target.style.color = default_text_color;
            }, 1000);
        });

        container.appendChild(word_element);
    }
});
