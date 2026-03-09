const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User.model');

// Load environment variables
dotenv.config();

// Admin seed data
const adminUser = {
  name: 'Micheal Chidera',
  email: 'Chideraoguledo825@gmail.com',
  password: 'Mummygrace1', // Make sure your User model hashes passwords in a pre-save hook
  role: 'admin',
  walletBalance: 2000,
  isActive: true,
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Clear database
const clearDB = async () => {
  try {
    await User.deleteMany({});
    console.log('🗑️  Users collection cleared');
  } catch (error) {
    console.error('❌ Error clearing users:', error);
    process.exit(1);
  }
};

// Seed only the admin user
const seedAdmin = async () => {
  try {
    const createdAdmin = await User.create(adminUser);
    console.log('✅ Admin user created successfully');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('👤 Admin Account Details:');
    console.log(`  Name: ${createdAdmin.name}`);
    console.log(`  Email: ${createdAdmin.email}`);
    console.log(`  Password: ${adminUser.password}`);
    console.log(`  Role: ${createdAdmin.role}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    process.exit(1);
  }
};

// Main function
const seedDatabase = async () => {
  console.log('🌱 Starting admin seeding...\n');
  await connectDB();
  await clearDB();
  await seedAdmin();
  console.log('✅ Database seeding completed successfully!');
  process.exit(0);
};

// Run seeder
seedDatabase();
