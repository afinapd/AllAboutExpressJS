const getUserList = async (req, res, service) => {
    const user = await service.getAllUser();
    res.send(user);
};

const addNewUser = async (req, res, service) => {
    const user = req.body;
    const newUser = await service.createUser(user);
    res.send(newUser);
};

const updateUser = async (req, res, service) => {
    const user = req.body;
    const updatedUser = await service.updateUser(user);
    res.send(updatedUser);
};

const deleteUser = async (req, res, service) => {
    const userId = req.params.id;
    const deleteUser = await service.deleteUser(userId);
    res.send({id: userId});
};

module.exports = {
    getUserList, addNewUser, updateUser, deleteUser
};