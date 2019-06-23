const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware function will take three things, req, res, and next
// A function that has access to req/res cycle/objects
// next is callback that runs to move onto next middleware

module.exports = function(req, res, next) {
  // Get token from header
  // when a req is sent to protected route, token sent in header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // now take request object and assign a value to user
    req.user = decoded.user;
    // Now req.user may access any protected routes i.e: accessing their profile
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
