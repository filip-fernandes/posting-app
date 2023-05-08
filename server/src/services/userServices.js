const User = require('../models/userModel')
const mongoose = require('mongoose')

exports.createUser = async (userData) => {
  try {
    const { email, password, username } = userData;
    const user = new User({
      email: email,
      password: password,
      username: username,
    });
    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getUsernameFromUserId = async (userId) => {
  return (await User.findById(userId)).username;
}

exports.emailInUse = async (email) => {
  return (!!await User.findOne({ email: email }));
}

exports.usernameIsTaken = async (username) => {
  return (!!await User.findOne({ username: username }));
}

exports.accountExists = async(email, password) => {
  return (!!await User.findOne({ email: email, password: password }));
}

exports.getUser = async(email, password) => {
  return (await User.findOne({ email: email, password: password }));
}




