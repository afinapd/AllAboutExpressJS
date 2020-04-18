const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');
const Menu = require('../models/menu.model')
const Transaction = require('../models/transaction.model')
const sequelize = require('../../dbConn');

dotenv.config()

class InfoService {
    async getFavPlace() {
        let result
        try {
            // result = await Transaction.findAll({include:Menu},{where:{star:5}});
            result = await sequelize.query('select distinct kedai from menu join transaction on menu.id_kedai = transaction.id_kedai where transaction.star=5',{type: sequelize.QueryTypes.SELECT})
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'GET-FAV-PLACE',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async getFavCategory() {
        let result
        try {
            result = await sequelize.query('select distinct category from menu join transaction on menu.id_kedai = transaction.id_kedai where transaction.star=5',{type: sequelize.QueryTypes.SELECT})
        } catch (e) {
            logEvent.emit('APP_ERROR', {    
                logTitle: 'GET-FAV-CATEGORY',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }
}

module.exports = InfoService;