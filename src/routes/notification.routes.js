const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');

// Public route
router.get('/', notificationController.getAllNotifications);

// Admin routes
router.post('/', authenticate, isAdmin, notificationController.createNotification);
router.delete('/:id', authenticate, isAdmin, notificationController.deleteNotification);

module.exports = router;
