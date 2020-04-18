const Sequelize = require("sequelize");
const connection = require('../../dbConn');

const Calendar = connection.define('calendar', {
    id_calendar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
    },
    calendar: {
        type: Sequelize.STRING
    },
    week: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    tableName: 'calendar',
    paranoid: true,
});

module.exports = Calendar;