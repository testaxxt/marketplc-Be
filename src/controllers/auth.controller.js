const jwt = require('jsonwebtoken');
const User = require('../models/User.Model');
const { sendEmail } = require('../utils/email');
const { welcomeEmail } = require('../emails/welcomeEmail');
const { loginAlertEmail } = require('../emails/loginAlertEmail');
const { otpEmail } = require('../emails/otpEmail');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// ========================== REGISTER ==========================
exports.register = async (req, res) => {

  console.log("trying to login");
  
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    const user = await User.create({ name, email, password, role: role || 'user' });

    // Generate OTP for verification
   const otp = await user.generateOTP(); // single call handles saving

    // Send OTP email
    await sendEmail(user.email, 'Verify Your Email - ShopLogsHere', otpEmail(otp));

    console.log(otp);
    

    res.status(201).json({
      success: true,
      message: 'User registered successfully. Please verify your email with the OTP sent.',
      data: {
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering user',
      error: error.message
    });
  }
};

// ========================== VERIFY OTP ==========================
exports.verifyOTP = async (req, res) => {

  console.log("It got here ooo");
  
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email }).select('+otp +otpExpires');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isValid = await user.verifyOTP(otp);
    if (!isValid) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }

    await user.save();

    // Send welcome email after successful verification
    await sendEmail(user.email, 'Welcome to ShopWithLogsHere 🎉', welcomeEmail(user.name));

    res.json({
      success: true,
      message: 'OTP verified successfully. You can now log in.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error verifying OTP',
      error: error.message
    });
  }
};

// ========================== RESEND OTP ==========================
exports.resendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ success: false, message: 'User already verified' });
    }

    const otp = await user.generateOTP(); // single call handles saving


    await sendEmail(email, 'Your New OTP Code', otpEmail(otp));

    res.json({ success: true, message: 'OTP resent successfully' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error resending OTP',
      error: error.message
    });
  }
};

// ========================== LOGIN ==========================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Require OTP verification before login
    if (!user.isVerified) {
      

      const otp = await user.generateOTP(); // single call handles saving


    // Send OTP email
    await sendEmail(user.email, 'Verify Your Email - ShopLogsHere', otpEmail(otp));

    console.log(otp);
      return res.status(403).json({
        success: false,
        message: 'Please verify your account with the OTP sent to your email.'
      });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, message: 'Account is deactivated' });
    }

    const token = generateToken(user._id);

    // Send login alert email
    await sendEmail(user.email, 'New Login Detected', loginAlertEmail(user.name));

    res.json({
      success: true,
      message: 'Login successful',
      data: { user, token }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
};

// ========================== CURRENT USER ==========================
exports.getCurrentUser = async (req, res) => {
  try {
    res.json({
      success: true,
      data: { user: req.user }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting user data',
      error: error.message
    });
  }
};
