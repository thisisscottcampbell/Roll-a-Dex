const express = require('express');
const router = express.Router();
const verifyUser = require('../controllers/auth')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Tech = require('../models/Tech');


router.get('/', verifyUser, 
  async (req, res) => {
  try {
    //req.user.id is brought in from verifyUser, and that is then used to compare against the user object in 'Tech'
    const userList = await Tech.find({ user: req.user.id }).sort({ date: -1 });
    res.json(userList);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
})

router.post('/', (req, res) => {
  res.send('Post tech to list')
})

router.put('/:id', (req, res) => {
  res.send('Update tech')
})

router.delete('/:id', (req, res) => {
  res.send('Delete tech')
})

module.exports = router;