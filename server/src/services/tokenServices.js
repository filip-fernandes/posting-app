const Token = require('../models/tokenModel');
const User = require('../models/tokenModel')
const jwt = require('jsonwebtoken')
require('dotenv').config({path:__dirname+'/./../../.env'})


exports.createToken = async (user) => {
  try {
    const userId = user._id;
    const tokenData = jwt.sign({ userId: userId }, process.env.JWT_SECRET);

    const token = new Token({
      userId: userId,
      token: tokenData,
    })

    await token.save();
    return token;
  } catch (err) {
    throw new Error(err.message);
  }
};
