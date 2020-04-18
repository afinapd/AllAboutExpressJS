const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Transaction = connection.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    costumer: {
        type: Sequelize.STRING
    },
    star:{
        type: Sequelize.INTEGER
    },
    review:{
        type:Sequelize.STRING
    },
    id_kedai:{
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    tableName: 'transaction',
    timestamps : false,
});

module.exports = Transaction;