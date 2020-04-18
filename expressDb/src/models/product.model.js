const Sequelize = require("sequelize");
const connection = require('../../dbConn');



const Product = connection.define('product', {
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    product_name: {
        type: Sequelize.STRING
    }, 
    price: {
        type: Sequelize.INTEGER
    }
},{
    freezeTableName: true,
    tableName: 'product',
    paranoid: true
    // timestamps : false
});

module.exports = Product;