const MenuService = require('../services/menu.service')
const InfoService = require('../services/info.service')
const TransactionService = require('../services/transaction.service')
const AuthService = require('../services/auth.service')
const Menu = require('../models/menu.model')
const Transaction = require('../models/transaction.model')
const User = require('../models/user.model')

let menu
let menuService
let infoService
let transaction
let transactionService
let user
let authService

describe('service testing', () => {
    describe('authen',()=>{
        beforeAll(() => {
            user = new User()
            authService = new AuthService(user)
        })

        it('should auth user',async()=>{
            user.findOne=jest.fn(()=>{
                return{username:'afina', password:'abc'}
            })
            let result = await authService.authenticate(user)
            expect(user.findOne).toBeCalledTimes(1)
            expect(result).toEqual({username:'afina',password:'abc'})
        })      
    })

    describe('menu service', () => {
        beforeAll(() => {
            menu = new Menu()
            menuService = new MenuService(menu)
        })

        it('should call get all menu', async () => {
            menu.findAll = jest.fn(() => {
                return { id_kedai: 1 }
            })
            let result = await menuService.getAllMenu()
            expect(menu.findAll).toBeCalledTimes(1)
            expect(result).toEqual({ id_kedai: 1 })
        })

        it('should throw error when call get all menu failed', async () => {
            menu.findAll = jest.fn(() => {
                throw new Error('dummy error');
            })
            try {
                await menuService.getAllMenu()
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call create menu', async () => {
            let newMenu = { kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000' }
            menu.create = jest.fn(() => {
                return { id_kedai: 1 }
            })
            let result = await menuService.addNewMenu(newMenu)
            expect(menu.create).toBeCalledTimes(1)
            expect(menu.create).toBeCalledWith(newMenu)
            expect(result).toEqual({ id_kedai: 1 })
        })

        it('should throw error when call create menu failed', async () => {
            let newMenu = { kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000' }
            menu.create = jest.fn(() => {
                throw new Error('dummy error')
            })
            try {
                await menuService.addNewMenu(newMenu)
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call update a menu', async()=>{
            menu.update = jest.fn(()=>{
                return {id_kedai: 1, kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000'};
            })
            let result = await menuService.updateMenu(menu)
            expect(menu.update).toBeCalledTimes(1)
            expect(result).toEqual({id_kedai: 1, kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000'})
        })

        it('should throw error when call update menu failed', async () => {
            menu.update = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await menuService.updateMenu(menu)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call delete a menu', async()=>{
            menu.findByPk = jest.fn(()=>{
                return {id_kedai: 1};
            })
            let result = await menuService.deleteMenu()
            expect(menu.findByPk).toBeCalledTimes(1)
            expect(result).toEqual()
        })

        it('should throw error when call delete a menu failed', async () => {
            menu.findByPk = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await menuService.deleteMenu(menu)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('dummy error')
        })
        
    })

    describe('transaction service',()=>{
        beforeAll(() => {
            transaction = new Transaction()
            transactionService = new TransactionService(transaction)
        })

        it('should call get all transaction', async () => {
            transaction.findAll = jest.fn(() => {
                return { id: 1 }
            })
            let result = await transactionService.getAllTransaction()
            expect(transaction.findAll).toBeCalledTimes(1)
            expect(result).toEqual({ id: 1 })
        })

        it('should throw error when call get all transaction failed', async () => {
            transaction.findAll = jest.fn(() => {
                throw new Error('dummy error');
            })
            try {
                await transactionService.getAllTransaction()
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        // it('should call create transaction', async () => {
        //     let newTransaction = {costumer: 'ABC', star: 5, review: 'ABC', id_kedai: 1}
        //     transaction.create = jest.fn(() => {
        //         return { id: 1 }
        //     })
        //     let result = await transactionService.addNewTransaction(newTransaction)
        //     expect(transaction.create).toBeCalledTimes(1)
        //     expect(transaction.create).toBeCalledWith(newTransaction)
        //     expect(result).toEqual({ id: 1 })
        // })

        it('should throw error when call create transaction failed', async () => {
            let newTransaction = {costumer: 'ABC', star: 5, review: 'ABC', id_kedai: 1}
            transaction.create = jest.fn(() => {
                throw new Error('dummy error')
            })
            try {
                await transactionService.addNewTransaction(newTransaction)
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call update a transaction', async()=>{
            transaction.update = jest.fn(()=>{
                return {id: 1, costumer: 'ABC', star: 5, review: 'ABC', id_kedai: 1};
            })
            let result = await transactionService.updateTransaction(transaction)
            expect(transaction.update).toBeCalledTimes(1)
            expect(result).toEqual({id: 1, costumer: 'ABC', star: 5, review: 'ABC', id_kedai: 1})
        })

        it('should throw error when call update transaction failed', async () => {
            transaction.update = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await transactionService.updateTransaction(transaction)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call delete a transaction', async()=>{
            transaction.findByPk = jest.fn(()=>{
                return {id:1};
            })
            let result = await transactionService.deleteTransaction()
            expect(transaction.findByPk).toBeCalledTimes(1)
            expect(result).toEqual()
        })

        it('should throw error when call delete a transaction failed', async () => {
            transaction.findByPk = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await transactionService.deleteTransaction(transaction)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('dummy error')
        })
    })
})

module.exports = {AuthService,InfoService,MenuService,TransactionService}