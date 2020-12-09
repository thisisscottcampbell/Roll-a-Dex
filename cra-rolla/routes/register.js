const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

//register new user
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

     if (user) return res.status(400).json({msg: `The name: ${name}, is already in use`})

     user = new User({
       name,
       password, 
       list: []
     })
  
     await bcrypt.hash(password, 10);
     await user.save();

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
     })
   }

   catch (err) {
     return res.status(500).send(err.message);
   }
});

module.exports = router;