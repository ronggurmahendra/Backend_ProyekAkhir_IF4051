const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


app.post('/volume', (req, res) => {
    let requestData = '';
    req.on('data', chunk => {
        requestData += chunk;
    });

    req.on('end', () => {
        console.log('Received Data:', requestData);
        let parsedData = JSON.parse(requestData);

        let response = { "res" : "200" };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
