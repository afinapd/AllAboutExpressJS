const express = require('express');
const router = express.Router();
const InfoService = require('../services/info.service');
const tokenValidation = require('../middlewares/token-validation');
const { getFavPlace, getFavCategory } = require("../controllers/info.controller");

const infoService = new InfoService();
router.use(tokenValidation)
router.get('/favplace', (req, res, next) => getFavPlace(req, res, infoService));
router.get('/favcategory', (req, res, next) => getFavCategory(req, res, infoService));

module.exports = router;