const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/', postController.getAll);

router.use(authMiddleware);

router.post('/post', postController.post);
router.delete('/delete', postController.delete);
router.post('/like', postController.like);

module.exports = router;
