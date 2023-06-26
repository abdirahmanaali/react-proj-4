require('dotenv').config(); // Load the environment variables

const jwt = require('jsonwebtoken'); // Import the JSON Web Token package
const { SECRET } = process.env; // Retrieve the secret from the environment variables

module.exports = {
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get('Authorization'); // Get the token from the 'Authorization' header

    // console.log('Token:', headerToken); // Log the token for debugging purposes

    if (!headerToken) {
      console.log('ERROR IN auth middleware');
      return res.sendStatus(401);
    }

    let token;

    try {
      token = jwt.verify(headerToken, SECRET); // Verify the token using the secret
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
      return res.sendStatus(500);
    }

    if (!token) {
      console.log('Invalid or expired token');
      return res.sendStatus(401);
    }

    next();
  }
};
