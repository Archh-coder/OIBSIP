document.getElementById("tempForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    let result = "";
    if (isNaN(temp)) {
        result = "please enter the valid number.";
    } else if (unit === "celsius") {
        // Celsius to Fahrenheit
        const fahrenheit = (temp * 9 / 5) + 32;
        result = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === "fahrenheit") {
        // Fahrenheit to Celsius
        const celsius = (temp - 32) * 5 / 9;
        result = `${temp}°F = ${celsius.toFixed(2)}°C`;
    } else if (unit === "kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;
        result = `${temp}K = ${celsius.toFixed(2)}°C, ${fahrenheit.toFixed(2)}°F`;
    }
    resultDiv.textContent = result;

})