const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    amount: { type: Number, required: true },
    product: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model('Notification', NotificationSchema);
