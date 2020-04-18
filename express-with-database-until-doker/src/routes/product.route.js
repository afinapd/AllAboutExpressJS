const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service')
const tokenValidation = require('../middlewares/token-validation');
const { getAllProduct, addNewProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')
const product = require('../models/product.model')

const productService = new ProductService(product);

router.use(tokenValidation);
router.get('/', (req, res, next) => getAllProduct(req, res, productService))
router.post('/', (req, res, next) => addNewProduct(req, res, productService))
router.put('/', (req, res, next) => updateProduct(req, res, productService))
router.delete('/:id', (req, res, next) => deleteProduct(req, res, productService))

module.exports = router