const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');
const {addNewProduct, getProductList, deleteProduct, updateProduct} = require("../controllers/product.controller");

const productService = new ProductService();

router.get('/', (req, res, next) => getProductList(req, res, productService));
router.post('/', (req, res, next) => addNewProduct(req, res, productService));
router.delete('/:id', (req, res, next) => deleteProduct(req, res, productService));
router.put('/', (req, res, next) => updateProduct(req, res, productService));

module.exports = router;