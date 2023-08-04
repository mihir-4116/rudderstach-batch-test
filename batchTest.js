const axios = require('axios');
const jsonSize = require('json-size');
const { generateDatasetForServer } = require('./generateData');

async function sendBatch(data, apiUrl, sourceWriteKey) {
    const payload = { batch: data };
    console.log('Request Size', jsonSize(payload) / 1000000);
    try {
        const response = await axios.post(apiUrl, payload, {
            auth: {
                username: sourceWriteKey,
                password: '',
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            console.log('Batch sent successfully', JSON.stringify(response));
        } else {
            console.log('Failed to send batch:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending batch:', error);
    }
}

// Retrieve apiUrl, sourceWriteKey, and batchSize from command-line arguments
const args = process.argv.slice(3);
const sourceWriteKey = args[0];
const dataPlaneUrl = args[1];
const batchSize = parseInt(args[2]) || 1000;
const batchUrl = `${dataPlaneUrl}/v1/batch`;

// Generate the data using the specified batch size
const { data: serverData } = generateDatasetForServer(batchSize);

// Call the sendBatch function with the generated data and other inputs
sendBatch(serverData, batchUrl, sourceWriteKey);
