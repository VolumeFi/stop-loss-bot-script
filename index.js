const express = require('express');
const { processDeposits } = require('./stop-loss');

require('dotenv').config();

processDeposits();

const app = express();

app.get('/', (req, res) => {
    res.send('Service is running!');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Check status on port ${port}`);
});

