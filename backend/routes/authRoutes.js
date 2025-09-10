const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');
const { rbacMiddleware } = require('../middlewares/rbac');

router.post('/register', authController.register);
//router.post('/register', authenticate, rbacMiddleware('user', 'create'), authController.register);
router.post('/login', authController.login);

module.exports = router;
