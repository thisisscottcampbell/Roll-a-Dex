const jwt = require('jsonwebtoken');
const config = require('config');

const verifyUser = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({msg: 'No Token'});

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();

  } catch(err) {
    console.log(err.message)
    return res.status(401).json({msg: 'Bad token'});
  }
}

module.exports = verifyUser;
