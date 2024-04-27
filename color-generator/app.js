// Get the main element
const main_div = document.querySelector(".main");

// Get the generate button
const generate_btn = document.querySelector("#generate");

generate_btn.addEventListener("click", () => {
    // Get the input fields
    let colorspace = Number(document.querySelector("#colorspace").value);
    let coloroffset = Number(document.querySelector("#coloroffset").value);

    if (colorspace > 255) {
        document.querySelector("#colorspace").value = 255;
        colorspace = 255;
    }

    if (coloroffset > 255) {
        document.querySelector("#coloroffset").value = 255;
        coloroffset = 255;
    }

    // Clear the main-div before creating
    main_div.innerHTML = "";
    generate(colorspace, coloroffset);
});

function generate(colorspace, coloroffset) {
    // Create colors
    for (let r = 0; r < colorspace; r = r + coloroffset) {
        for (let g = 0; g < colorspace; g = g + coloroffset) {
            for (let b = 0; b < colorspace; b = b + coloroffset) {
                create_colorbox(`rgb(${r}, ${g}, ${b})`);
            }
        }
    }
}

// Creates a colorbox of `color` in main_div
function create_colorbox(color = "#fff") {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;
    box.addEventListener("click", () => {
        copy_to_clipboard(color);
    });
    main_div.appendChild(box);
}

// Converts the rgb values to hex
function rgb_to_hex(r = 255, g = 255, b = 255) {
    return `#${r.toString(16) + g.toString(16) + b.toString(16)}`;
}

// Copies the `text` into clipboard
async function copy_to_clipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.log("Error occured while copying: ", error);
    }
}

// Call generate independently upon start/refresh
generate(255, 32);
