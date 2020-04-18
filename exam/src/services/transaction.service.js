const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');
const Transaction = require('../models/transaction.model')

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
                costumer:transaction.costumer,
                place:transaction.place,
                star:transaction.star,
                review:transaction.review
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
                costumer:newTransactionId.costumer,
                place:newTransactionId.place,
                star:newTransactionId.star,
                review:newTransactionId.review
            }, {
                where:
                    { id: newTransactionId.id }
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'UPDATE-TRANSACTION',
                logMessage: e
            })
            // throw new Error(e)
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