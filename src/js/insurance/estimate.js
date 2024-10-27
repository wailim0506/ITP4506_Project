document.getElementById('estimateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const model = document.getElementById('carModel').value;
    const year = document.getElementById('year').value;
    const mileage = document.getElementById('mileage').value;
    const condition = document.getElementById('condition').value;
    const insurance = document.getElementById('insurance').value;

    // Base price estimation logic
    let basePrice = 20000;
    if (condition === 'good') basePrice -= 3000;
    if (condition === 'fair') basePrice -= 6000;
    if (condition === 'poor') basePrice -= 10000;

    const mileageDeduction = mileage * 0.1;
    let estimate = basePrice - mileageDeduction;

    // Adjust estimate based on insurance plan
    if (insurance === 'comprehensive') {
        estimate += 12000;
    } else if (insurance === 'thirdParty') {
        estimate -= 2000;
    }

    document.getElementById('result').innerText = `Estimated Value of ${model} (${year} years): $${estimate.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
});