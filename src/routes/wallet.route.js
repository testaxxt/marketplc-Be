// src/routes/wallet.route.js
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');
const walletController = require('../controllers/wallet.controller');

// Debug: Check what's imported
console.log('Wallet Controller:', walletController);
console.log('fundWallet:', walletController.fundWallet);
console.log('getTransactions:', walletController.getTransactions);
console.log('getWalletBalance:', walletController.getWalletBalance);

const {
  fundWallet,
  getTransactions,
  getWalletBalance
} = walletController;

router.post('/fund', authenticate, fundWallet);
router.get('/transactions', authenticate, getTransactions);
router.get('/balance', authenticate, getWalletBalance);

module.exports = router;