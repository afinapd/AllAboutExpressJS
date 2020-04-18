const ProductService = require('../services/product.service')
const CalendarService = require('../services/calendar.service')
const TransactionService = require('../services/transaction.service')
const { getAllProduct, addNewProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')
const { getAllCalendar, addNewCalendar } = require('../controllers/calendar.controller')
const { getAllTransaction, addNewTransaction } = require('../controllers/transaction.controller')


let mockResponse;
let mockRequest;
let mockRequestId;
let productService;
let mockBodyRequest
let mockRequestParams

describe('Controller Testing', () => {
    beforeAll(() => {
        productService = new ProductService();
        calendarService = new CalendarService();
        transactionService = new TransactionService();

        mockResponse = () => {
            const res = {}
            res.status = jest.fn().mockReturnValue(200)
            res.json = jest.fn().mockReturnValue(res)
            return res
        }

        mockRequest = () => {
            const req = {}
            return req
        }

        mockRequestId = () => {
            const req = { query: { id_product: '1' } }
            return req
        }

        mockBodyRequest = () => {
            const req = { body: { product_name: 'XYZ', price: '1000' } }
            return req
        }

        mockRequestParams = () => {
            const req = { params: { id_product: '1' } }
            return req
        }
    })

    describe('Product Controller', () => {
        it('should call find all', async () => {
            const req = mockRequest()
            const res = mockResponse()
            productService.getAllProduct = jest.fn(() => {
                return { res }
            });
            await getAllProduct(req, res, productService)
            expect(res.json).toHaveBeenCalledWith({ res })
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('should add a product', async () => {
            const req = mockBodyRequest()
            const res = mockResponse()
            const product = req.body
            productService.addNewProduct = jest.fn((product) => {
                return { id_product: '1', product_name: product.product_name, price: product.price }
            });
            await addNewProduct(req, res, productService)
            expect(res.json).toHaveBeenCalledWith({ id_product: '1', product_name: product.product_name, price: product.price })
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('should update a product', async () => {
            const req = mockRequest()
            const res = mockResponse()
            const product = req.body
            productService.upadateProduct = jest.fn(() => {
                return product
            });
            await updateProduct(req, res, productService)
            expect(res.json).toHaveBeenCalledWith(product)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        // it('should dalete a product', async () => {
        //     const req = mockRequest()
        //     const res = mockResponse()
        //     const product = req.body
        //     productService.daleteProduct = jest.fn(() => {
        //         return product
        //     });
        //     await deleteProduct(req, res, productService)
        //     expect(res.json).toHaveBeenCalledWith(product)
        //     expect(res.status).toHaveBeenCalledWith(200)
        // })

    })
})