const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Transaction = connection.define('transaction', {
    transaction_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    costumer_name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    id_product:{
        type:Sequelize.INTEGER
    },
    id_calendar:{
        type:Sequelize.INTEGER
    }
},{
    freezeTableName: true,
    tableName: 'transaction',
    paranoid: true,
    underscored:true
});

module.exports = Transaction;