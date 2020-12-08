const express = require('express');

const app = express();


app.get('/', (req, res) => res.send('Yoooo'))





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`${PORT} heard`));