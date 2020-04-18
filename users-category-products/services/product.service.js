const uuidv1 = require('uuid/v1');
const _ = require("lodash");

const products = [];

class ProductService {
    async getAllProduct() {
        const productList = new Promise((resolve, reject) => {
            resolve(products);
        });
        const result = await productList;
        return result;
    }

    async createProduct(product) {
        const promise = new Promise((resolve, reject) => {
            product.id = uuidv1();
            products.push(product);
            resolve(product);
        });
        const result = await promise;
        return result;
    }

    async updateProduct(product) {
        const promise = new Promise((resolve, reject) => {
            const idx = _.findIndex(products, function (o) {
                return o.id == product.id;
            });
            products.splice(idx, 1, product);
            resolve(product);
        });
        const result = await promise;
        return result;
    }

    async deleteProduct(productId) {
        const promise = new Promise((resolve, reject) => {
            const idx = _.findIndex(products, function (o) {
                return o.id == productId;
            });
            products.splice(idx, 1);
            resolve(productId);
        });
        const result = await promise;
        return result;
    }
}

module.exports = ProductService;