const getAllTransaction = async(req,res,service)=>{
    const transaction = await service.getAllTransaction()
    res.send(transaction);
}

const addNewTransactions = async(req,res,service)=>{
    const transaction = req.body
    const transactions = await service.addNewTransaction(transaction)
    res.send(transactions)
}

const updateTransaction = async(req,res,service)=>{
    const newTransactionId = req.body
    const transactions = await service.updateTransaction(newTransactionId)
    res.send(transactions)
}

const deleteTransaction = async(req,res,service)=>{
    const transactionId = req.params.id
    const transactions = await service.deleteTransaction(transactionId)
    res.send({id:transactionId})
}

module.exports = {getAllTransaction,addNewTransactions,updateTransaction,deleteTransaction}