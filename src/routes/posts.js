const { Router } = require('express');
const controllers = require('../controllers/posts');

const router = Router();

router.post('/', controllers.createPost);
router.get('/', controllers.getAllPost);

module.exports = router;