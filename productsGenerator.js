const { v4: uuidv4 } = require('uuid');
const { generateRandomString } = require('./utils');

function getProducts(numberOfProducts) {
    // Generate random products
    const products = [];
    // Random product details
    const skus = ['SKU001', 'SKU002', 'SKU003', 'SKU004', 'SKU005'];
    const names = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'];
    const brands = ['BrandX', 'BrandY', 'BrandZ', 'BrandA', 'BrandB'];
    const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
    const availabilityOptions = ['In Stock', 'Out of Stock', 'Preorder'];

    for (let i = 0; i < numberOfProducts; i++) {
        // Generate a random UUID as the product_id
        const id = uuidv4();
        const sku = skus[Math.floor(Math.random() * skus.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        const price = Math.random() * 1000; // Random price between 0 and 1000
        const quantity = Math.floor(Math.random() * 100); // Random quantity between 0 and 100
        const position = Math.floor(Math.random() * 100); // Random position between 0 and 100
        const category = categories[Math.floor(Math.random() * categories.length)];
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const url = `https://example.com/products/${id}`;
        const imageUrl = `https://example.com/products/${id}.jpg`;
        const rating = Math.random() * 5; // Random rating between 0 and 5
        const discount = Math.random() * 50; // Random discount between 0 and 50
        const currency = currencies[Math.floor(Math.random() * currencies.length)];
        const availability = availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)];

        // Additional product attributes (customized based on your use case)
        const weight = Math.random() * 5; // Random weight between 0 and 5 kg
        const color = generateRandomString(6); // Random 6-character string representing product color

        // Add the product object to the array
        products.push({
            product_id: id,
            sku,
            name,
            price,
            quantity,
            position,
            category,
            brand,
            url,
            image_url: imageUrl,
            rating,
            discount,
            currency,
            availability,
            weight,
            color,
        });
    }

    // Return the generated products
    return products;
}

module.exports = getProducts;


function calculateTotalPrice(products) {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice += product.price;
    }
    return totalPrice.toFixed(2);
}


module.exports = { getProducts, calculateTotalPrice };
