/*
paletteS = Get the color palette boxes

UPON randomize click:
    For each palette in the paletteS:
        generate a random color
        convert it's rgb into hex
        Set the color of palette to hex
        Set the title of the palette to hex
        Set the copy event to the palette


*/

// Get the palettes
const palettes = document.querySelectorAll(".palette");

// Get the randomize button
const randomize_btn = document.querySelector(".randomize-btn");

randomize_btn.addEventListener("click", () => {
    randomize();
});

function randomize() {
    palettes.forEach((palette) => {
        // Generate a random color
        const color = get_random_color();

        // Convert it's rgb to hex
        const hexcode = rgb_to_hex(color.r, color.g, color.b);

        // Set the color and title to color and title
        palette.querySelector(".color").style.backgroundColor = hexcode;
        palette.querySelector(".hexcode").innerHTML = hexcode.toUpperCase();

        // Set the copy color event
        palette.querySelector(".color-title").addEventListener("click", (event) => {
            // Copy the hexcode to clipboard
            copy_hexcode(event.target.innerText);
        });
    });
}

function get_random_color() {
    let r = random_int_inrange(0, 255);
    let g = random_int_inrange(0, 255);
    let b = random_int_inrange(0, 255);

    return { r, g, b };
}

// Returns a random number between set range
function random_int_inrange(from, limit) {
    return Math.floor(Math.random() * (limit - from + 1)) + from;
}

function rgb_to_hex(r, g, b) {
    // Convert RGB to HEX Code using Bitwise shifting
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function copy_hexcode(hexcode) {
    try {
        navigator.clipboard.writeText(hexcode);
    } catch (error) {
        console.log("Error occured while copying hex:", error);
    }
}

// Randomize the palettes at startup
randomize();
