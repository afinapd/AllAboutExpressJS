const getAllCalendar = async(req,res,service)=>{
    const calendar = await service.getAllCalendar()
    res.send(calendar);
}

const addNewCalendar = async(req,res,service)=>{
    const calendar = req.body
    const calendars = await service.addNewCalendar(calendar)
    res.send(calendars)
}

const updateCalendar = async(req,res,service)=>{
    const newCalendarId = req.body
    const calendars = await service.updateCalendar(newCalendarId)
    res.send(calendars)
}

const deleteCalendar = async(req,res,service)=>{
    const calendarId = req.params.id
    const calendars = await service.deleteCalendar(calendarId)
    res.send({id:calendarId})
}

module.exports = {getAllCalendar,addNewCalendar,updateCalendar,deleteCalendar}