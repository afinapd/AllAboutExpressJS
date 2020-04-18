const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const {addNewUser, getUserList, deleteUser, updateUser} = require("../controllers/user.controller");

const userService = new UserService();

router.get('/', (req, res, next) => getUserList(req, res, userService));
router.post('/', (req, res, next) => addNewUser(req, res, userService));
router.delete('/:id', (req, res, next) => deleteUser(req, res, userService));
router.put('/', (req, res, next) => updateUser(req, res, userService));

module.exports = router;