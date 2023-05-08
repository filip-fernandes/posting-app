const postServices = require('../services/postServices');


exports.post = async (req, res) => {
  try {
    const { userId, content } = req.body;
    const post = await postServices.createPost(userId, content);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { userId, postId } = req.body;
    const post = await postServices.deletePost(userId, postId);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.like = async (req, res) => {
  try {
    const { postId } = req.body;
    const post = await postServices.likePost(postId);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


exports.getAll = async (req, res) => {
  try {
    const posts = await postServices.getAllPosts();
    return res.status(201).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
