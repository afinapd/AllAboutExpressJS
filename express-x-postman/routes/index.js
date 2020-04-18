const express = require('express');
const router = express.Router();

const productRoutes = require('./product.route');
const categoryRoutes = require('./category.route');
const userRoutes = require('./user.route');

router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/user', userRoutes);
router.use((req, res, next) => {
    res.status(404);
    res.send('Unknown page');
});

module.exports = router;