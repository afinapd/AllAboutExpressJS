const express = require('express');
const router = express.Router();
const TransactionService = require('../services/transaction.service')
const tokenValidation = require('../middlewares/token-validation');
const { getAllTransaction, addNewTransactions, updateTransaction, deleteTransaction } = require('../controllers/transaction.controller')
const transaction = require('../models/transaction.model')

const transactionService = new TransactionService(transaction);

router.use(tokenValidation);
router.get('/', (req, res, next) => getAllTransaction(req, res, transactionService))
router.post('/', (req, res, next) => addNewTransactions(req, res, transactionService))
router.put('/', (req, res, next) => updateTransaction(req, res, transactionService))
router.delete('/:id', (req, res, next) => deleteTransaction(req, res, transactionService))

module.exports = router