const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Users = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'users',
    timestamps : false
});

module.exports = Users;