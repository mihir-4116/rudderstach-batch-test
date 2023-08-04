const { getProducts, calculateTotalPrice } = require("./productsGenerator");
const {
    getRandomAge,
    getRandomState,
    getRandomCity,
    generateRandomString,
    eventNames,
} = require("./utils");

function generateDatasetForServer(size) {
    const data = [];
    const mapper = {};
    const userIds = [];

    for (let i = 0; i < size; i += 1) {
        // Generate 7-digit unique user ID
        const userId = `user-${generateRandomString(7)}`;
        const email = `email+${i}@gmail.com`;

        // Generate Identify calls
        const identifyEvent = {
            type: "identify",
            userId: userId,
            context: {
                os: {
                    token: `token-${i}`,
                },
                traits: {
                    // Add more unique traits to the identify call
                    email: `user-email+${i}@gmail.com`,
                    name: `test_user_${i}`,
                    country: "Australia",
                    app: {
                        version: "v1.0.0",
                    },
                    city: getRandomCity(),
                    age: getRandomAge(), // Random age between 14 to 65 (inclusive)
                    language: i % 3 === 0 ? "English" : "Spanish", // Alternate between English and Spanish
                    favoriteColor: generateRandomString(6), // Random 6-character string as favorite color
                    subscription: i % 5 === 0 ? "premium" : "standard", // Alternate between premium and standard subscription
                    address: {
                        street: `Street ${i}`,
                        city: getRandomCity(),
                        state: getRandomState(),
                        postalCode: `200${i}`,
                        country: "Australia",
                    },
                    education: i % 4 === 0 ? "Bachelor's Degree" : "High School Diploma", // Alternate between education levels
                    weatherCondition: i % 2 === 0 ? "Sunny" : "Rainy", // Predictive trait based on the city
                    websiteActivity: i % 6 === 0 ? "Active" : "Inactive", // Predictive trait for website activity
                    purchaseFrequency: Math.floor(Math.random() * 5) + 1, // Predictive trait for purchase frequency (1 to 5 times)
                },
            },
        };

        // Generate Track calls
        const products = getProducts(3);
        const trackEvent = {
            type: "track",
            event: eventNames[Math.floor(Math.random() * eventNames.length)],
            userId: userId,
            properties: {
                // Add any properties specific to the track call
                country: "Australia",
                email: `user-email+${i}@gmail.com`,
                campaignId: `${i}`,
                templateId: `${i}`,
                order_id: `${i}`,
                total: calculateTotalPrice(products),
                products,
            },
        };

        userIds.push(userId);
        data.push(identifyEvent, trackEvent);
        mapper[email] = { identifyEvent, trackEvent };
    }

    return { data, mapper, userIds };
}

module.exports = { generateDatasetForServer };
