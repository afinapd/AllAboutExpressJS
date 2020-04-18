const express = require('express');
const router = express.Router();
const CalendarService = require('../services/calendar.service')
const tokenValidation = require('../middlewares/token-validation');
const { getAllCalendar, addNewCalendar, updateCalendar, deleteCalendar } = require('../controllers/calendar.controller')
const calendar = require('../models/calendar.model')

const calendarService = new CalendarService(calendar);

router.use(tokenValidation)
router.get('/', (req, res, next) => getAllCalendar(req, res, calendarService))
router.post('/', (req, res, next) => addNewCalendar(req, res, calendarService))
router.put('/', (req, res, next) => updateCalendar(req, res, calendarService))
router.delete('/:id', (req, res, next) => deleteCalendar(req, res, calendarService))

module.exports = router