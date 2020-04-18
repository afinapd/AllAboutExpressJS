const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');
const Menu = require('../models/menu.model')

dotenv.config()

class MenuService {
    constructor(menu) {
        this.menu = menu
    }

    async getAllMenu() {
        let result
        try {
            result = await this.menu.findAll()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'GET-MENU',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async addNewMenu(menu) {
        let result
        try {
            result = await this.menu.create({
                kedai: menu.kedai,
                category: menu.category,
                location:menu.location,
                price:menu.price
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'POST-MENU',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async updateMenu(newMenuId) {
        let result
        try {
            result = await this.menu.update({
                kedai: newMenuId.kedai,
                category: newMenuId.category,
                location:newMenuId.location,
                price:newMenuId.price
            }, {
                where:
                    { id_kedai: newMenuId.id_kedai }
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'UPDATE-MENU',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }

    async deleteMenu(menuId) {
        let result
        const menu = await this.menu.findByPk(menuId)
        try {
            result = await menu.destroy()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'DELETE-MENU',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }
}

module.exports = MenuService;