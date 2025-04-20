const express = require('express');
require('./connection/conn.js');
const auth = require('./routes/auth');

const app = express();


app.use(express.json());
// Home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/v1", auth);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
