const Menu = require('./menu.model')
const Transaction = require('./transaction.model')

const dbAssociation=function dbAssociation(){
    Menu.hasMany(Transaction,{foreignKey:'id_kedai'})
    Transaction.belongsTo(Menu,{foreignKey:'id_kedai'})
}

module.exports=dbAssociation;