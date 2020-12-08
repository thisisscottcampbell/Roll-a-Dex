const express = require('express');

const app = express();


app.get('/', (req, res) => res.send('Yoooo'))

//at specified end point, execute the required file
app.use('/api/list', require('./routes/list')); 
app.use('/api/auth', require('./routes/auth'));
//app.use('/app/register'), require('./routes/register');


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`${PORT} heard`));