const express = require('express');
const router = express.Router();
const swaggerUi= require('swagger-ui-express');
const swaggerDocument = require('./../../swagger.json')

const authRoutes = require('./auth.route')
const calendarRoutes = require('./calendar.route');
const productRoutes = require('./product.route');
const transactionRoutes = require('./transaction.route');

router.use('/auth',authRoutes)
router.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
router.use('/calendar', calendarRoutes);
router.use('/product', productRoutes);
router.use('/transaction', transactionRoutes);

module.exports = router