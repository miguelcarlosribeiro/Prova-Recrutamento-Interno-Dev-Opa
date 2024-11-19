const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./config/db');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const categoryRoutes =require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());

connectdb();

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;