const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Get entire list')
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