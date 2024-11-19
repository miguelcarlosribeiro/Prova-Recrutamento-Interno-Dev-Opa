const express = require('express');
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoriesById,
  updateCategory,
  getCategoriesWithProducts
 } = require('../controllers/categoryController');
 const authMiddleware = require("../middleware/authMiddleware");

 
router.post('/', authMiddleware, createCategory);
router.get('/', authMiddleware, getAllCategories);
router.get('/:id', authMiddleware, getCategoriesById);
router.post('/:id', authMiddleware, updateCategory);
router.get("/with-products", authMiddleware, getCategoriesWithProducts);

module.exports = router;