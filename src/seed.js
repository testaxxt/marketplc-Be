const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User.model');
const Product = require('./models/Product.model');

// Load environment variables
dotenv.config();

// Sample users data
const users = [
  {
    name: 'Admin User',
    email: 'admin@marketplace.com',
    password: 'admin123',
    role: 'admin',
    walletBalance: 10000,
    isActive: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'user123',
    role: 'user',
    walletBalance: 5000,
    isActive: true
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'user123',
    role: 'user',
    walletBalance: 3000,
    isActive: true
  },
  {
    name: 'Mike Wilson',
    email: 'mike@example.com',
    password: 'user123',
    role: 'user',
    walletBalance: 2000,
    isActive: true
  }
];

// Sample products data
const products = [
  // Electronics
  {
    name: 'iPhone 15 Pro',
    description: 'Latest Apple iPhone with A17 Pro chip, titanium design, and advanced camera system. Features 6.1-inch Super Retina XDR display.',
    price: 999.99,
    quantity: 50,
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1696446702183-cbd87ca4138b?w=500',
    isActive: true
  },
  {
    name: 'MacBook Pro 16"',
    description: 'Powerful laptop with M3 Max chip, 16-inch Liquid Retina XDR display, and up to 22 hours battery life.',
    price: 2499.99,
    quantity: 30,
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    isActive: true
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Premium noise-canceling wireless headphones with exceptional sound quality and 30-hour battery life.',
    price: 399.99,
    quantity: 100,
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
    isActive: true
  },
  {
    name: 'Samsung 65" 4K Smart TV',
    description: 'Crystal UHD 4K TV with HDR, Smart Hub, and voice assistant integration. Perfect for home entertainment.',
    price: 799.99,
    quantity: 25,
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    isActive: true
  },
  {
    name: 'iPad Air',
    description: '10.9-inch Liquid Retina display, M1 chip, and support for Apple Pencil. Versatile tablet for work and play.',
    price: 599.99,
    quantity: 60,
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    isActive: true
  },

  // Clothing
  {
    name: 'Nike Air Max Sneakers',
    description: 'Comfortable and stylish running shoes with Air Max cushioning technology. Available in multiple colors.',
    price: 149.99,
    quantity: 150,
    category: 'clothing',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    isActive: true
  },
  {
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit jeans made from premium denim. Timeless style that never goes out of fashion.',
    price: 89.99,
    quantity: 200,
    category: 'clothing',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    isActive: true
  },
  {
    name: 'North Face Jacket',
    description: 'Waterproof and insulated winter jacket. Perfect for cold weather and outdoor activities.',
    price: 299.99,
    quantity: 80,
    category: 'clothing',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    isActive: true
  },
  {
    name: 'Adidas Track Suit',
    description: 'Comfortable athletic wear set with iconic three stripes. Made from breathable fabric.',
    price: 119.99,
    quantity: 100,
    category: 'clothing',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
    isActive: true
  },

  // Home & Living
  {
    name: 'Dyson V15 Vacuum Cleaner',
    description: 'Powerful cordless vacuum with laser detection and advanced filtration system. Makes cleaning effortless.',
    price: 649.99,
    quantity: 40,
    category: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500',
    isActive: true
  },
  {
    name: 'KitchenAid Stand Mixer',
    description: 'Professional-grade stand mixer with 10-speed settings. Perfect for baking and cooking enthusiasts.',
    price: 379.99,
    quantity: 50,
    category: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=500',
    isActive: true
  },
  {
    name: 'Instant Pot Duo',
    description: '7-in-1 multi-cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.',
    price: 89.99,
    quantity: 120,
    category: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500',
    isActive: true
  },
  {
    name: 'Nespresso Coffee Machine',
    description: 'Premium espresso maker with milk frother. Brew barista-quality coffee at home.',
    price: 249.99,
    quantity: 70,
    category: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
    isActive: true
  },

  // Books
  {
    name: 'Atomic Habits by James Clear',
    description: 'Life-changing book about building good habits and breaking bad ones. A practical guide to self-improvement.',
    price: 24.99,
    quantity: 200,
    category: 'books',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    isActive: true
  },
  {
    name: 'The Psychology of Money',
    description: 'Morgan Housel explores the strange ways people think about money and teaches timeless lessons.',
    price: 19.99,
    quantity: 150,
    category: 'books',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
    isActive: true
  },

  // Sports & Fitness
  {
    name: 'Yoga Mat Premium',
    description: 'Extra-thick non-slip yoga mat with carrying strap. Perfect for yoga, pilates, and floor exercises.',
    price: 39.99,
    quantity: 180,
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    isActive: true
  },
  {
    name: 'Adjustable Dumbbells Set',
    description: 'Space-saving adjustable dumbbells from 5 to 52.5 lbs. Perfect for home gym workouts.',
    price: 299.99,
    quantity: 60,
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
    isActive: true
  },
  {
    name: 'Fitbit Charge 6',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking. Stay on top of your health.',
    price: 179.99,
    quantity: 90,
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500',
    isActive: true
  },

  // Beauty & Personal Care
  {
    name: 'Olaplex Hair Treatment Set',
    description: 'Professional hair repair treatment system. Restores damaged hair and improves overall hair health.',
    price: 89.99,
    quantity: 100,
    category: 'beauty',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    isActive: true
  },
  {
    name: 'Philips Electric Shaver',
    description: 'Advanced electric shaver with multi-directional blades for a close, comfortable shave.',
    price: 129.99,
    quantity: 80,
    category: 'beauty',
    imageUrl: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=500',
    isActive: true
  }
];

// Connect to database
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
    await Product.deleteMany({});
    console.log('🗑️  Database cleared');
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    process.exit(1);
  }
};

// Seed users
const seedUsers = async () => {
  try {
    const createdUsers = await User.insertMany(users);
    console.log(`✅ ${createdUsers.length} users seeded`);
    return createdUsers;
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    process.exit(1);
  }
};

// Seed products
const seedProducts = async (adminUser) => {
  try {
    // Add admin user as creator for all products
    const productsWithCreator = products.map(product => ({
      ...product,
      createdBy: adminUser._id
    }));

    const createdProducts = await Product.insertMany(productsWithCreator);
    console.log(`✅ ${createdProducts.length} products seeded`);
    return createdProducts;
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

// Main seed function
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Connect to database
    await connectDB();

    // Clear existing data
    await clearDB();

    // Seed users
    const createdUsers = await seedUsers();
    const adminUser = createdUsers.find(user => user.role === 'admin');

    // Seed products
    await seedProducts(adminUser);

    console.log('\n✅ Database seeding completed successfully!');
    console.log('\n📝 Test Accounts Created:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Admin Account:');
    console.log('  Email: admin@marketplace.com');
    console.log('  Password: admin123');
    console.log('  Wallet: $10,000.00');
    console.log('\nUser Accounts:');
    console.log('  1. Email: john@example.com | Password: user123 | Wallet: $5,000.00');
    console.log('  2. Email: jane@example.com | Password: user123 | Wallet: $3,000.00');
    console.log('  3. Email: mike@example.com | Password: user123 | Wallet: $2,000.00');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('📊 Products Seeded by Category:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
      const count = products.filter(p => p.category === cat).length;
      console.log(`  ${cat}: ${count} products`);
    });
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seeder
seedDatabase();