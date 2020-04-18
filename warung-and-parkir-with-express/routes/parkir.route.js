const express = require('express');
const router = express.Router();
const ParkirService = require('../services/parkir.service');
const {createLot, getLot, parkirIn, parkirOut, deleteLot} = require("../controllers/parkir.controller");

const parkirService = new ParkirService();

router.get('/getLot', (req, res, next) => getLot(req, res, parkirService));
router.post('/createLot', (req, res, next) => createLot(req, res, parkirService));
router.put('/parkirIn', (req, res, next) => parkirIn(req, res, parkirService));
router.put('/parkirOut', (req, res, next) => parkirOut(req, res, parkirService));
router.delete('/:id', (req, res, next) => deleteParkir(req, res, parkirService));

module.exports = router;