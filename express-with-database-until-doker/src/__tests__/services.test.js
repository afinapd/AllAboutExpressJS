const ProductService = require('../services/product.service')
const CalendarService = require('../services/calendar.service')
const TransactionService = require('../services/transaction.service')
const AuthService = require('../services/auth.service')
const Product = require('../models/product.model')
const Calendar = require('../models/calendar.model')
const Transaction = require('../models/transaction.model')
const User = require('../models/user.model')

let product
let productService
let calendar
let calendarService
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

    describe('product service', () => {
        beforeAll(() => {
            product = new Product()
            productService = new ProductService(product)
        })

        it('should call get all product', async () => {
            product.findAll = jest.fn(() => {
                return { id_product: '1' }
            })
            let result = await productService.getAllProduct()
            expect(product.findAll).toBeCalledTimes(1)
            expect(result).toEqual({ id_product: '1' })
        })

        it('should throw error when call get all product failed', async () => {
            product.findAll = jest.fn(() => {
                throw new Error('dummy error');
            })
            try {
                await productService.getAllProduct()
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call create product', async () => {
            let newProduct = { product_name: '1', price: "5000" }
            product.create = jest.fn(() => {
                return { id_product: '1' }
            })
            let result = await productService.addNewProduct(newProduct)
            expect(product.create).toBeCalledTimes(1)
            expect(product.create).toBeCalledWith(newProduct)
            expect(result).toEqual({ id_product: '1' })
        })

        it('should throw error when call create product failed', async () => {
            let newProduct = { product_name: '1', price: "5000" }
            product.create = jest.fn(() => {
                throw new Error('dummy error')
            })
            try {
                await productService.addNewProduct(newProduct)
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call update a product', async()=>{
            product.update = jest.fn(()=>{
                return {id_product:'1',product_name:'1',price:'4000'};
            })
            let result = await productService.updateProduct(product)
            expect(product.update).toBeCalledTimes(1)
            expect(result).toEqual({id_product:'1',product_name:'1',price:'4000'})
        })

        it('should throw error when call update product failed', async () => {
            product.update = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await productService.updateProduct(product)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call delete a product', async()=>{
            product.findByPk = jest.fn(()=>{
                return {id_product: '1'};
            })
            // product.destroy = jest.fn(() => {
            //     return {status: true}
            // })
            let result = await productService.deleteProduct()
            expect(product.findByPk).toBeCalledTimes(1)
            // expect(product.destroy).toBeCalledTimes(1)
            expect(result).toEqual()
        })

        it('should throw error when call delete a product failed', async () => {
            product.findByPk = jest.fn(()=>{
                throw new Error('dummy error')
            })
            // product.destroy=jest.fn(()=>{
            //     throw new Error('dummy error')
            // })
            try {
                await productService.deleteProduct(product)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('dummy error')
        })
        
    }),

    
    describe('calendar service',()=>{
        beforeAll(() => {
            calendar = new Calendar()
            calendarService = new CalendarService(calendar)
        })

        it('should call get all calendar ', async () => {
            calendar.findAll = jest.fn(() => {
                return { id_calendar: '1' }
            })
            let result = await calendarService.getAllCalendar()
            expect(calendar.findAll).toBeCalledTimes(1)
            expect(result).toEqual({ id_calendar: '1' })
        })

        it('should throw error when call get all calendar failed', async () => {
            calendar.findAll = jest.fn(() => {
                throw new Error('dummy error');
            })
            try {
                await calendarService.getAllCalendar()
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call create calendar', async () => {
            let newCalendar = { calendar: '02-01-2020', week: "1" }
            calendar.create = jest.fn(() => {
                return { id_calendar: '1' }
            })
            let result = await calendarService.addNewCalendar(newCalendar)
            expect(calendar.create).toBeCalledTimes(1)
            expect(calendar.create).toBeCalledWith(newCalendar)
            expect(result).toEqual({ id_calendar: '1' })
        })

        it('should throw error when call create calendar failed', async () => {
            let newCalendar = { calendar: '02-01-2020', week: "1" }
            calendar.create = jest.fn(() => {
                throw new Error('dummy error')
            })
            try {
                await calendarService.addNewCalendar(newCalendar)
            } catch (e) {
                message = e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call update a calendar', async()=>{
            calendar.update = jest.fn(()=>{
                return {id_calendar:'1',calendar: '02-01-2020', week: "1" };
            })
            let result = await calendarService.updateCalendar(calendar)
            expect(calendar.update).toBeCalledTimes(1)
            expect(result).toEqual({id_calendar:'1',calendar: '02-01-2020', week: "1" })
        })

        it('should throw error when call update calendar failed', async () => {
            calendar.update = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await calendarService.updateCalendar(calendar)
            } catch(e){
                message=e.message
            }
            expect(message).toBeTruthy()
            expect(message).toEqual('Error: dummy error')
        })

        it('should call delete a calendar', async()=>{
            calendar.findByPk = jest.fn(()=>{
                return {id_calendar: '1'};
            })
            let result = await calendarService.deleteCalendar()
            expect(calendar.findByPk).toBeCalledTimes(1)
            expect(result).toEqual()
        })

        it('should throw error when call delete a calendar failed', async () => {
            calendar.findByPk = jest.fn(()=>{
                throw new Error('dummy error')
            })
            try {
                await calendarService.deleteCalendar(calendar)
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
                return { transaction_code: '1' }
            })
            let result = await transactionService.getAllTransaction()
            expect(transaction.findAll).toBeCalledTimes(1)
            expect(result).toEqual({ transaction_code: '1' })
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

        it('should call create transaction', async () => {
            let newTransaction = {quantity:"2", id_product:"1",id_calendar:"1" }
            transaction.create = jest.fn(() => {
                return { transaction_code: '1' }
            })
            let result = await transactionService.addNewTransaction(newTransaction)
            expect(transaction.create).toBeCalledTimes(1)
            expect(transaction.create).toBeCalledWith(newTransaction)
            expect(result).toEqual({ transaction_code: '1' })
        })

        it('should throw error when call create transaction failed', async () => {
            let newTransaction = {transaction_code:"1",quantity:"2", id_product:"1",id_calendar:"1"}
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
                return {transaction_code:"1",quantity:"2", id_product:"1",id_calendar:"1"};
            })
            let result = await transactionService.updateTransaction(transaction)
            expect(transaction.update).toBeCalledTimes(1)
            expect(result).toEqual({transaction_code:"1",quantity:"2", id_product:"1",id_calendar:"1"})
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
                return {transaction_code: '1'};
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

module.exports = {AuthService,ProductService,CalendarService,TransactionService}