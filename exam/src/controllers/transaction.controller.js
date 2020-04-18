const getAllTransaction = async(req,res,service)=>{
    const transactions = await service.getAllTransaction()
    res.send(transactions);
}

const addNewTransaction = async(req,res,service)=>{
    const transaction = req.body
    const transactions = await service.addNewTransaction(transaction)
    res.send(transactions)
}

const updateTransaction = async(req,res,service)=>{
    const newTransactionId = req.body
    const transaction = await service.updateTransaction(newTransactionId)
    res.send(transaction)
}

const deleteTransaction = async(req,res,service)=>{
    const transactionId = req.params.id
    const transaction = await service.deleteTransaction(transactionId)
    res.send({id:transactionId})
}

module.exports = {getAllTransaction,addNewTransaction,updateTransaction,deleteTransaction}