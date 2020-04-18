const dotenv = require('dotenv');
const logEvent = require('../events/myEmitter');
// const connection = require('../../dbConn');

dotenv.config()

class CalendarService {
    constructor(calendar) {
        this.calendar = calendar
    }

    async getAllCalendar() {
        let result
        try {
            result = await this.calendar.findAll()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'GET-CALENDAR',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async addNewCalendar(calendar) {
        let result
        try {
            result = await this.calendar.create({
                calendar: calendar.calendar,
                week: calendar.week
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'POST-CALENDAR',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async updateCalendar(newCalendarId) {
        let result
        try {
            result = await this.calendar.update({
                calendar: newCalendarId.calendar,
                week: newCalendarId.week
            }, {
                where:
                    { id_calendar: newCalendarId.id_calendar }
            })
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'UPDATE-CALENDAR',
                logMessage: e
            })
            throw new Error(e)
        } return result
    }

    async deleteCalendar(calendarId) {
        let result
        const calendar = await this.calendar.findByPk(calendarId)
        try {
            result = await calendar.destroy()
        } catch (e) {
            logEvent.emit('APP_ERROR', {
                logTitle: 'DELETE-CALENDAR',
                logMessage: e
            })
            // throw new Error(e)
        } return result
    }
}

module.exports = CalendarService;