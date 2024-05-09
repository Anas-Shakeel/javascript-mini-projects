// Get the textarea element
const textarea = document.querySelector("#input_text");

// Get the binary element  (to display the binary)
const binary = document.querySelector("#output_text");

// Get the convert button
const convert = document.querySelector("#convert");
convert.addEventListener("click", () => {
    // Clear the binary element
    binary.innerHTML = "";

    // Convert the text to binary
    textarea.value.split(" ").forEach((word) => {
        let binary_code = text_to_bin(word);
        binary.innerHTML += binary_code + "   ";
    });
});

// Returns Binary of any text
function text_to_bin(text) {
    let binary = "";
    for (let letter of text) {
        // Convert the text to ascii, then binary
        const charcode = letter.charCodeAt(0).toString(2);
        // Pad the binary {for a proper 8-bit binary code}
        let bin = "00000000".slice(charcode.length) + charcode;
        binary += bin;
    }

    return binary.trim();
}
// Returns Ascii of any text
function text_to_ascii(text) {
    let ascii = [];
    for (let letter of text) {
        // Convert the text to ascii, then binary
        let charcode = letter.charCodeAt(0);
        ascii.push(charcode);
    }

    return ascii;
}
