const express = require('express');
const bodyParser = require('body-parser');
const books = require('./routes/books');
const authors = require('./routes/authors');
const authorMiddleware = require('./middleware/authorMiddleware');

// Port number
const PORT = 4000;

// Create an express application
const app = express();
app.use(bodyParser.json());


// Books routes
app.use('/books', books);

app.get('/', (req, res) => {
    res.send('Welcome to our books library');
});
    
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('error!');
});

// Authors routes
app.use('/authors', authors);

app.get('/', (req, res) => {
    res.send('Welcome to our authors library');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('error!');
});

// Middleware to check if the user is authorized to access the authors routes
app.use(authorMiddleware);



// Our server is listening on port 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
