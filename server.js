const express = require('express');
const app = express();
const path = require('path');

// Equivalente ao @app.route('/')
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Equivalente ao @app.route('/<path:filename>')
app.get('/:filename', (req, res) => {
    res.download(path.join(__dirname, 'static', req.params.filename));
});

// Equivalente ao if __name__ == '__main__'
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// http://localhost:3000/documento.txt
