const express = require('express');
const router = express.Router();
const MenuService = require('../services/menu.service')
const tokenValidation = require('../middlewares/token-validation');
const { getAllMenu, addNewMenu, updateMenu, deleteMenu } = require('../controllers/menu.controller')
const menu = require('../models/menu.model')

const menuService = new MenuService(menu);

router.use(tokenValidation);
router.get('/', (req, res, next) => getAllMenu(req, res, menuService))
router.post('/', (req, res, next) => addNewMenu(req, res, menuService))
router.put('/', (req, res, next) => updateMenu(req, res, menuService))
router.delete('/:id', (req, res, next) => deleteMenu(req, res, menuService))

module.exports = router