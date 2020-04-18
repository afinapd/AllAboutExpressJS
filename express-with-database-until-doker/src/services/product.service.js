const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');
// const connection = require('../../dbConn');
// const Product = require('../models/product.model')

dotenv.config()

class ProductService {
    constructor(product) {
        this.product = product;
    }

    async getAllProduct() {
        let result
        try {
            result = await this.product.findAll()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'GET-PRODUCT',
                logMessage: e
            })
            throw new Error(e)
        } return result;
    }

    async addNewProduct(product) {
        let result
        try {
            result = await this.product.create({
                product_name: product.product_name,
                price: product.price
            });
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'POST-PRODUCT',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async updateProduct(newProductId) {
        // const product= await this.product.update({product_name:newProductId.product_name, price:newProductId.price}, {where:{id_product:newProductId.id_product}})
        // product.product_name = newProductId.product_name
        // product.price = newProductId.price
        let result
        try {
            result = await this.product.update({
                product_name: newProductId.product_name,
                price: newProductId.price
            }, {
                where:
                    { id_product: newProductId.id_product }
            })

            // result = await product.save();
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'UPDATE-PRODUCT',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }

    async deleteProduct(productId) {
        let result;
        const product = await this.product.findByPk(productId)
        try {
            result = await product.destroy();
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'DELETE-PRODUCT',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }
}

module.exports = ProductService;