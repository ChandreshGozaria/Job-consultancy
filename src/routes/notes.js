const { Router } = require('express');
const controllers = require('../controllers/notes');

const router = Router();

router.post('/:postId', controllers.createNote);
router.get('/', controllers.getAllNote);

module.exports = router;