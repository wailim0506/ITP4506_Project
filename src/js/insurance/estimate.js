document.getElementById('estimateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const model = document.getElementById('carModel').value;
    const year = document.getElementById('year').value;
    const mileage = document.getElementById('mileage').value;
    const condition = document.getElementById('condition').value;
    const insurance = document.getElementById('insurance').value;

    // Base price estimation logic
    let basePrice = 20000; // Base price for new car
    if (condition === 'good') basePrice -= 3000;
    if (condition === 'fair') basePrice -= 6000;
    if (condition === 'poor') basePrice -= 10000;

    const mileageDeduction = mileage * 0.1; // Deduct value based on mileage
    let estimate = basePrice - mileageDeduction;

    // Adjust estimate based on insurance plan
    if (insurance === 'comprehensive') {
        estimate += 2000; // Add value for comprehensive coverage
    } else if (insurance === 'thirdParty') {
        estimate -= 1000; // Deduct value for third-party coverage
    }

    document.getElementById('result').innerText = `Estimated Value of ${model} (${year} years): $${estimate.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
});