const express = require('express');
const router = express.Router();

//get existent user
router.get('/', (req, res) => { 
  return res.send('return existent user')
});

//register new user
router.post('/', (req, res) => { 
  return res.send('Register a new user')
});

module.exports = router;