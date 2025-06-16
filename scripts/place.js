const yearSpan = document.createElement("span");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.createElement("span");
modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
const tempCelsius = 22; 
const windSpeedKmh = 10; 

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
  const windChillSpan = document.getElementById("windchill");

  // Check if conditions are right to calculate wind chill
  if (tempCelsius <= 10 && windSpeedKmh > 4.8) {
        const chill = calculateWindChill(tempCelsius, windSpeedKmh);
        windChillSpan.textContent = `${chill} °C`;
  } else {
        windChillSpan.textContent = "N/A";
  }
}

// Run when the page loads
displayWindChill();