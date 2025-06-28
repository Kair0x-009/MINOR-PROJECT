//function for viewing product details
function viewDetails(productId) {
    // Fetch product details from the API
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
        // Create a container for the product details
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = `
            <div class="productDetails">
            <img src="${product.images[0]}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating}</p>
            <p>Stock: ${product.stock}</p>
            <p>Discount: ${product.discountPercentage}%</p>
            <p>Description: ${product.description}</p>
            <p>Category: ${product.category}</p>
            <p>Brand: ${product.brand}</p>
            <p>Warranty: ${product.warrantyInformation}</p>
            <p>shipping: ${product.shippingInformation}</p>
            <p>Return Policy: ${product.returnPolicy}</p>

            </div>
        `;
        })
        .catch(error => {
        console.error('Error fetching product details:', error);
        });
    }