const connection = require('./dbConn')
const dbAssociation = require('./src/models')
const Product = require('./src/models/product.model')
const Calendar = require('./src/models/calendar.model')
const Transaction = require('./src/models/transaction.model')
const Users = require('./src/models/user.model')

const bcrypt = require('bcryptjs')

async function migration() {
    dbAssociation()
    await connection.sync({ force: true })
    await dataDummy()
}

async function dataDummy() {
    let product1 = await Product.create({ product_name: 'kopi', price: '5000' })
    let product2 = await Product.create({ product_name: 'susu', price: '1000' })
    let product3 = await Product.create({ product_name: 'teh', price: '4000' })

    var passwordHash = bcrypt.hashSync('P@ssw0rd', 8);
    await Users.create(
        { username: 'afina', password: passwordHash }
    )
}

migration()