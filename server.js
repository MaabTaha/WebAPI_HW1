const express = require('express');

const app = express();

// Middleware to parse JSON body
// app.use(express.text());
app.use(express.raw({ type: '*/*'}));

// Echo endpoint
// app.post('/echo', (req, res) => {
app.post('/', (req, res) => {
    // const message = req.body.message;
    // res.send(req.body);
    const contentType = req.get('content-type') || 'text/plain';
    res.set('Content-Type', contentType);
    const body = req.body && req.body.length > 0 ? req.body: Buffer.from('');
    res.send(body);

    // Send back the same string
    // res.send(message);
});

// Port (Render requires process.env.PORT)
const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}