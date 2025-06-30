//function for viewing product details
const detailsContainer = document.getElementById('detailsContainer');

    // Fetch product details from the API
    async function viewDetails(productId) {
    try{
    let response = await fetch(`https://dummyjson.com/products/${productId}`);
    let product = await response.json();
    Details(product);
    }catch(error){
        console.error('Error fetching product details:', error);
        detailsContainer.innerHTML = `<p>Failed to fetch product details. Try again later.</p>`;
    }
}

        // Create a container for the product details
        function Details(product) {
        detailsContainer.innerHTML = `
            <div class="product-Details">
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
            <button class="closeDetails" onclick="closeDetails()">Close</button>
            </div>
        `;
        }

        //close view details
        function closeDetails() {
            detailsContainer.innerHTML = '';
        }
        