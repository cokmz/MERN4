const express = require('express');
const router = express.Router();
const sailorController = require('../controllers/sailorController');
const authenticate = require('../middlewares/authenticate');
const { rbacMiddleware } = require('../middlewares/rbac');

router.post('/', authenticate, rbacMiddleware('sailor', 'create'), sailorController.createSailor);
router.get('/', authenticate, rbacMiddleware('sailor', 'read'), sailorController.getSailors);

module.exports = router;
