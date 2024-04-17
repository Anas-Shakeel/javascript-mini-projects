document.addEventListener("DOMContentLoaded", () => {
    // Get the div `area`
    let div_area = document.querySelector("#area");

    // Generate function
    function generate() {
        // Get the input field number
        const number = Number(document.querySelector("#number").value);
        // Must be positive AND less than 100
        if (number > 0 && number <= 30) {
            // Clear the div `#area`
            div_area.innerHTML = "";

            // Generate The bricks
            for (let i = 1; i <= number; i++) {
                // Create  bricks
                generate_bricks(i);
            }
        }
    }

    // Generate `n` bricks + line break
    function generate_bricks(n) {
        // Brick Template
        const brick = '<div class="brick"></div>';

        // Create n bricks in div_area
        for (let i = 0; i < n; i++) {
            div_area.innerHTML += brick;
        }

        // Add BR at the end
        div_area.innerHTML += "<br/>";
    }

    // Get the button and add event to it
    let button = document.querySelector("#generate-button");
    button.addEventListener("click", generate);

    // Get the radio buttons and add event
    let radios = document.querySelectorAll(".align");
    radios.forEach((radio) => {
        radio.addEventListener("click", () => {
            // console.log(radio.value);
            div_area.style.textAlign = radio.value;
        });
    });
});
