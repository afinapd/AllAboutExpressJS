const express = require('express');
const router = express.Router();
const WarungService = require('../services/warung.service');
const {beli,struk,listMakanan} = require("../controllers/warung.controller");

const warungService = new WarungService();

router.post('/', (req, res, next) => beli(req, res, warungService));
router.get('/', (req, res, next) => struk(req, res, warungService));
router.get('/list-makanan', (req, res, next) => listMakanan(req, res, warungService));

module.exports = router;