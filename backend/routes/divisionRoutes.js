const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');
const authenticate = require('../middlewares/authenticate');
const { rbacMiddleware } = require('../middlewares/rbac');

router.post('/assign-division', authenticate, rbacMiddleware('sailor', 'update', 'division'), divisionController.assignDivision);

module.exports = router;
