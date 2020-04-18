const getAllMenu = async(req,res,service)=>{
    const menus = await service.getAllMenu()
    res.json(menus);
    res.status(200)
}

const addNewMenu = async(req,res,service)=>{
    const menu = req.body
    const menus = await service.addNewMenu(menu)
    res.json(menus)
    res.status(200)
}

const updateMenu = async(req,res,service)=>{
    const newMenuId = req.body
    const menu = await service.updateMenu(newMenuId)
    res.json(menu)
    res.status(200)
}

const deleteMenu = async(req,res,service)=>{
    const menuId = req.params.id
    const menu = await service.deleteMenu(menuId)
    res.send({id:menuId})
}

module.exports = {getAllMenu,addNewMenu,updateMenu,deleteMenu}