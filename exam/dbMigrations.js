const connection = require('./dbConn')
const dbAssociation = require('./src/models')
const Menu = require('./src/models/menu.model')
const Transaction = require('./src/models/transaction.model')
const Users = require('./src/models/user.model')

const bcrypt = require('bcryptjs')

async function migration() {
    dbAssociation()
    await connection.sync({ force: true })
    await dataDummy()
}

async function dataDummy() {
    let menu1 = await Menu.create({ kedai: 'Pizza Barboni', category: 'Italian', location:'Setia Budi', price:'35000-125000'})
    let menu2 = await Menu.create({ kedai: 'Pecel Ayam Mas Miskun', category: 'Local Dish', location:'Cipinang', price:'15000-25000'})

    let transaction1 = await Transaction.create(
        {costumer: 'Afina',star:3, review:'Pizza nya besar tapi Harganya mahal'});
        transaction1.setMenu(menu1);

    let transaction2 = await Transaction.create(
        {costumer: 'Putri',star:5, review:'Sambelnya mantul'});
        transaction2.setMenu(menu2);

    let transaction3 = await Transaction.create(
        {costumer: 'Adi',star:5, review:'enak pars'});
            transaction3.setMenu(menu2);
    
    let transaction4 = await Transaction.create(
        {costumer: 'Ita',star:5, review:'mantulll'});
        transaction4.setMenu(menu2);

    var passwordHash = bcrypt.hashSync('test', 8);
    await Users.create(
        { username: 'afina', password: passwordHash }
    )
}

migration()