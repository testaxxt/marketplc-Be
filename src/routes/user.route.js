const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');

// Admin routes
router.get('/', authenticate, isAdmin, userController.getAllUsers);
router.get('/:id', authenticate, isAdmin, userController.getUserById);
router.patch('/:id/status', authenticate, isAdmin, userController.updateUserStatus);
router.patch('/:id/role', authenticate, isAdmin, userController.updateUserRole);
router.patch('/:id/balance', authenticate, isAdmin, userController.adjustUserBalance);

module.exports = router;