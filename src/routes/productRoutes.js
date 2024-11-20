const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  getProductsByCategory
 } = require('../controllers/productController');
 const authMiddleware = require("../middleware/authMiddleware");

 
router.post('/', authMiddleware, createProduct);
router.get('/', authMiddleware, getAllProducts);
router.get('/:id', authMiddleware, getProductById);
router.put('/:id', authMiddleware, updateProduct);
router.get("/category/:categoryId", authMiddleware, getProductsByCategory);

module.exports = router;