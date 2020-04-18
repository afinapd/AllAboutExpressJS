const Product = require('./product.model')
const Calendar = require('./calendar.model')
const Transaction = require('./transaction.model')

const dbAssociation=function dbAssociation(){
    Product.belongsToMany(Calendar,{through:'transaction', foreignKey:'id_product'})
    Calendar.belongsToMany(Product,{through:'transaction', foreignKey:'id_calendar'})
}

module.exports=dbAssociation;