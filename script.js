function volume_sphere(event) {
    event.preventDefault(); // Prevent the default form submission

    let r = parseFloat(document.getElementById("radius").value);

    // Validate the input
    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid radius (positive number).");
        document.getElementById("volume").value = "NaN"; // Display NaN in the output field
        return;
    }

    // Calculate the volume
    let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Display the volume rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}