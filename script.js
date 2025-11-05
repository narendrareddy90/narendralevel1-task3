function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
      resultDiv.innerHTML = `
        ${temp}°C = ${fahrenheit.toFixed(2)}°F <br>
        ${temp}°C = ${kelvin.toFixed(2)}K
      `;
      break;

    case "fahrenheit":
      celsius = ((temp - 32) * 5) / 9;
      kelvin = celsius + 273.15;
      resultDiv.innerHTML = `
        ${temp}°F = ${celsius.toFixed(2)}°C <br>
        ${temp}°F = ${kelvin.toFixed(2)}K
      `;
      break;

    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      resultDiv.innerHTML = `
        ${temp}K = ${celsius.toFixed(2)}°C <br>
        ${temp}K = ${fahrenheit.toFixed(2)}°F
      `;
      break;
  }
}