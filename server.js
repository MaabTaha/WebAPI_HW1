const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Echo endpoint
app.post('/echo', (req, res) => {
    // const message = req.body.message;
    res.send(req.body);

    // Send back the same string
    // res.send(message);
});

// Port (Render requires process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});