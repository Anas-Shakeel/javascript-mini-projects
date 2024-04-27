// Letters to include in the effect
const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// animate
let animate = true;

// Get the text element
const text_element = document.querySelector(".text");
let text = text_element.innerHTML;

// Hacker effect
text_element.addEventListener("mouseover", (event) => {
    if (animate) {
        animate = false;
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerHTML = event.target.innerHTML
                .split("")
                .map((_letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                })
                .join("");

            if (iterations > text.length) {
                animate = true;
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    }
});

// Get the color picker
const colorpicker = document.querySelector("#colorpicker");
colorpicker.addEventListener("input", () => {
    const color = hextohsl(colorpicker.value);
    console.log(colorpicker.value, color);
    const root = document.documentElement;
    root.style.setProperty("--hue", color["h"]);
    root.style.setProperty("--sat", `${color["s"]}%`);
});

// Converts hex to hsl [first convert hex to RGB then RGB to HSL]
function hextohsl(hex) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);

    // Convert hex to RGB
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Convert RGB to HSL
    const rRatio = r / 255;
    const gRatio = g / 255;
    const bRatio = b / 255;

    const cMax = Math.max(rRatio, gRatio, bRatio);
    const cMin = Math.min(rRatio, gRatio, bRatio);
    const delta = cMax - cMin;

    let hue = 0;
    if (delta === 0) {
        hue = 0;
    } else if (cMax === rRatio) {
        hue = ((gRatio - bRatio) / delta) % 6;
    } else if (cMax === gRatio) {
        hue = (bRatio - rRatio) / delta + 2;
    } else {
        hue = (rRatio - gRatio) / delta + 4;
    }

    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;

    const lightness = (cMax + cMin) / 2;
    const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

    return {
        h: hue,
        s: saturation * 100,
        l: lightness * 100,
    };
}
