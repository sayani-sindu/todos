const express = require('express');
require('./connection/conn.js');

const app = express();

// Home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
