function addToMarket(productName) {
    fetch('/market', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: productName }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Product added to market successfully!');
        } else {
            alert('Failed to add product to market: ' + data.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
