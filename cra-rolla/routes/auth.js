const express = require('express');
const router = express.Router();

//get logged in user
router.get('/', (req, res) => { 
  return res.send('return existent user')
});

//log in, grab token
router.post('/', (req, res) => { 
  return res.send('Register a new user')
});

module.exports = router;