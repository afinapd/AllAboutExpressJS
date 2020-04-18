const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');

dotenv.config()

class TransactionService {
    constructor(transaction) {
        this.transaction = transaction;
    }

    async getAllTransaction() {
        let result
        try {
            result = await this.transaction.findAll()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'GET-TRANSACTION',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async addNewTransaction(transaction) {
        let result
        try {
            result = await this.transaction.create({
                transaction_code: transaction.transaction_code,
                costumer_name: transaction.costumer_name,
                quantity: transaction.quantity,
                id_product: transaction.id_product,
                id_calendar: transaction.id_calendar
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'POST-TRANSACTION',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }

    async updateTransaction(newTransactionId) {
        let result
        try {
            result = await this.transaction.update({
                costumer_name: newTransactionId.costumer_name,
                quantity: newTransactionId.quantity,
                id_product: newTransactionId.id_product,
                id_calendar: newTransactionId.id_calendar
            }, {
                where:
                    { transaction_code: newTransactionId.transaction_code }
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'UPDATE-TRANSACTION',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async deleteTransaction(transactionId) {
        let result
        const transaction = await this.transaction.findByPk(transactionId)
        try {
            result = await transaction.destroy();
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'DELETE-TRANSACTION',
                logMessage: e
            })
        } return result
    }
}

module.exports = TransactionService;