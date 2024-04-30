// Get the container
const container = document.querySelector(".container");

// Create `count` bits in container
container.innerHTML = "";
const MAX_BITS = 912;
let bit = 0;
let bit_holder = undefined;
for (let i = 0; i < MAX_BITS; i++) {
    // Generate a random number between 0 and 1
    bit = Math.round(Math.random());

    // Create a bitholder
    bit_holder = document.createElement("span");
    bit_holder.innerHTML = bit;
    bit_holder.classList.add("bit");

    if (bit === 1) {
        bit_holder.classList.add("one");
    } else {
        bit_holder.classList.add("zero");
    }
    container.appendChild(bit_holder);
}

// Fetch the bits
const bits = container.querySelectorAll(".bit");

// Start the effect
let interval = setInterval(() => {
    bits.forEach((bit) => {
        let b = Math.round(Math.random());
        bit.innerHTML = b;
        if (b === 1) {
            bit.classList.remove("zero");
            bit.classList.add("one");
        } else {
            bit.classList.remove("one");
            bit.classList.add("zero");
        }
    });

    // Stop when reaches max scrambles
    container.addEventListener("click", () => {
        clearInterval(interval);
    });
}, 100);
