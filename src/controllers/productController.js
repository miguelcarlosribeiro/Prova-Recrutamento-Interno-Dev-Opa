const Product = require('../models/Product');
const Category = require("../models/Category");


exports.getAllProducts = async (req, res) => { 
  try {
    const products = await Product.find().populate("categories", "name description");
    res.status(200).json(products);
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

exports.createProduct = async (req, res) => { 
  const {name, description, amount, price, categories} = req.body;

  try {
    if (categories && categories.length > 0) {
      const validCategories = await Category.find({ _id: { $in: categories } });
      if (validCategories.length !== categories.length) {
        return res.status(400).json({ message: "Alguma(s) categoria(s) fornecida(s) não existe(m)" });
      }
    }

    const product = new Product({ name, description, amount, price, categories });
    await product.save()
    res.status(200).json({ message: "Produto criado com sucesso!", product });
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

  
exports.getProductById = async (req, res) => { 
  const { id } = req.params
  try {
    const product = await Product.findById(id).populate("categories", "name description");
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.status(200).json(product);
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

exports.updateProduct = async (req, res) => {
  const {id} = req.params;
  const { name, description, amount, price, categories } = req.body;

  try {
    if (categories && categories.length > 0) {
      const validCategories = await Category.find({ _id: { $in: categories } });
      if (validCategories.length !== categories.length) {
        return res.status(400).json({ message: "Alguma(s) categoria(s) fornecida(s) não existe(m)" });
      }
    }
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, amount, price, categories },
      {new: true}
      );
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });

    res.status(200).json({ message: "Produto atualizado com sucesso!", product });
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

exports.deleteProduct = async (req, res) => {
  const {id} = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.status(200).json({ message: "Produto deletado com sucesso!" });
  }catch(error){
    res.status(500).json({ error: error.message});
  }};


  exports.getProductsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
      const products = await Product.find({ categories: categoryId }).populate("categories", "name description");
      if (products.length === 0) {
        return res.status(404).json({ message: "Nenhum produto encontrado para esta categoria" });
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };