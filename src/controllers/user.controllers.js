const User = require('../models/User.model');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });

    res.json({
      success: true,
      data: {
        users
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
};

// Get single user by ID (Admin only)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: {
        user
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
};

// Update user status (Admin only)
exports.updateUserStatus = async (req, res) => {
  try {
    const { isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    user.isActive = isActive;
    await user.save();

    res.json({
      success: true,
      message: 'User status updated successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          isActive: user.isActive
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating user status',
      error: error.message
    });
  }
};

// Update user role (Admin only)
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ success: false, message: 'Invalid role' });
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User role updated successfully', data: { user } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating role', error: error.message });
  }
};

// Adjust user wallet balance (Admin only)
exports.adjustUserBalance = async (req, res) => {
  try {
    const { amount, type } = req.body;
    if (!['credit', 'debit'].includes(type) || !amount || Number(amount) <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid adjustment parameters' });
    }
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const adj = Number(amount);
    if (type === 'credit') {
      user.walletBalance += adj;
    } else {
      if (user.walletBalance < adj) {
        return res.status(400).json({ success: false, message: 'Insufficient balance' });
      }
      user.walletBalance -= adj;
    }
    await user.save();
    res.json({ success: true, message: 'Balance adjusted successfully', data: { walletBalance: user.walletBalance } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adjusting balance', error: error.message });
  }
};