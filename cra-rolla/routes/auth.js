const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const verifyUser = require('../controllers/auth')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

//get logged in user
router.get('/', verifyUser, async (req, res) => { 
  const {id} = req.user;

  try {
    const user = await User.findById(id).select('-password');
    return res.json(user);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
});

//authenticate with token
router.post(
  '/', 
  [
    check('name', 'Please add name')
    .not()
    .isEmpty(),
    check('password', 'Please enter password')
    .not()
    .isEmpty()
  ],
  async (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    const { name, password } = req.body;

    try {
      let user = await User.findOne({ name });

      if (!user) res.status(400).json({ msg: 'user not found'});

      const passwordMatch = bcrypt.compare(password, user.password);

      if(!passwordMatch) res.status(400).json({ msg: 'incorrect password'});

      const payload = {
        user: {
          id: user.id
        }
      }
 
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        return res.json({ token });
      });

    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
});

module.exports = router;