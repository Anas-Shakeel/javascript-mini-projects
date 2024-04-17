// document.addEventListener("")

// After DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the playground div
    let playground = document.querySelector("#playground");

    // Generate function
    function generate() {
        // Clear the playground first
        playground.innerHTML = "";

        //  Get the `rows` and `columns` values
        const rows = Number(document.querySelector("#rows").value);
        const columns = Number(document.querySelector("#columns").value);

        // Set the textAlign to `alignment` value
        playground.style.textAlign = document.querySelector("#align-dd").value;

        // Generate bricks
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                create_bricks(1);
            }
            create_br(playground);
        }

        // Set the size & shape according to the slider values
        // Get the bricks and change the size & shape of each
        let size = `${document.querySelector("#size-slider").value}px`;
        let shape = `${document.querySelector("#shape-slider").value}%`;
        document.querySelectorAll(".brick").forEach((brick) => {
            brick.style.width = size;
            brick.style.height = size;
            brick.style.borderRadius = shape;
        });
    }

    // Creates n bricks
    function create_bricks(n) {
        // Brick template
        const BRICK = '<div class="brick"></div>';

        // Loop n times
        for (let i = 0; i < n; i++) {
            // Create a brick in `playground`
            playground.innerHTML += BRICK;
        }
    }

    // Creates br
    function create_br(element) {
        element.innerHTML += "<br/>";
    }

    // Get the Button
    const generate_button = document.querySelector("#generate-button");
    generate_button.addEventListener("click", generate);

    // Get the alignment Dropdown
    const alignment_dropdown = document.querySelector("#align-dd");
    alignment_dropdown.addEventListener("change", () => {
        playground.style.textAlign = alignment_dropdown.value;
    });

    // Get the size slider
    const size_slider = document.querySelector("#size-slider");
    // Add event to handle the resizing
    size_slider.addEventListener("input", () => {
        let val = "";
        if (size_slider.value == 0) {
            val = `${0.5}px`;
        } else {
            val = `${size_slider.value}px`;
        }

        // Get the bricks and change the size of each
        document.querySelectorAll(".brick").forEach((brick) => {
            brick.style.width = val;
            brick.style.height = val;
        });
    });

    // Get the shape slider
    const shape_slider = document.querySelector("#shape-slider");
    // Add event to handle the shape changing
    shape_slider.addEventListener("input", () => {
        let val = `${shape_slider.value}%`;

        document.querySelectorAll(".brick").forEach((brick) => {
            brick.style.borderRadius = val;
        });
    });

    // Hide the clicked brick
    playground.addEventListener("click", (event) => {
        const element = event.target;
        if (element.className === "brick") {
            element.className = "brick hidden";
        } else if (element.className === "brick hidden") {
            element.className = "brick";
        }
    });

    // Get the Show-hidden button
    const show_all_button = document.querySelector("#show-all-button");
    show_all_button.addEventListener("click", () => {
        // Get all bricks and set class to just `brick`
        document.querySelectorAll(".hidden").forEach((brick) => {
            brick.className = "brick";
        });
    });

    // Get the Hide-All button
    const hide_all_button = document.querySelector("#hide-all-button");
    hide_all_button.addEventListener("click", () => {
        // Get all the bricks and hide them
        document.querySelectorAll(".brick").forEach((brick) => {
            brick.className = "brick hidden";
        });
    });

    // Get the Invert button & Invert the bricks
    const invert_button = document.querySelector("#invert-button");
    invert_button.addEventListener("click", () => {
        // Get all the bricks
        document.querySelectorAll(".brick").forEach((brick) => {
            // Invert the brick (hide if visible & vice versa)
            if (brick.className === "brick") {
                brick.className = "brick hidden";
            } else if (brick.className === "brick hidden") {
                brick.className = "brick";
            }
        });
    });
});
