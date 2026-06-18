const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, isAdmin, optionalAuth } = require('../middleware/auth.middleware');
const { productValidation, validate } = require('../middleware/validation.middeware');
const upload = require('../middleware/upload'); // 👈 import Cloudinary upload middleware

// Public routes
router.get('/', optionalAuth, productController.getAllProducts);
router.get('/categories', productController.getCategories);
router.get('/featured', productController.getFeaturedProducts);
router.get('/new-arrivals', productController.getNewArrivals);
router.get('/:id', optionalAuth, productController.getProductById);

// Admin routes
router.post(
  '/',
  authenticate,
  isAdmin,
  upload.single('image'), // 👈 handle image upload (expects "image" field in form-data)
  productValidation,
  validate,
  productController.createProduct
);

router.put(
  '/:id',
  authenticate,
  isAdmin,
  upload.single('image'), // 👈 allow updating the product image
  productController.updateProduct
);

router.delete('/:id', authenticate, isAdmin, productController.deleteProduct);
router.patch('/:id/featured', authenticate, isAdmin, productController.toggleFeatured);

module.exports = router;
