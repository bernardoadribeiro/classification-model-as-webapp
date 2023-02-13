// Send a request to api endpoint when the button 'btn-predict' is clicked.
document.getElementById('btn-predict').addEventListener('click', function(event) {
    event.preventDefault();

    const form = new FormData(event.target.form); // Read form data

    document.getElementById('result').innerHTML = 'Loading...<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>' //Show loading animation while waiting the response.

    // Send request to API to predict the product category
    fetch('/predict/product_category/', {
        method: 'POST',
        body: form
    })
    .then(response => response.json()) // Get response of the request
    .then(data => {
        document.getElementById('result').innerHTML = data.product_category; // Update the result element (result) with the response data.
    });
});