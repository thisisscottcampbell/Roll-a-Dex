const express = require('express');
const connectDb = require('./config/connectDb');

const app = express();

connectDb();

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('i am server'))

//at specified end point, execute the required file
app.use('/api/list', require('./routes/list')); 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/register', require('./routes/register'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`${PORT} heard`));