const request = require('supertest');
const server = require("../../server");
const connection = require('../../dbConn');
const dbAssociation = require('../models');
const User = require('../models/user.model');
const Menu = require('../models/menu.model');
const Transaction = require('../models/transaction.model')
const bcrypt = require('bcryptjs');

let token;
let menu;
let transaction

async function loginUser() {
    const res = await request(server)
        .post('/auth')
        .send({
            username: 'userDummy',
            password: '123'
        });
    return res.body.token;
}

async function initDb() {
    dbAssociation();
    await connection.sync({ force: true });
    var passwordHash = bcrypt.hashSync('123', 8);
    await User.create(
        { username: 'userDummy', password: passwordHash }
    );
    menu = await Menu.create(
        { id_kedai: 1, kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000' }
    );
    transaction = await Transaction.create(
        { id: 1, costumer: 'ABC', star: 5, review: 'ABC', id_kedai: 1 }
    )
}

describe('Route Testing', () => {
    beforeEach(async (done) => {
        await initDb();
        token = await loginUser();
        done();
    });

    describe('Menu Route', () => {
        it('should not create a new menu when no token', async () => {
            const res = await request(server)
                .post('/menu')
                .send({
                    kedai: 'ABC', 
                    category: 'ABC', 
                    location: 'ABC', 
                    price: '1000-2000'
                });
            expect(res.statusCode).toEqual(401)
        });

        it('should create a new menu', async () => {
            const res = await request(server)
                .post('/menu')
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    kedai: 'ABC', 
                    category: 'ABC', 
                    location: 'ABC', 
                    price: '1000-2000'
                });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeDefined();
        });

        it('should get all menus', async () => {
            const res = await request(server)
                .get('/menu')
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1);
        })

    });


    describe('Transaction Route', () => {
        it('should not create a new transaction when no token', async () => {
            const res = await request(server)
                .post('/transaction')
                .send({
                    costumer: 'ABC', 
                    star: 5, 
                    review: 'ABC', 
                    id_kedai: 1
                });
            expect(res.statusCode).toEqual(401)
        });

        it('should create a new transaction', async () => {
            const res = await request(server)
                .post('/transaction')
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    costumer: 'ABC', 
                    star: 5, 
                    review: 'ABC', 
                    id_kedai: 1
                });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeDefined();
        });

        it('should get all transactions', async () => {
            const res = await request(server)
                .get('/transaction')
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1);
        })

    });


    describe('Info Route', () => {
        it('should get all info fav place', async () => {
            const res = await request(server)
                .get('/info/favplace')
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1);
        })

        it('should get all info fav category', async () => {
            const res = await request(server)
                .get('/info/favcategory')
                .set('Authorization', 'Bearer ' + token);
            expect(res.statusCode).toEqual(200);
            expect(res.body.length).toEqual(1);
        })

    });

});