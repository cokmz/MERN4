const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authenticate = require('../middlewares/authenticate');
const { rbacMiddleware } = require('../middlewares/rbac');

router.post('/assign-role', authenticate, rbacMiddleware('officer', 'update', 'role'), roleController.assignRole);

module.exports = router;
