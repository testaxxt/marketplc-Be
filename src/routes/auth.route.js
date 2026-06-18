const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { registerValidation, loginValidation, validate } = require('../middleware/validation.middeware');

// ========================== PUBLIC ROUTES ==========================

// Register new user (sends OTP)
router.post('/register', registerValidation, validate, authController.register);

// Verify OTP after registration
router.post('/verify-otp', authController.verifyOTP);

// Resend OTP if expired or not received
router.post('/resend-otp', authController.resendOTP);

// Login (only allowed after OTP verification)
router.post('/login', loginValidation, validate, authController.login);

// Promote user to admin (secured with secret key)
router.post('/promote-admin', authController.promoteToAdmin);

// Forgot / reset password
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// ========================== PROTECTED ROUTES ==========================

// Get current authenticated user
router.get('/me', authenticate, authController.getCurrentUser);

// Update profile (name)
router.patch('/update-profile', authenticate, authController.updateProfile);

// Change password
router.patch('/change-password', authenticate, authController.changePassword);

module.exports = router;
