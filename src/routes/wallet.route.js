// src/routes/wallet.route.js
const express = require('express');
const router = express.Router();
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const walletController = require('../controllers/wallet.controller');

const {
  fundWallet,
  getTransactions,
  getWalletBalance,
  adminUpdateWallet
} = walletController;

router.post('/fund', authenticate, fundWallet);
router.get('/transactions', authenticate, getTransactions);
router.get('/balance', authenticate, getWalletBalance);

// Admin route to directly credit/debit a user's wallet
router.post('/admin/update', authenticate, isAdmin, adminUpdateWallet);

module.exports = router;