const createLot = async (req, res, service) => {
    const parkir = req.body;
    const createLot = await service.createLot(parkir);
    res.send(createLot);
};

const getLot = async (req, res, service) => {
    const getLot = await service.getLot();
    res.send(getLot);
};

const parkirIn = async (req, res, service) => {
    const parkir = req.body;
    const parkirIn = await service.parkirIn(parkir);
    res.send(parkirIn);
};

const parkirOut = async (req, res, service) => {
    const parkir = req.body;
    const parkirOut = await service.parkirOut(parkir);
    res.send(parkirOut);
};

const deleteLot = async (req, res, service) => {
    const parkirId = req.params.id;
    const deleteLot = await service.deleteLot(parkirId);
    res.send({id: parkirId});
};

module.exports = {
    createLot, getLot, parkirIn, parkirOut, deleteLot
};