const { Router } = require('express');
const controllers = require('../controllers/admins');

const router = Router();

router.post('/', controllers.createAdmin);
router.get('/:adminId', controllers.getAdminById);
router.put('/:adminId', controllers.updateAdmin);

module.exports = router;