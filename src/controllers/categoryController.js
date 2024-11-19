const mongoose = require('mongoose');
const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => { 
  try {
    const categories =  await Category.find();
    res.status(200).json(categories);
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};
exports.createCategory = async (req, res) => { 
  const {name, description} = req.body;

  try {
    const category = new Category({name, description});

    await category.save();
    res.status(200).json({ message: "Categoria criada com sucesso!", category });
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

  
exports.getCategoriesById = async (req, res) => { 
  //n está funcionando
  const id = req.params
  try {
    const categories = await Category.findById(id).then((cats) => {
      res.status(200).json({cats})
    });
    
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

exports.updateCategory = async (req, res) => {
  const {id} = req.params;
  const {name, description} = req.body;

  try {
    const category = await Category.findByIdAndUpdate(
      {id: id},
      {name, description},
      {new: true}
      );
    if (!category) return res.status(404).json({ message: "Categoria não encontrada" });

    res.status(200).json({ message: "Categoria atualizada com sucesso!", category });
  } catch (error) { 
    res.status(400).json({ error: error.message});
  }};

exports.deleteCategory = async (req, res) => {
  const {id} = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.status(404).json({ message: "Categoria não encontrada" });
    res.status(200).json({ message: "Categoria deletada com sucesso!" });
  }catch(error){
    res.status(500).json({ error: error.message});
  }};


  exports.getCategoriesWithProducts = async (req, res) => {
    try {
      const categories = await Category.find();
      const categoriesWithProducts = await Promise.all(
        categories.map(async (category) => {
          const products = await Product.find({ categories: category._id });
          return {
            category,
            products,
          };
        })
      );
      res.status(200).json(categoriesWithProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };