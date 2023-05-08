const Post = require('../models/postModel')
const mongoose = require('mongoose')
const userServices = require('./userServices')


exports.createPost = async (userId, content) => {
  try {
    const post = new Post({
      userId: new mongoose.Types.ObjectId(userId),
      content: content,
    });
    await post.save();
    return post;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.deletePost = async (userId, postId) => {
  try {
    const post = await Post.deleteOne({ userId: userId, _id: postId });
    return post;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.likePost = async (postId) => {
  try {
    const post = await Post.findByIdAndUpdate(postId, { $inc: { likes: 1 }});
    return post;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getAllPosts = async () => {
  try {
    const posts = await Post.find()
    // append username to the post
    const updatedPosts = await Promise.all(posts.map(async (post) => {
      const username = await userServices.getUsernameFromUserId(post.userId);
      post = post.toObject();
      post.username = username;
      return post;
    }));
    //console.log(updatedPosts);
    return updatedPosts;
  } catch (err) {
    throw new Error(err.message);
  }
};



