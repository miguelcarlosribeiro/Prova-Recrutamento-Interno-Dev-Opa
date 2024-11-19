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
router.post('/', authMiddleware, getAllProducts);
router.post('/:id', authMiddleware, getProductById);
router.post('/:id', authMiddleware, updateProduct);
router.get("/category/:categoryId", authMiddleware, getProductsByCategory);

module.exports = router;