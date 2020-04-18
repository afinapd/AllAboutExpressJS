// const request = require('supertest');
// const server = require("../../server");
// const connection = require('../../dbConn');
// const dbAssociation = require('../models');
// const User = require('../models/user.model');
// const Product = require('../models/product.model');
// const Calendar = require('../models/calendar.model')
// const Transaction = require('../models/transaction.model')
// const bcrypt = require('bcryptjs');


// let token;
// let product;
// let calendar;
// let transaction

// async function loginUser() {
//     const res = await request(server)
//         .post('/auth')
//         .send({
//             username: 'userDummy',
//             password: '123'
//         });
//     return res.body.token;
// }

// async function initDb() {
//     dbAssociation();
//     await connection.sync({ force: true });
//     var passwordHash = bcrypt.hashSync('123', 8);
//     await User.create(
//         { username: 'userDummy', password: passwordHash }
//     );
//     product = await Product.create(
//         { id_product: 1, product_name: 'XYZ', price: '1000' }
//     );
//     calendar = await Calendar.create(
//         { id_calendar: 1, calendar: 'test', week: 1 }
//     )
//     transaction = await Transaction.create(
//         { transaction_code: 123, quantity: 1, id_product: 1, id_calendar: 1 }
//     )
// }

// describe('Route Testing', () => {
//     beforeEach(async (done) => {
//         await initDb();
//         token = await loginUser();
//         done();
//     });

//     describe('Product Route', () => {
//         it('should not create a new product when no token', async () => {
//             const res = await request(server)
//                 .post('/product')
//                 .send({
//                     product_name: 'Product Dummy',
//                     price: 'Price this product'
//                 });
//             expect(res.statusCode).toEqual(401)
//         });

//         it('should create a new product', async () => {
//             const res = await request(server)
//                 .post('/product')
//                 .set('Accept', 'application/json')
//                 .set('Authorization', 'Bearer ' + token)
//                 .send({
//                     product_name: 'Product Dummy',
//                     price: 1000
//                 });
//             expect(res.statusCode).toEqual(200);
//             expect(res.body).toBeDefined();
//         });

//         // it('should get product by id', async () => {
//         //     const res = await request(server)
//         //         .get('/product?id=' + product.id)
//         //         .set('Authorization', 'Bearer ' + token);
//         //     expect(res.statusCode).toEqual(200);
//         //     expect(res.body[0].productCode).toEqual('XYZ');
//         // });

//         it('should get all products', async () => {
//             const res = await request(server)
//                 .get('/product')
//                 .set('Authorization', 'Bearer ' + token);
//             expect(res.statusCode).toEqual(200);
//             expect(res.body.length).toEqual(1);
//         })

//     });


//     describe('Calendar Route', () => {
//         it('should not create a new calendar when no token', async () => {
//             const res = await request(server)
//                 .post('/calendar')
//                 .send({
//                     calendar: 'Product Dummy',
//                     week: 1
//                 });
//             expect(res.statusCode).toEqual(401)
//         });

//         it('should create a new calendar', async () => {
//             const res = await request(server)
//                 .post('/calendar')
//                 .set('Accept', 'application/json')
//                 .set('Authorization', 'Bearer ' + token)
//                 .send({
//                     calendar: 'Product Dummy',
//                     week: 1
//                 });
//             expect(res.statusCode).toEqual(200);
//             expect(res.body).toBeDefined();
//         });

//         it('should get all calendars', async () => {
//             const res = await request(server)
//                 .get('/calendar')
//                 .set('Authorization', 'Bearer ' + token);
//             expect(res.statusCode).toEqual(200);
//             expect(res.body.length).toEqual(1);
//         })

//     });


//     describe('Transaction Route', () => {
//         it('should not create a new transaction when no token', async () => {
//             const res = await request(server)
//                 .post('/transaction')
//                 .send({
//                     transaction_code: 123, 
//                     quantity: 1, 
//                     id_product: 1, 
//                     id_calendar: 2
//                 });
//             expect(res.statusCode).toEqual(401)
//         });


//         it('should create a new transaction', async () => {
//             const res = await request(server)
//                 .post('/transaction')
//                 .set('Accept', 'application/json')
//                 .set('Authorization', 'Bearer ' + token)
//                 .send({
//                     transaction_code: 123, 
//                     quantity: 1, 
//                     id_product: 1, 
//                     id_calendar: 1
//                 });
//             expect(res.statusCode).toEqual(200);
//             expect(res.body).toBeDefined();
//         });

//         it('should get all transactions', async () => {
//             const res = await request(server)
//                 .get('/calendar')
//                 .set('Authorization', 'Bearer ' + token);
//             expect(res.statusCode).toEqual(200);
//             expect(res.body.length).toEqual(1);
//         })

//     });

// });