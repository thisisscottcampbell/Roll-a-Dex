const express = require('express');
const connectDb = require('./config/connectDb');
const cors = require('cors')

const app = express();

connectDb();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('i am server'))


  //techniques  
app.use('/api/list', require('./routes/list')); 
  //curr user
app.use('/api/auth', require('./routes/auth'));
  //new user
app.use('/api/register', require('./routes/register'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`${PORT} heard`));