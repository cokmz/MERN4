const express = require('express');
const router = express.Router();
const officerController = require('../controllers/officerController');
const authenticate = require('../middlewares/authenticate');
const { rbacMiddleware } = require('../middlewares/rbac');

router.post('/', authenticate, rbacMiddleware('officer', 'create'), officerController.createOfficer);
router.get('/', authenticate, rbacMiddleware('officer', 'read'), officerController.getOfficers);

module.exports = router;
