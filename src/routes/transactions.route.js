// src/routes/admin.route.js
const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const {
  getAllTransactions,
  updateTransactionStatus,
  getDashboardStats
} = require('../controllers/Admin.Controller');

// Transaction Management Routes
router.get('/transactions', authenticate, isAdmin, getAllTransactions);
router.patch('/transactions/:transactionId', authenticate, isAdmin, updateTransactionStatus);

// Dashboard Stats Route
router.get('/dashboard/stats', authenticate, isAdmin, getDashboardStats);

module.exports = router;