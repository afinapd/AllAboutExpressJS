const getFavPlace = async(req,res,service)=>{
    const menus = await service.getFavPlace()
    res.json(menus);
    res.status(200)
}

const getFavCategory = async(req,res,service)=>{
    const menus = await service.getFavCategory()
    res.json(menus);
    res.status(200)
}

module.exports = {getFavPlace, getFavCategory}