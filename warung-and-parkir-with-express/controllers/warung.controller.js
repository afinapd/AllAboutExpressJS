const beli = async (req, res, service) => {
    const menu = req.body;
    const menus = await service.untukBeli(menu);
    res.send(menus);
};

const struk = async (req, res, service) => {
    const struk = await service.struk();
    res.send(struk);
};

const listMakanan = async (req, res, service) => {
    const listMakanan = await service.listMakanan();
    res.send(listMakanan);
};

module.exports = {
   beli, struk, listMakanan
};