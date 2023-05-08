const jwt = require('jsonwebtoken');
const Token = require('../models/tokenModel');
require('dotenv').config({path:__dirname+'/./../../.env'});

exports.authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token and extract the user ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Find the token in the database
    const tokenDoc = await Token.findOne({ userId, token }).populate('userId');

    // Check if the token exists and is not expired
    if (!tokenDoc) {
      throw new Error('Invalid token');
    }

    // Attach the user id to the request object
    req.body.userId = userId;

    // Call the next middleware function
    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Authentication failed' });
  }
};
