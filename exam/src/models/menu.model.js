const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Menu = connection.define('menu', {
    id_kedai: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    kedai: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    location:{
        type: Sequelize.STRING
    },
    price:{
        type:Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'menu',
    timestamps : false
});

module.exports = Menu;