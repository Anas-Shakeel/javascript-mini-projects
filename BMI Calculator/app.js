// Get the form which holds all the input fields
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the height and weight values
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);

    // Get the results element
    const results = document.querySelector("#results");

    // Get the BMI-text element
    const BMI_text = document.querySelector("#BMI");

    // Clear the existing Text from results
    results.innerHTML = "";

    // Input Validation
    if (!height || !weight || height < 0 || weight < 0 || isNaN(height) || isNaN(weight)) {
        results.innerHTML = "Please enter valid values.";
        results.className = "results error";
    } else {
        // Calcultate the BMI
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        // Check the BMI & print accordingly
        if (BMI < 18.6) {
            // Underweight
            results.innerHTML = "Underweight";
            results.className = "results danger";
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            // Normal
            results.innerHTML += "Normal";
            results.className = "results normal";
        } else if (BMI > 24.9) {
            // Overweight
            results.innerHTML += "Overweight";
            results.className = "results danger";
        } else {
            // Unknown ;)
            results.innerHTML += "Unknown BMI";
            results.className = "results error";
        }

        BMI_text.innerHTML = BMI;
    }
});
