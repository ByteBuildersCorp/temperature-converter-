    document.getElementById('convert-button').addEventListener('click', function() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result;

    if (type === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        result = (degrees - 32) * 5 / 9;
    } else {
        // Convert Celsius to Fahrenheit
        result = (degrees * 9 / 5) + 32;
    }

    document.getElementById('result').value = result.toFixed(4) + ' °' + (type === 'fahrenheit' ? 'C' : 'F');
});