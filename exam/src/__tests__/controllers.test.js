const MenuService = require('../services/menu.service')
const TransactionService = require('../services/transaction.service')
const InfoService = require('../services/info.service')
const {getAllMenu, addNewMenu, updateMenu, deleteMenu} = require('../controllers/menu.controller')

let mockResponse
let mockRequest

describe('controller testing',()=>{
    beforeAll(()=>{
        menuService = new MenuService

        mockResponse =()=>{
            const res = {}
            res.status = jest.fn().mockReturnValue(200)
            res.json = jest.fn().mockReturnValue(res)
            return res
        }

        mockRequest=()=>{
            const req ={}
            return req
        }

        
        mockBodyRequest = () => {
            const req = { body: { kedai: 'ABC', category: 'ABC', location: 'ABC', price: '1000-2000' } }
            return req
        }
    })

    describe('menu controller',()=>{
        it('should call find all', async () => {
            const req = mockRequest()
            const res = mockResponse()
            menuService.getAllMenu = jest.fn(() => {
                return { res }
            });
            await getAllMenu(req, res, menuService)
            expect(res.json).toHaveBeenCalledWith({ res })
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('should add a menu', async () => {
            const req = mockBodyRequest()
            const res = mockResponse()
            const menu = req.body
            menuService.addNewMenu = jest.fn(() => {
                return {kedai: menu.kedai, category:menu.category, location: menu.location, price: menu.price}
            });
            await addNewMenu(req, res, menuService)
            expect(res.json).toHaveBeenCalledWith({kedai: menu.kedai, category:menu.category, location: menu.location, price: menu.price})
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('should update a menu', async () => {
            const req = mockRequest()
            const res = mockResponse()
            const menu = req.body
            menuService.upadateMenu = jest.fn(() => {
                return menu
            });
            await updateMenu(req, res, menuService)
            expect(res.json).toHaveBeenCalledWith(menu)
            expect(res.status).toHaveBeenCalledWith(200)
        })

        // it('should delete a menu', async () => {
        //     const req = mockRequest()
        //     const res = mockResponse()
        //     menuService.upadateMenu = jest.fn(() => {
        //         return {id_kedai: 1}
        //     });
        //     await deleteMenu(req, res, menuService)
        //     expect(res.json).toHaveBeenCalledWith()
        //     expect(res.status).toHaveBeenCalledWith(200)
        // })
    })
})