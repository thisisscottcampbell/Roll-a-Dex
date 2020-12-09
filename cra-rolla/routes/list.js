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
    console.log(err.message);
    res.status(500).send(err.message);
  }
})

router.post('/', verifyUser, 
  [
    check('title', 'Please add title')
    .not()
    .isEmpty()
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    const { id } = req.user;
    const { title, note, } = req.body;

    try {
      const newTech = new Tech({
        title,
        note,
        user: id
      });

      const tech = await newTech.save();
      res.json(tech);
    }
    catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
})

router.put('/:id', (req, res) => {
  res.send('Update tech')
})

router.delete('/:id', (req, res) => {
  res.send('Delete tech')
})

module.exports = router;