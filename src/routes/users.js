const { Router } = require('express');
const controllers = require('../controllers/users');

const router = Router();

router.post('/', controllers.createUser);
router.post('/login', controllers.loginUser);
router.get('/:userId', controllers.getUserById);
router.put('/:userId', controllers.updateUser);
router.delete('/:userId', controllers.deleteUser);

module.exports = router;