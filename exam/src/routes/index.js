const express = require('express');
const router = express.Router();
// const swaggerUi= require('swagger-ui-express');
// const swaggerDocument = require('./../../swagger.json')

const authRoutes = require('./auth.route')
const menuRoutes = require('./menu.route');
const transactionRoutes = require('./transaction.route');
const infoRoutes = require('./info.route')

router.use('/auth',authRoutes)
// router.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
router.use('/menu', menuRoutes);
router.use('/transaction', transactionRoutes);
router.use('/info',infoRoutes)

module.exports = router